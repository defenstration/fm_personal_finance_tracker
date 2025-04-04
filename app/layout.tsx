import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from './providers/QueryProvider'
import ClientWrapper from './components/ClientWrapper'

export const metadata: Metadata = {
  title: "Frontend Mentor Personal Finance App Solution by Defenstration",
  description: "Solution for the personal finance challenge on Frontend Mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
