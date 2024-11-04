import { Metadata } from "next"
import { Contact } from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
// import { LatestNews } from "components/LatestNews/LatestNews"
// import { Recent } from "components/Recent/Recent"
import OurServices from "components/OurServices/OurServices"
import { Slideshow } from "components/Slideshow/Slideshow"
import { Testimonials } from "components/Testimonials/Testimonials"
import { GALLERY_ABOUT } from "lp-items"

export const metadata: Metadata = {
  title:
    "About Us — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <Slideshow title="About SES Renovations" items={GALLERY_ABOUT} />
      <section className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <h2 className="mx-auto mb-6 max-w-5xl text-center font-medium lg:text-lg">
            SES Renovations are a forward-thinking construction and landscaping company based in the heart of Scotland.
          </h2>
          <p className="lg:text-md mx-auto mb-6 max-w-5xl text-center font-light">
            What we offer is a wealth of experience combined with quality workmanship, outstanding attention to detail
            and unbridled customer care.
          </p>
          <p className="lg:text-md mx-auto mb-6 max-w-5xl text-center font-light">
            We are fully insured & all work is guaranteed!
          </p>
          <h3 className="mx-auto mb-6 text-center font-medium lg:text-xl">Attention to detail</h3>
          <p className="lg:text-md mx-auto mb-6 max-w-5xl text-center font-light">
            Delivering client-focused attention to detail has ensured this business&apos;s survival through turbulent
            times and whether it be a full architect-designed new house build, attic conversion or house extension
            through to detailed landscaping project right down to a shed base, no job is too small or large.
          </p>
          <h3 className="mx-auto mb-6 text-center font-medium lg:text-xl">Working to high standards</h3>
          <p className="lg:text-md mx-auto mb-0 max-w-5xl text-center font-light">
            Our work is guaranteed, insured and in most cases endorsed by an independent third party. A member of many
            trade bodies means that all works can be independently assessed and vetted to ensure a high standard of
            workmanship allied to high attainment of customer satisfaction is constantly monitored and maintained.
          </p>
        </div>
      </section>
      <OurServices />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
