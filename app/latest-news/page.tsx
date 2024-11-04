import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Box, Card, Heading, Inset, Link, Text } from "@radix-ui/themes"
import { Metadata } from "next"
import { BannerHeader } from "components/BannerHeader/BannerHeader"
import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import Contact from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { LP_NEWS_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title:
    "Latest News — SES Renovations Ltd - Renovation & Builders serving Dunfermline, Edinburgh, Stirling, Perth & Fife.",
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
      <BannerHeader title="Latest News" content="Read about what's been happening in the world of SES Renovations" />
      <main className="main">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <div className="justify-center gap-4 space-y-4 md:grid md:grid-cols-2 md:space-y-0 lg:gap-6">
            {LP_NEWS_ITEMS.map((singleItem) => (
              <Box key={singleItem.title} className="h-full">
                <Card size="2" className="flex h-full flex-col">
                  <Inset
                    clip="padding-box"
                    side="top"
                    pb="current"
                    className="mb-3 h-32 bg-blue-500 text-white lg:h-60"
                  >
                    {singleItem.icon}
                  </Inset>
                  <Heading as="h3" weight="medium" size="4" className="mb-4">
                    {singleItem.title}
                  </Heading>
                  <Text as="p" size="3">
                    {singleItem.description}
                  </Text>
                  <Text as="p" size="3" className="mt-auto flex pt-3">
                    <Link href={singleItem.slug + "?pid=" + singleItem.id}>
                      Read Story <ChevronRightIcon className="inline" />
                    </Link>
                  </Text>
                </Card>
              </Box>
            ))}
          </div>
        </div>
      </main>
      <BannerSecondary
        title="About Us"
        content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds."
      />
      <Contact />
      <Footer />
    </>
  )
}
