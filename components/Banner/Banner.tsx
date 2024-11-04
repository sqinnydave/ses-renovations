"use client"

import { Quote } from "../Quote/Quote"

type Props = {
  content: string
}

export function Banner({ content }: Props) {
  return (
    <section className="w-full bg-blue-500 bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="mx-auto grid max-w-screen-xl p-4 text-center md:p-6">
        <div>
          <p className="mx-auto mb-6 max-w-4xl text-center font-light text-white lg:mb-8 lg:text-lg">{content}</p>
          <Quote />
        </div>
      </div>
    </section>
  )
}

export default Banner
