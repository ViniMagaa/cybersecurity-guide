import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Segurança e Privacidade",
  description:
    "Website educativo sobre segurança e privacidade digital, abordando conceitos de cibersegurança e privacidade na internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <main className="from-navy relative flex min-h-screen flex-col bg-linear-to-br from-15% to-[#131620] to-75%">
          <Menu />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
