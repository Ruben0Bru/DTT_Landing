import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usamos Inter que es estándar y limpia
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://destinotierralta.com"),
  title: "Destino Tierralta Travel | Turismo de Naturaleza y Aventura",
  description: "Descubre el Alto Sinú: Kayak, senderismo, cultura Emberá y más. Reserva tu experiencia en Tierralta, Córdoba.",
  openGraph: {
    title: "Destino Tierralta Travel",
    description: "Experiencias reales en el corazón verde del Alto Sinú.",
    url: "https://destinotierralta.com", // (Pondremos tu URL real luego)
    siteName: "Destino Tierralta",
    images: [
      {
        url: "/hero.jpg", // Usará tu foto principal como portada al compartir
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}