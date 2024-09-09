import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://punkbuzz.com"),
  title: { default: "Punkbuzz", template: `%s | Punkbuzz` },
  description: "",
  openGraph: {
    url: "/",
    title: "Influencer Collaboration",
    description: "",
    images: ["/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punkbuzz",
    description: "",
    images: ["/meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        <main className='pt-[56px]'> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
