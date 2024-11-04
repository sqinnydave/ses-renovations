"use client"

import { CaretDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { usePathname } from "next/navigation"
// import React from "react";

const NavigationMenuSES = () => {
  const pathname = usePathname()
  return (
    <NavigationMenu.Root className="relative z-10 flex align-middle">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white sm:p-2 sm:shadow-[0_2px_10px] sm:shadow-blackA4 md:p-3">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded py-2 pl-0 pr-2 text-[13px] font-medium leading-none text-blue11 no-underline outline-none sm:p-3 md:hover:bg-blue3 md:focus:shadow-[0_0_0_2px] md:focus:shadow-blue7 md:active:bg-blue3 lg:text-[16px]"
            href="/"
            active={pathname === "/"}
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded p-2 text-[13px] font-medium leading-none text-blue11 no-underline outline-none data-[state=active]:text-violet11 sm:p-3 md:hover:bg-blue3 md:focus:shadow-[0_0_0_2px] md:focus:shadow-blue7 lg:text-[16px]"
            href="/about"
            active={pathname === "/about"}
          >
            About Us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">
            <NavigationMenu.Link
              className="group flex select-none items-center justify-between gap-0.5 rounded p-2 text-[13px] font-medium leading-none text-blue11 outline-none sm:p-3 md:hover:bg-blue3 md:focus:shadow-[0_0_0_2px] md:focus:shadow-blue7 lg:text-[16px]"
              active={pathname.includes("/services")}
            >
              Our Services{" "}
              <CaretDownIcon
                className="relative top-px text-blue12 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 w-auto p-2 lg:w-[200px]">
            <ul className="m-0 grid w-full list-none grid-flow-row text-center">
              <li className="w-full">
                <NavigationMenu.Link
                  active={pathname === "/services/home-renovations-extensions"}
                  href="/services/home-renovations-extensions"
                  className="block select-none rounded-md p-3 text-[13px] leading-none no-underline outline-none transition-colors hover:bg-blue3 focus:shadow-[0_0_0_2px] focus:shadow-blue7 lg:text-[15px]"
                >
                  <div className="font-medium leading-[1.2] text-blue12">Home Renovations</div>
                </NavigationMenu.Link>
              </li>
              <li className="w-full">
                <NavigationMenu.Link
                  href="/services/home-renovations-extensions"
                  className="block select-none rounded-md p-3 text-[13px] leading-none no-underline outline-none transition-colors hover:bg-blue3 focus:shadow-[0_0_0_2px] focus:shadow-blue7 lg:text-[15px]"
                >
                  <div className="font-medium leading-[1.2] text-blue12">Home Extensions</div>
                </NavigationMenu.Link>
              </li>
              <li className="w-full">
                <NavigationMenu.Link
                  active={pathname === "/services/garden-rooms"}
                  href="/services/garden-rooms"
                  className="block select-none rounded-md p-3 text-[13px] leading-none no-underline outline-none transition-colors hover:bg-blue3 focus:shadow-[0_0_0_2px] focus:shadow-blue7 lg:text-[15px]"
                >
                  <div className="font-medium leading-[1.2] text-blue12">Garden Rooms</div>
                </NavigationMenu.Link>
              </li>
              <li className="w-full">
                <NavigationMenu.Link
                  active={pathname === "/services/insurance-repairs"}
                  href="/services/insurance-repairs"
                  className="block select-none rounded-md p-3 text-[13px] leading-none no-underline outline-none transition-colors hover:bg-blue3 focus:shadow-[0_0_0_2px] focus:shadow-blue7 lg:text-[15px]"
                >
                  <div className="font-medium leading-[1.2] text-blue12">Insurance Repairs</div>
                </NavigationMenu.Link>
              </li>
              <li className="w-full">
                <NavigationMenu.Link
                  active={pathname === "/services/landscaping"}
                  href="/services/landscaping"
                  className="block select-none rounded-md p-3 text-[13px] leading-none no-underline outline-none transition-colors hover:bg-blue3 focus:shadow-[0_0_0_2px] focus:shadow-blue7 lg:text-[15px]"
                >
                  <div className="font-medium leading-[1.2] text-blue12">Landscaping</div>
                </NavigationMenu.Link>
              </li>
              <li className="w-full">
                <NavigationMenu.Link
                  active={pathname === "/services/plumbing-heating"}
                  href="/services/plumbing-heating"
                  className="block select-none rounded-md p-3 text-[13px] leading-none no-underline outline-none transition-colors hover:bg-blue3 focus:shadow-[0_0_0_2px] focus:shadow-blue7 lg:text-[15px]"
                >
                  <div className="font-medium leading-[1.2] text-blue12">Plumbing & Heating</div>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded p-2 text-[13px] font-medium leading-none text-blue11 no-underline outline-none sm:p-3 md:hover:bg-blue3 md:focus:shadow-[0_0_0_2px] md:focus:shadow-blue7 lg:text-[16px]"
            href="/latest-news"
            active={pathname.includes("/latest-news")}
          >
            Latest News
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded py-2 pl-2 pr-0 text-[13px] font-medium leading-none text-blue11 no-underline outline-none sm:p-3 md:hover:bg-blue3 md:focus:shadow-[0_0_0_2px] md:focus:shadow-blue7 lg:text-[16px]"
            href="/contact"
            active={pathname === "/contact"}
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="perspective-[2000px] absolute top-full flex w-full justify-center sm:left-[-15px]">
        <NavigationMenu.Viewport className="data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}

export default NavigationMenuSES
