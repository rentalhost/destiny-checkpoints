import checkpointsExample from "@/checkpoints-example.json";
import { doFetch } from "@/services/FetchService";

type CheckpointAlert =
  | { alertActive: false }
  | { alertActive: true; alertText: string };

export interface CheckpointEmblem {
  emblemUrl: string;
  backgroundColor: { red: number; green: number; blue: number };
}

export interface CheckpointResponse {
  official: CheckpointActivityResponse[] | null;
  community: CheckpointActivityResponse[] | null;
  lastUpdate: number;
  randEmblem: CheckpointEmblem;
  alert: CheckpointAlert;
}

const enum CheckpointFullness {
  EMPTY = "empty",
  HALF = "half",
  FULL = "full",
}

export const enum CheckpointDifficulty {
  UNDEFINED,
  NORMAL,
  MASTER,
}

export interface CheckpointActivityResponse {
  name: string;
  activity: string;
  encounter: string;
  difficultyTier: 1 | 2 | 3;
  players: number;
  maxPlayers: number;
  imgURL: string;
  displayOrder: number;
}

export class CheckpointActivity {
  public activity: string;

  public encounter: string;

  public difficulty: CheckpointDifficulty;

  public constructor(
    public bot: string,
    activity: string,
    encounter: string,
    difficultyTier: 1 | 2 | 3,
    public players: number,
    public maxPlayers: number,
    public image: string
  ) {
    const [activityName] = activity.split(/:\s*/);

    this.activity = activityName!;
    this.encounter = encounter.replace(/,.*/, "");
    this.difficulty =
      difficultyTier === 1
        ? CheckpointDifficulty.UNDEFINED
        : difficultyTier === 2
        ? CheckpointDifficulty.NORMAL
        : CheckpointDifficulty.MASTER;
  }

  public getFullness(): CheckpointFullness {
    const players = this.maxPlayers === 3 ? this.players * 2 : this.players;

    if (players >= 5) {
      return CheckpointFullness.FULL;
    }

    if (players >= 3) {
      return CheckpointFullness.HALF;
    }

    return CheckpointFullness.EMPTY;
  }
}

export class Checkpoint {
  public activities: CheckpointActivity[] = [];

  public emblem: CheckpointEmblem;

  public alert: string | null = null;

  public constructor(response: CheckpointResponse) {
    this.activities = [
      ...(response.official ?? []),
      ...(response.community ?? []),
    ]
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map(
        (activity) =>
          new CheckpointActivity(
            activity.name,
            activity.activity,
            activity.encounter,
            activity.difficultyTier,
            activity.players,
            activity.maxPlayers,
            activity.imgURL
          )
      );

    this.emblem = response.randEmblem;

    if (response.alert.alertActive) {
      this.alert = response.alert.alertText;
    }
  }
}

export const getCheckpointMock = async () =>
  checkpointsExample as unknown as CheckpointResponse;

export const getCheckpoint = async () =>
  doFetch<CheckpointResponse>(
    "https://d2cp.io/platform/checkpoints?emblem=rand",
    { next: { revalidate: 10 } }
  );
