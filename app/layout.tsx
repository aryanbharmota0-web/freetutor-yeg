import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://freetutor-yeg.prayagrakholia7.chatgpt.site"),
  title: "FreeTutor YEG | Free Online Tutoring for Edmonton Kids",
  description:
    "Free, friendly online Math and English tutoring for Edmonton students in grades K-6, led by high-school volunteers.",
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FreeTutor.YEG — Free online Math and English tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeTutor YEG | Free Online Tutoring for Edmonton Kids",
    description:
      "Free, friendly online Math and English tutoring for Edmonton students in grades K-6.",
    images: ["/og.png"],
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
