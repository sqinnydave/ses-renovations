import { Metadata } from "next"
// import AccordionDemo  from "components/Accordion/Accordion"
import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Slideshow } from "components/Slideshow/Slideshow"
import { GALLERY_GLEBE } from "lp-items"

export const metadata: Metadata = {
  title: "Recent Development - The Glebe - S.Ewing And Sons",
  twitter: {
    card: "summary_large_image",
  },
  icons: {},
  openGraph: {
    url: "https://sewingandsons.vercel.app/",
    images: [
      {
        width: 256,
        height: 70,
        url: "https://sewingandsons.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.7244df39.png&w=256&q=75",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Header />
      <Slideshow title="Glebe Housing Development" items={GALLERY_GLEBE} />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8">dev</div>
      </main>
      <BannerSecondary
        title="About Us and FAQs"
        content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds."
      />
      <Footer />
    </>
  )
}
