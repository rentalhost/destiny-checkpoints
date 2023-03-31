"use client";

import { useState } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AppContext } from "@/context/AppContext";
import { type CheckpointEmblem } from "@/services/CheckpointService";

export const MasterComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [emblem, setEmblem] = useState<CheckpointEmblem>();

  return (
    <AppContext.Provider value={{ emblem, setEmblem }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </AppContext.Provider>
  );
};
