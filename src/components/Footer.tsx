import { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import { t } from "@/services/TranslationService";

import "./Footer.scss";

const year = new Date().getFullYear();

export const Footer = () => {
  const appContext = useContext(AppContext);

  return (
    <footer className="Footer">
      <div className="container">
        <div>
          Copyright © {year} <strong>D2Checkpoint.com</strong>. {""}
          {t(appContext.language, "All Rights Reserved.")}
        </div>

        <small className="additional">
          {t(appContext.language, "$1 is in no way affiliated with $2, or $3")
            .replace("$1", "D2Checkpoint.com")
            .replace("$2", "Bungie, Inc.")
            .replace("$3", "Sony Interactive Entertainment LLC.")}
        </small>
      </div>
    </footer>
  );
};
