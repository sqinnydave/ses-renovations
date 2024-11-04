import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Box, Card, Heading, Inset, Link, Text } from "@radix-ui/themes"
import { LP_GRID_ITEMS } from "lp-items"

export function Recent() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 md:p-6">
        <h3 className="mb-8 border-b border-gray-300 pb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-blue-900 md:text-4xl">
          Recent Developments
        </h3>
        <div className="grid grid-cols-1 justify-center gap-4 space-y-0 sm:grid-cols-3 md:gap-6 lg:gap-3">
          {LP_GRID_ITEMS.map((singleItem) => (
            <Box key={singleItem.title} className="h-full">
              <Card size="2" className="flex h-full flex-col">
                <Inset
                  clip="padding-box"
                  side="top"
                  pb="current"
                  className="mb-3 h-40 max-h-[100px] bg-blue-500 text-white md:max-h-[200px]"
                >
                  {singleItem.icon}
                </Inset>
                <Heading as="h3" weight="medium" size="4" className="mb-1">
                  {singleItem.title}
                </Heading>
                <Text as="p" size="2">
                  {singleItem.description}
                </Text>
                <Text as="p" size="3" className="mt-auto pt-3">
                  <Link href={singleItem.slug}>
                    View Development <ChevronRightIcon className="inline" />
                  </Link>
                </Text>
              </Card>
            </Box>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recent
