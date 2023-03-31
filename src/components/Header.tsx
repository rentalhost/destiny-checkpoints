"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { AppContext } from "@/context/AppContext";

import "./Header.scss";

export const Header = () => {
  const appContext = useContext(AppContext);

  return (
    <header
      className="Header"
      style={{ backgroundImage: `url(${appContext.emblem?.emblemUrl})` }}
    >
      <div className="container">
        <div className="title">
          <Image
            src="/icons/favicon-32x32.png"
            width={32}
            height={32}
            alt="Logo"
          />
          <span>D2Checkpoint.com</span>
        </div>

        <div className="buttons">
          <Link href="https://discord.gg/d2checkpoint">Discord</Link>
        </div>
      </div>
    </header>
  );
};
