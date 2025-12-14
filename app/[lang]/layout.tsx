import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
    title: "Pivot (ぴぼっと)",
    description: "Personal homepage of Pivot",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    return (
        <html lang={lang}>
            <body
                className={`${notoSansJP.variable} font-sans antialiased bg-gray-50 text-gray-900 relative`}
            >
                <LanguageSwitcher />
                {children}
            </body>
        </html>
    );
}
