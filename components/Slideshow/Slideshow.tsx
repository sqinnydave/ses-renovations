"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import Image from "next/image"
// import React from 'react';
import "@splidejs/splide/dist/css/splide.min.css"
type Props = {
  title: string
  items: any
}
export function Slideshow({ title, items }: Props) {
  return (
    <section className="relative z-0 max-h-[250px] md:max-h-[350px] xl:max-h-[500px]">
      <h1 className="absolute bottom-0 z-50 mb-6 w-full px-6 text-center text-2xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] md:mb-12 md:text-4xl xl:text-5xl">
        {title}
      </h1>
      <Splide
        options={{
          rewind: true,
          pagination: false,
          type: "fade",
          autoplay: true,
        }}
      >
        {items.map((singleItem: { title: string; url: string }) => (
          <SplideSlide key={singleItem.title}>
            <Image
              src={singleItem.url}
              alt=""
              width="2500"
              height="1483"
              className="max-h-[250px] md:max-h-[350px] xl:max-h-[500px]"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default Slideshow
