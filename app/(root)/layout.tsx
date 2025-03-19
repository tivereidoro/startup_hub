import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Homepage || Startup Hub",
  description: "List your startup for visibility and funding.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={``}>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
