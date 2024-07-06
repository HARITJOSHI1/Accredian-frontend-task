import { Metadata } from "next";
import react from "react";

export const metadata: Metadata = {
  title: "Referral | Join now",
  description: "Invitation page to join the program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
