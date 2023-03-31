"use client";

import { type CheckpointEmblem } from "@/services/CheckpointService";
import { type AvailableLanguages } from "@/services/TranslationService";
import { createContext } from "react";

interface AppContextInterface {
  emblem?: CheckpointEmblem;
  language?: AvailableLanguages;

  setEmblem(emblem: CheckpointEmblem): void;
  setLanguage(language: AvailableLanguages): void;
}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);
