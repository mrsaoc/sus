import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; // <-- Importe aqui
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "FATEC DSM | Dashboard",
    description: "Painel de controle acadêmico",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <body className={`${poppins.className} bg-neutral-950 text-neutral-200 antialiased selection:bg-white/20`}>
        {children}
        <Analytics /> {/* <-- Coloque ele aqui embaixo do children */}
        </body>
        </html>
    );
}