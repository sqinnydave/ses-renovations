import { Metadata } from "next"
// import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Quote } from "components/QuoteAlt/QuoteAlt"
import { Slideshow } from "components/Slideshow/Slideshow"
import { GALLERY_SERVICES_P } from "lp-items"

export const metadata: Metadata = {
  title:
    "Plumbing and Heating — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="Plumbing & Heating" items={GALLERY_SERVICES_P} />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <h2 className="max-w-screen mx-auto mb-6 text-center font-medium lg:text-xl">
            BEAUTIFUL BATHROOMS AT AFFORDABLE PRICES
          </h2>
          <p className="mx-auto mb-6 max-w-full text-center font-light lg:text-lg">
            All our plumbing and heating engineers are fully Gas Safe and Select Electrical registered and also approved
            for Landlord safety checks.
          </p>
          <p className="mx-auto mb-0 max-w-5xl text-center font-light lg:text-lg">
            Fully fitted new boiler installations | Combi boiler swap-outs | Fully fitted bathrooms - Starting from as
            little as £5000, depending on the specification | Underfloor heating | Renewable energy | Rewires
          </p>
        </div>
      </main>
      <section className="bg-blue-500">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <Quote />
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  )
}
