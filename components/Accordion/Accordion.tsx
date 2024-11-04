import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
// import React from 'react';
type Props = {
  items: any
}
const AccordionDemo = ({ items }: Props) => (
  <Accordion.Root
    className="w-full rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {items.map((item: { title: any; text: any; id: any }) => (
      <Accordion.AccordionItem
        key={item.id}
        value={item.id}
        className="mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12"
      >
        <Accordion.AccordionHeader className="flex">
          <Accordion.AccordionTrigger className="font-medium11 group flex h-[55px] flex-1 cursor-default items-center justify-between bg-white px-5 text-left text-[15px] font-medium leading-none text-blue11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2 lg:text-lg">
            {item.title}
            <ChevronDownIcon
              className="text-blue12 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.AccordionTrigger>
        </Accordion.AccordionHeader>
        <Accordion.AccordionContent className="overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <div className="px-5 py-[15px]">{item.text}</div>
        </Accordion.AccordionContent>
      </Accordion.AccordionItem>
    ))}
  </Accordion.Root>
)

export default AccordionDemo
