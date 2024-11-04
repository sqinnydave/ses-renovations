import { Metadata } from "next"
import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Recent } from "components/Recent/Recent"
import { Slideshow } from "components/Slideshow/Slideshow"
import { GALLERY_GLEBE } from "lp-items"

export const metadata: Metadata = {
  title:
    "Contact Us — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="Contact SES Renovations" items={GALLERY_GLEBE} />
      <section className="main">
        <div className="mx-auto w-full max-w-screen-xl">
          <Contact />
        </div>
      </section>
      <BannerSecondary
        title="About Us"
        content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds."
      />
      <Recent />
      <Footer />
    </>
  )
}
