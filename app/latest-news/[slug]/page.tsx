"use client"

import { useSearchParams } from "next/navigation"
import { BannerSecondary } from "components/BannerSecondary/BannerSecondary"
import Contact from "components/Contact/Contact"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { Slideshow } from "components/Slideshow/Slideshow"
import { LP_NEWS_ITEMS } from "news-items"

function createMarkup(data: any) {
  return {
    __html: data,
  }
}

export default function Web() {
  const searchParams = useSearchParams()
  let pid: any
  pid = searchParams.get("pid")
  if (!pid) {
    return
  }
  let result = LP_NEWS_ITEMS.filter((x) => x.id == pid)
  return (
    <>
      <title>Latest News / SES Renovations</title>
      <Header />
      {result ? <Slideshow title={result[0]?.title || "article title"} items={result[0]?.gallery} /> : ""}
      <main className="main">
        <div className="latest-news prose mx-auto w-full max-w-screen-xl px-4 py-8">
          <div dangerouslySetInnerHTML={createMarkup(result[0]?.content)} />
        </div>
      </main>
      <BannerSecondary
        title="About Us and FAQs"
        content="Based in West Fife we are ideally placed to work throughout the central belt covering Edinburgh, Glasgow, Perth, Fife and Dundee areas for bespoke home builds."
      />
      <Contact />
      <Footer />
    </>
  )
}
