"use client";

import { useContext, useEffect, useState } from "react";

import { CheckpointActivity } from "@/components/CheckpointActivity";
import { AppContext } from "@/context/AppContext";
import {
  Checkpoint,
  getCheckpoint,
  type CheckpointResponse,
} from "@/services/CheckpointService";

interface HomePageProps {
  checkpointResponse: CheckpointResponse;
}

export const CheckpointActivities = ({ checkpointResponse }: HomePageProps) => {
  const [checkpoint, setCheckpoint] = useState(
    new Checkpoint(checkpointResponse)
  );
  const appContext = useContext(AppContext);

  useEffect(() => {
    getCheckpoint().then((response) => {
      const checkpointInstance = new Checkpoint(response);

      setCheckpoint(checkpointInstance);
      appContext.setEmblem(checkpointInstance.emblem);
    });
  }, []);

  return (
    <div className="container">
      <div className="activities">
        {checkpoint.activities.map((activity, activityIndex) => (
          <CheckpointActivity
            key={activityIndex}
            activity={activity}
          />
        ))}
      </div>
    </div>
  );
};
