import Image from "next/image";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CheckpointDifficulty,
  type CheckpointActivity as CheckpointActivityItem,
} from "@/services/CheckpointService";
import "./CheckpointActivity.scss";

import { AppContext } from "@/context/AppContext";
import { t } from "@/services/TranslationService";
import { useContext } from "react";

interface CheckpointActivityProps {
  activity: CheckpointActivityItem;
}

interface DifficultyProps {
  level: CheckpointDifficulty;
}

export const Difficulty = ({ level }: DifficultyProps) => {
  const appContext = useContext(AppContext);

  if (level === CheckpointDifficulty.NORMAL) {
    return <div className="difficulty">{t(appContext.language, "Normal")}</div>;
  }

  if (level === CheckpointDifficulty.MASTER) {
    return <div className="difficulty">{t(appContext.language, "Master")}</div>;
  }

  return null;
};

export const CheckpointActivity = ({ activity }: CheckpointActivityProps) => {
  const appContext = useContext(AppContext);

  return (
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

        <h2>{t(appContext.language, activity.activity)}</h2>

        <Difficulty level={activity.difficulty} />
      </div>

      <div className="text">
        <h1>{t(appContext.language, activity.encounter)}</h1>

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
};
