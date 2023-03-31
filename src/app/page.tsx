"use client";

import { useContext, useEffect, useState } from "react";

import { CheckpointActivity } from "@/components/CheckpointActivity";
import { AppContext } from "@/context/AppContext";
import { getCheckpoint, type Checkpoint } from "@/services/CheckpointService";

export default function Home() {
  const [checkpoint, setCheckpoint] = useState<Checkpoint>();
  const appContext = useContext(AppContext);

  useEffect(() => {
    getCheckpoint().then((checkpointResponse) => {
      setCheckpoint(checkpointResponse);
      appContext.setEmblem(checkpointResponse.emblem);
    });
  }, []);

  return (
    <div className="container">
      <div className="activities">
        {checkpoint?.activities.map((activity, activityIndex) => (
          <CheckpointActivity
            key={activityIndex}
            activity={activity}
          />
        ))}
      </div>
    </div>
  );
}
