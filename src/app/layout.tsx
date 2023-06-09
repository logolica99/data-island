import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "@next/font/local";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const akrobat = localFont({
  src: [
    {
      path: "Fonts/Akrobat/Akrobat-Black.ttf",
      weight: "800",
    },
    {
      path: "Fonts/Akrobat/Akrobat-Bold.ttf",
      weight: "600",
    },
    {
      path: "Fonts/Akrobat/Akrobat-ExtraBold.ttf",
      weight: "650",
    },
    {
      path: "Fonts/Akrobat/Akrobat-ExtraLight.ttf",
      weight: "250",
    },
    {
      path: "Fonts/Akrobat/Akrobat-Light.ttf",
      weight: "300",
    },
    {
      path: "Fonts/Akrobat/Akrobat-Regular.ttf",
      weight: "400",
    },
    {
      path: "Fonts/Akrobat/Akrobat-SemiBold.ttf",
      weight: "500",
    },
    {
      path: "Fonts/Akrobat/Akrobat-Thin.ttf",
      weight: "200",
    },
  ],
  variable: "--font-akrobat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${akrobat.variable}`}>
        {children}
      </body>
    </html>
  );
}
