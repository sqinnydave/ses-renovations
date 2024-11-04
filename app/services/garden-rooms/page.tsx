import { Metadata } from "next"
// import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Quote } from "components/QuoteAlt/QuoteAlt"
import { Slideshow } from "components/Slideshow/Slideshow"
import { GALLERY_SERVICES_G } from "lp-items"

export const metadata: Metadata = {
  title:
    "Garden Rooms — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="Garden Rooms" items={GALLERY_SERVICES_G} />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <h2 className="mx-auto mb-8 text-center font-medium lg:text-xl">
            BEAUTIFUL GARDEN ROOMS AT AFFORDABLE PRICES
          </h2>
          <p className="lg:text-md mx-auto mb-6 max-w-6xl text-center font-light">
            At SES Renovations, our design experts and skilled tradespeople can help maximise your home living space to
            help create a home office, gym or additional family room. There are many benefits of this that will
            ultimately add value to your property and create that all-important extra living space. Whatever your
            budget, we can help get you started.
          </p>
          <h2 className="mx-auto mb-6 text-center font-medium lg:text-xl">REPRESENTATIVE EXAMPLE</h2>
          <ul className="mb-6 text-center">
            <li>Garden room 3m x 4m.</li>
            <li>French doors, [anthracite, white, rosewood, oak].</li>
            <li>Window.</li>
            <li>4 x 2 reg treated framing.</li>
            <li>Insulation and vapour barrier.</li>
            <li>Section of PVC lining to match doors and fascia.</li>
            <li>Log lap lining boards.</li>
            <li>Stilt style flooring with chipboard and insulation.</li>
            <li>Plasterboard and Ames taped ready for décor.</li>
            <li>6 white led downlighters and 3 double sockets.1 switch.</li>
          </ul>
          <p className="lg:text-md mx-auto mb-6 max-w-6xl text-center font-medium">Starting from only £14,000</p>
          <p className="lg:text-md mx-auto mb-6 max-w-6xl text-center font-light">
            Optional extras - Composite decking.
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
