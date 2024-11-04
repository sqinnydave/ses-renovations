import { Metadata } from "next"
import AccordionDemo from "components/Accordion/Accordion"
// import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Quote } from "components/QuoteAlt/QuoteAlt"
import { Slideshow } from "components/Slideshow/Slideshow"
import { ACCORDION_SERVICE_HE, GALLERY_SERVICES_HE } from "lp-items"

export const metadata: Metadata = {
  title:
    "Home Renovations — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="Home Renovations and Extensions" items={GALLERY_SERVICES_HE} />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <h2 className="mx-auto mb-8 text-center font-medium lg:text-xl">
            SES Renovations are your #1 firm for all your Home EXTENSION needs in Edinburgh, Fife, Perth, Stirling & the
            Central Belt
          </h2>
          <div className="items-top grid grid-cols-12 gap-8 align-top">
            <div className="col-span-12 text-center align-top lg:col-span-6 lg:text-left">
              <h3 className="mx-auto mb-4 font-medium lg:text-lg">DETAIL-FOCUSED WORKMANSHIP</h3>
              <p className="lg:text-md mx-auto mb-6 max-w-6xl font-light">
                SES Renovations Ltd are the only builders in Edinburgh, Fife, Tayside and the Central Belt you need when
                it comes to new builds, attic conversions, conservatories, house extensions, garage conversions or
                kitchen refurbishment. We only hire highly skilled and qualified builders who understand our ethos of
                passion, professionalism and trust. Our aim is to deliver superior building work and customer
                satisfaction at low prices.
              </p>
              <h3 className="mx-auto mb-4 font-medium lg:text-lg">MAKE YOUR HOME BEAUTIFUL ON A BUDGET</h3>
              <p className="lg:text-md mx-auto mb-0 max-w-6xl font-light">
                Our skilled team at At SES Renovations offer a range of building services in Edinburgh, Fife, Tayside
                and the Central Belt at prices that are affordable to you and your family. Many customers choose to
                refurbish their homes or add space via conversions and extensions rather than buying a new home. We can
                help you improve or add space to your home at a budget agreed on before the building project starts.
              </p>
            </div>
            <div className="col-span-12 align-top lg:col-span-6">
              <h3 className="mx-auto mb-6 text-center font-medium lg:text-left lg:text-lg">WHAT WE CAN DO</h3>
              <AccordionDemo items={ACCORDION_SERVICE_HE} />
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
