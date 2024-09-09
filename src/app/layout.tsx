import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://incb.us"),
//   title: { default: "InCb", template: `%s | InCb` },
//   description: "",
//   openGraph: {
//     url: "/",
//     title: "Influencer Collaboration",
//     description: "",
//     images: ["/InCb.png"],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Influencer Collaboration",
//     description: "",
//     images: ["/InCb.png"],
//   },
// };

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
