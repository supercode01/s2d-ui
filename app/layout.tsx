import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sketch2Design — Turn Moodboards & Sketches into Real UI with AI",
  description:
    "Sketch2Design generates color palettes and typography from your moodboards, turns inspiration and canvas sketches into real UI, and lets you refine everything with an AI design chat. Generate entire website workflows in one click.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
