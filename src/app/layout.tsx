import { Poppins } from "next/font/google";

import "./globals.scss";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export default ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-br">
    <body className={poppins.className}>{children}</body>
  </html>
);
