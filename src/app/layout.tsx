import { Poppins } from "next/font/google";

import { MasterComponent } from "@/app/MasterComponent";

import "./globals.scss";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <MasterComponent children={children} />
      </body>
    </html>
  );
};

export const metadata = {
  title: "D2Checkpoint.com",
  description:
    "D2Checkpoint.com - Our bots provide activity checkpoints 24/7, " +
    "so whether you're a casual player or a hardcore raider, " +
    "our service can help you make the most of your playtime and enhance your gaming experience. " +
    "#Destiny2 #CheckpointService #GamingCommunity",

  colorScheme: "dark",
  themeColor: "#222222",

  manifest: "/site.webmanifest",

  icons: {
    shortcut: "/icons/favicon.ico",
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
      },
    ],
  },

  other: {
    "apple-mobile-web-app-title": "D2Checkpoint",
    "application-name": "D2Checkpoint",
    "msapplication-TileColor": "#603cba",
    "msapplication-config": "/browserconfig.xml",
  },

  openGraph: {
    title: "D2Checkpoint.com",
    description:
      "D2Checkpoint.com - Our bots provide activity checkpoints 24/7, " +
      "so whether you're a casual player or a hardcore raider, " +
      "our service can help you make the most of your playtime and enhance your gaming experience. " +
      "#Destiny2 #CheckpointService #GamingCommunity",
    images: [
      {
        url: "https://d2checkpoint.com/icons/android-chrome-256x256.png",
        width: 256,
        height: 256,
      },
    ],
    url: "https://d2checkpoint.com",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "D2Checkpoint.com",
    description:
      "D2Checkpoint.com - Our bots provide activity checkpoints 24/7, " +
      "so whether you're a casual player or a hardcore raider, " +
      "our service can help you make the most of your playtime and enhance your gaming experience. " +
      "#Destiny2 #CheckpointService #GamingCommunity",
    images: [
      {
        url: "https://d2checkpoint.com/icons/android-chrome-256x256.png",
        width: 256,
        height: 256,
      },
    ],
  },
};
