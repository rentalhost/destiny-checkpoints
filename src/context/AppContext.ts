"use client";

import { type CheckpointEmblem } from "@/services/CheckpointService";
import { createContext } from "react";

interface AppContextInterface {
  emblem?: CheckpointEmblem;
  setEmblem(emblem: CheckpointEmblem): void;
}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);
