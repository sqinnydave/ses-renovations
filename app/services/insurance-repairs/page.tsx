import { Metadata } from "next"
import AccordionDemo from "components/Accordion/Accordion"
// import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Quote } from "components/QuoteAlt/QuoteAlt"
import { Slideshow } from "components/Slideshow/Slideshow"
import { ACCORDION_SERVICE_I, GALLERY_SERVICES_I } from "lp-items"

export const metadata: Metadata = {
  title:
    "Insurance Repairs — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="Insurance Repairs" items={GALLERY_SERVICES_I} />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <h2 className="mx-auto mb-8 text-center font-medium lg:text-xl">
            HERE TO HELP YOU REBUILD, WHEN THE WORST HAPPENS.
          </h2>
          <div className="items-top grid grid-cols-12 gap-8 align-top">
            <div className="col-span-12 align-top md:col-span-6">
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                We specialise in building repair and reinstatement and have worked for businesses, loss adjusters,
                insurance companies and property owners across, Fife, Tayside, Edinburgh and the Central Belt.
              </p>
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                We provide a comprehensive service from initial emergency cleanups or dry downs right through to full
                reinstatement of damaged properties.
              </p>
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                Prior to any building repairs taking place, we can provide a schedule of works. This helps the
                property&apos;s occupier understand the logistics of the project and helps us manage the project
                efficiently and effectively.
              </p>
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                <a href="/">Download Our Insurance Repair Brochure</a>
              </p>
            </div>
            <div className="col-span-12 align-top md:col-span-6">
              <AccordionDemo items={ACCORDION_SERVICE_I} />
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
