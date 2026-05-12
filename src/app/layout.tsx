import type { Metadata } from "next";
import "./globals.css";

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
