import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import PageLoaderSPA from "@/components/PageLoaderSPA";
import "./globals.css";


const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Henrique Petry - Portfolio",
  description: "Desenvolvedor Full Stack | Portfolio Profissional",
};

const theme = createTheme({
  fontFamily: "var(--font-archivo)",
  headings: {
    fontFamily: "var(--font-archivo)",
  },
  primaryColor: "dark",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        
        {/* Preload da logo para carregar mais rápido */}
        <link 
          rel="preload" 
          href="/logo.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Preload da fonte para evitar FOUT */}
        <link
          rel="preload"
          href="/fonts/archivo.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${archivo.variable} font-sans`}>
        {/* Loading Screen - aparece primeiro */}
        <PageLoaderSPA />
        
        {/* Conteúdo principal */}
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}