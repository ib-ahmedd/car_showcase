import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

type RootLayoutProps = {
  children: React.ReactNode;
};
