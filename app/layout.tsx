import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Maher | Senior Flutter Developer",
  description:
    "Portfolio of Ahmed Maher, Senior Flutter Developer building scalable production mobile applications for iOS and Android.",
  keywords: [
    "Ahmed Maher",
    "Flutter Developer",
    "Senior Flutter Developer",
    "Dart",
    "Mobile Developer",
    "Egypt",
  ],
  openGraph: {
    title: "Ahmed Maher | Senior Flutter Developer",
    description:
      "Scalable, maintainable and high-performance mobile products built with Flutter.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
