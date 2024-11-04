"use client"
import "styles/tailwind.css"

import * as Separator from "@radix-ui/react-separator"
// import React from "react"

export function Default() {
  return (
    <Separator.Root
      className="mx-[15px] bg-blue-900 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
      decorative
      orientation="vertical"
    />
  )
}

export default Default
