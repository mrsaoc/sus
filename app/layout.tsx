import type { Metadata } from "next";
// 1. Importar a fonte Nunito
import { Nunito } from "next/font/google";
import "./globals.css";

// 2. Configurar a fonte
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700", "900"], // Pesos variados para brincar
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    title: "Atendimento Hello Kitty SUS",
    description: "O sistema mais fofo e ineficiente do Brasil",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        {/* 3. Aplicar a classe da fonte no body */}
        <body className={`${nunito.className} bg-pink-100 antialiased`}>
        {children}
        </body>
        </html>
    );
}