import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trippydak.com"),
  other: {
    "codex-preview": "development",
  },
  title: "trippydak — Tech Made Stranger",
  description:
    "The digital headquarters of trippydak: rooted devices, rescued hardware, visual experiments, and ideas outside the default setting.",
  openGraph: {
    title: "trippydak — Tech Made Stranger",
    description:
      "Rooted devices. Rescued hardware. Visual experiments. Welcome to the original frequency.",
    type: "website",
    url: "https://trippydak.com",
    siteName: "trippydak",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "trippydak — tech made stranger. art made personal.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "trippydak — Tech Made Stranger",
    description:
      "Rooted devices. Rescued hardware. Visual experiments. Welcome to the original frequency.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
