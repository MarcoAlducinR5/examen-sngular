import { Quantico } from "next/font/google";
import "./globals.css";

const quanticoRegular = Quantico({
  variable: "--font-quantico-regular",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Examen SNGULAR",
  description: "Prueba tecnica que realice para aplicar en la empresa SNGULAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${quanticoRegular.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
