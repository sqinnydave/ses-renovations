import { Metadata } from "next"
import { Banner } from "components/Banner/Banner"
import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { LatestNews } from "components/LatestNews/LatestNews"
import { OurServices } from "components/OurServices/OurServices"
import { Recent } from "components/Recent/Recent"
import { Testimonials } from "components/Testimonials/Testimonials"
import { Video } from "components/Video/Video"

export const metadata: Metadata = {
  title: "Home — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Video />
      <Banner content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds. Building homes that cater for your every need." />
      <OurServices />
      <BannerSecondary
        title="About Us"
        content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds."
      />
      <LatestNews />
      <Testimonials />
      <Recent />
      <BannerSecondary
        title="About Us"
        content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds."
      />
      <Contact />
      <Footer />
    </>
  )
}
