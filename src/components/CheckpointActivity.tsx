import Image from "next/image";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CheckpointDifficulty,
  type CheckpointActivity as CheckpointActivityItem,
} from "@/services/CheckpointService";

import "./CheckpointActivity.scss";

interface CheckpointActivityProps {
  activity: CheckpointActivityItem;
}

interface DifficultyProps {
  level: CheckpointDifficulty;
}

export const Difficulty = ({ level }: DifficultyProps) => {
  if (level === CheckpointDifficulty.NORMAL) {
    return <div className="difficulty">Normal</div>;
  }

  if (level === CheckpointDifficulty.MASTER) {
    return <div className="difficulty">Master</div>;
  }

  return null;
};

export const CheckpointActivity = ({ activity }: CheckpointActivityProps) => (
  <div
    className="CheckpointActivity"
    data-fullness={activity.getFullness()}>
    <div className="imageBlock">
      <Image
        src={activity.image}
        width={520}
        height={520}
        alt={activity.bot}
      />

      <h2>{activity.activity}</h2>

      <Difficulty level={activity.difficulty} />
    </div>

    <div className="text">
      <h1>{activity.encounter}</h1>

      <div className="fireteam">
        <div className="wrapper">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <span className="current">{activity.players}</span>
          <span className="max">{activity.maxPlayers}</span>
        </div>
      </div>

      <h3>{activity.bot}</h3>
    </div>
  </div>
);
