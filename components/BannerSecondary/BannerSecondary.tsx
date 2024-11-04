"use client"

import { Button } from "@radix-ui/themes"

type Props = {
  title: string
  content: string
}

export function BannerSecondary({ title, content }: Props) {
  return (
    <section className="w-full bg-blue-500 bg-gradient-to-r from-gray-400 to-gray-600">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center">
        <div className="mx-auto place-self-center">
          <h2 className="w-xl mx-auto mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mb-6 max-w-4xl font-light text-white md:text-lg lg:mb-8 lg:text-lg">{content}</p>
          <Button color="blue" size="3" className="mx-1">
            <a href="/about" className="flex">
              Find out more about us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BannerSecondary
