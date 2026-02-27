import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seniors Housing Capital Markets | Colliers Ontario Multifamily",
  description: "Expert advisory for seniors housing and retirement living investment sales across Ontario. Data-driven insight, capital markets expertise, and strategic guidance.",
  openGraph: {
    title: "Seniors Housing Capital Markets | Colliers",
    description: "Expert advisory for seniors housing investment sales across Ontario.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
