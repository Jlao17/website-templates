import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    images: siteConfig.seo.ogImage ? [{ url: siteConfig.seo.ogImage }] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = siteConfig.theme;

  return (
    <html lang="en">
      <head>
        {siteConfig.favicon && <link rel="icon" href={siteConfig.favicon} />}
      </head>
      <body
        style={
          {
            "--primary": theme.primaryColor,
            "--primary-dark": theme.primaryDarkColor,
            "--secondary": theme.secondaryColor,
            "--accent": theme.accentColor,
            "--muted": theme.mutedColor,
            "--muted-foreground": theme.mutedForegroundColor,
            "--card-bg": theme.cardBgColor,
            "--font-heading": theme.fontHeading,
            "--font-body": theme.fontBody,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
