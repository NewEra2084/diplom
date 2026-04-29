import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Scrumify",
  description: "The scrum management tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="transition-all selection:bg-accent/50 dark:selection:bg-dark-accent/50">{children}</body>
    </html>
  );
}
