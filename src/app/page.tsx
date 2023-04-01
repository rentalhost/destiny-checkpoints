import { CheckpointActivities } from "@/components/CheckpointActivities";
import { getCheckpointMock } from "@/services/CheckpointService";

export default async function Page() {
  const checkpoint = await getCheckpointMock();

  return <CheckpointActivities checkpointResponse={checkpoint} />;
}
