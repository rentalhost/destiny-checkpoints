"use client";

import { match } from "@formatjs/intl-localematcher";
import { useEffect, useState } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AppContext } from "@/context/AppContext";
import { type CheckpointEmblem } from "@/services/CheckpointService";
import {
  languages,
  type AvailableLanguages,
} from "@/services/TranslationService";

export const MasterComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [emblem, setEmblem] = useState<CheckpointEmblem>();
  const [language, setLanguage] = useState<AvailableLanguages>("en");

  useEffect(() => {
    setLanguage(
      match(
        window.navigator.languages as string[],
        Object.keys(languages),
        "en"
      ) as AvailableLanguages
    );
  }, []);

  return (
    <AppContext.Provider value={{ emblem, setEmblem, language, setLanguage }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </AppContext.Provider>
  );
};
