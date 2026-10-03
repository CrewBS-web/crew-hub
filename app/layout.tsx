import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { APP_DESCRIPTION, APP_NAME, GTM_ID, SERVER_URL } from "@/lib/constants";

import "@/assets/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
  title: {
    template: `%s | Crew`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={GTM_ID} />
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
