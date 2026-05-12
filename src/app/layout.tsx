import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f59e0b",
};

export const metadata: Metadata = {
  title: "Bagheera Cafe & Lounge — Leave Us a Review ☕",
  description:
    "Love your experience at Bagheera Cafe & Lounge, Hudson Lane, GTB Nagar? Tap a review, paste it on Google, and help us grow!",
  openGraph: {
    title: "Bagheera Cafe & Lounge — Leave Us a Review",
    description:
      "Help us by sharing your experience on Google. It takes just 10 seconds!",
    type: "website",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
