import { Metadata } from "next"
import AccordionDemo from "components/Accordion/Accordion"
// import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Quote } from "components/QuoteAlt/QuoteAlt"
import { Slideshow } from "components/Slideshow/Slideshow"
import { ACCORDION_SERVICE_L, GALLERY_SERVICES_L } from "lp-items"

export const metadata: Metadata = {
  title:
    "Landscaping — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="Landscaping & Garden Design" items={GALLERY_SERVICES_L} />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <h2 className="mx-auto mb-8 text-center font-medium lg:text-xl">BEAUTIFUL GARDENS AT AFFORDABLE PRICES</h2>
          <div className="items-top grid grid-cols-12 gap-8 align-top">
            <div className="col-span-12 align-top md:col-span-6">
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                Explore our comprehensive range of garden design and landscaping services.
              </p>
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                Covering fife and surrounding areas. From professional decking, paving, driveways, garden landscaping
                and much more.
              </p>
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                We have a desire and determination to ensure 100% customer satisfaction on every landscaping project we
                undertake throughout Fife, Edinburgh and the Central Belt.
              </p>
            </div>
            <div className="col-span-12 align-top md:col-span-6">
              <AccordionDemo items={ACCORDION_SERVICE_L} />
            </div>
          </div>
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
