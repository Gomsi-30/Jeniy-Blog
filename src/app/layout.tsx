import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://incb.netlify.app"),
  title: { default: "InCb", template: `%s | InCb` },
  description: "Influencer collaboration platform for connecting influencers with brands.",
  openGraph: {
    url: "/",
    title: "Influencer Collaboration",
    description: "Connect with top influencers for brand collaborations.",
    images: ["/mainLogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Collaboration",
    description: "Connect with top influencers for brand collaborations.",
    images: ["/mainLogo.png"],
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
