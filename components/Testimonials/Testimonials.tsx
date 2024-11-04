"use client"

import { Button } from "@radix-ui/themes"
import { Splide, SplideSlide } from "@splidejs/react-splide"
// import Image from "next/image"
// import React from 'react';
import "@splidejs/splide/dist/css/splide.min.css"

export function Testimonials() {
  return (
    <section className="w-full bg-green-400 bg-gradient-to-r from-green-400 to-green-700">
      <div className="flex flex-col py-8 text-center">
        <h2 className="w-xl mx-auto mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:mb-6">
          What Our Clients Say
        </h2>

        <Splide
          options={{
            rewind: true,
            pagination: false,
            type: "fade",
            autoplay: true,
          }}
        >
          <SplideSlide
            key={1}
            className="text-md flex w-full justify-center self-center text-center text-white lg:text-lg"
          >
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;I can highly recommend SES Renovation as a building firm. I contracted this firm to build a
                downstairs bathroom and shower Room/Porch. I can say the mix of builders were professional polite and
                got on with all the varied jobs in a quick experienced fashion.&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Carol Meikleham</cite>
            </div>
          </SplideSlide>
          <SplideSlide key={2} className="text-md flex justify-center self-center text-white lg:text-lg">
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;Recently had Windows and kitchen installed, service was great from start to finish. Would highly
                recommend them.&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Billy Donaldson</cite>
            </div>
          </SplideSlide>
          <SplideSlide key={3} className="text-md flex justify-center self-center text-white lg:text-lg">
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;The work we commissioned SES Renovations Ltd to carry out for us based on the landscaping design
                has been completed. The quality of work undertaken and delivered by your team has been
                outstanding.&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Paul - Linlithgow</cite>
            </div>
          </SplideSlide>
          <SplideSlide key={4} className="text-md flex justify-center self-center text-white lg:text-lg">
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;Excellent service from start to finish All within budget and excellent standard of workmanship
                Would highly recommend Sean and his Team&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Carol Wood</cite>
            </div>
          </SplideSlide>
          <SplideSlide key={5} className="text-md flex justify-center self-center text-white lg:text-lg">
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;I used SES Renovations for my new kitchen and bathroom, I couldn&apos;t fault them from start to
                finish and the finish product was exceptional.&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Jim Williamson</cite>
            </div>
          </SplideSlide>
          <SplideSlide key={6} className="text-md flex justify-center self-center text-white lg:text-lg">
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;These guys are totally amazing I am blown away with their work they were professional from start
                to finish.&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Robina Murray</cite>
            </div>
          </SplideSlide>
          <SplideSlide key={7} className="text-md flex justify-center self-center text-white lg:text-lg">
            <div className="w-full max-w-screen-xl px-16">
              <blockquote>
                &quot;The SES team did a great job in completely transforming our garden - expertly levelling out and
                returfing one extremely uneven sloping area, installing a gravelled section, an edged curved path and a
                board walkway to link up to the existing decking. They were able and willing to alter plans to fit where
                necessary even where it involved unscheduled work. Very experienced and knowledgeable as well as
                pleasant and helpful.&quot;
              </blockquote>
              <cite className="pt-4 font-medium">Stuart McHugh</cite>
            </div>
          </SplideSlide>
        </Splide>

        <div className="mt-8">
          <Button color="blue" size="3" className="mx-1 mb-4 md:mb-0">
            <a href="https://g.page/r/CS04xFxMmvcyEAg/review" target="_blank" rel="noreferrer" className="flex">
              Leave feedback on Google
            </a>
          </Button>
          <Button color="blue" size="3" className="mx-1">
            <a
              href="https://www.facebook.com/SESRenovationsLtd/reviews/"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              Leave feedback on Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
