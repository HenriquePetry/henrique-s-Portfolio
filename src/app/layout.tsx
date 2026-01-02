import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};
const theme = createTheme({
  fontFamily: "var(--font-archivo)",
  headings: {
    fontFamily: "var(--font-archivo)",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body
        className={`bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
