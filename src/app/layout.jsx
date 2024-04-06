import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  console.log({children})
  return (
    <html lang="fr">
      <body>
        <main>
          {children} 
        </main>
      </body>
    </html>
  );
}
