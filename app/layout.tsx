import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreeTutor YEG | Free Online Tutoring for Edmonton Kids",
  description:
    "Free, friendly online Math and English tutoring for Edmonton students in grades K-6, led by vetted high-school volunteers.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "FreeTutor YEG | Free Online Tutoring for Edmonton Kids",
    description:
      "Free, friendly online Math and English tutoring for Edmonton students in grades K-6.",
    type: "website",
    locale: "en_CA",
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

