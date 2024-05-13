import React from "react";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

type RootLayoutProps = {
  children: React.ReactNode;
};
