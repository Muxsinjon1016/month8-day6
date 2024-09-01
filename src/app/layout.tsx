import type { Metadata } from "next";
import "./globals.css";
import Header from "@/_components/header";
import Footer from "@/_components/footer";

export const metadata: Metadata = {
  title: "Liber user page",
  description: "Description of liber user page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <div className="bg-white mb-14">
              <div className="container py-5">
                <Header />
              </div>
            </div>
            <div className="container">{children}</div>
          </div>
          <div className="bg-[#eef4ff]">
            <div className="container pt-8 pb-16">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
