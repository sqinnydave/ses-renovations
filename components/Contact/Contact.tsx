import { EnvelopeOpenIcon, MobileIcon } from "@radix-ui/react-icons"
import { Box, Card, Heading, Link, Text } from "@radix-ui/themes"
import Image from "next/image"
import fb from "public/images/fb.png"

export function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 md:p-6">
        <div className="justify-center gap-4 space-y-4 md:grid md:grid-cols-12 md:space-y-0 lg:grid-cols-12 lg:gap-6">
          <Box className="col-span-12 h-full sm:col-span-4">
            <Card size="2" className="h-full">
              <Heading as="h3" weight="medium" size="4" className="mb-3">
                Contact Us
              </Heading>
              <Heading as="h4" weight="medium" size="3" className="mb-3">
                Registered Address
              </Heading>
              <Text as="p" size="3" className="mb-3">
                5/6, Oakley Industrial Estate,
                <br />
                Carnock Rd, KY12 9QB.
              </Text>
              <Text as="p" size="3" className="mb-3">
                Monday-Friday: 9am to 5pm
                <br />
                Saturday / Sunday: Closed
              </Text>
              <Heading as="h4" weight="medium" size="3" className="mb-3">
                Get In Touch
              </Heading>
              <Text as="p" size="3" className="mb-3">
                <MobileIcon width={20} height={20} className="inline" /> 01383 850182
              </Text>
              <Text as="p" size="3" className="mb-3">
                <EnvelopeOpenIcon width={20} height={20} className="inline" />{" "}
                <Link href="mailto:info@sesrenovations.co.uk">info@sesrenovations.co.uk</Link>
              </Text>
              <Text as="p" size="3" className="mb-0">
                <Image src={fb} alt="Facebook" priority={true} height={20} width={20} className="inline" />{" "}
                <Link href="https://www.facebook.com/SESRenovationsLtd" target="_blank">
                  @SESRenovationsLtd
                </Link>
              </Text>
            </Card>
          </Box>
          <Box className="col-span-12 h-full overflow-hidden rounded sm:col-span-8">
            <iframe
              title="map"
              width="100%"
              height="100%"
              className="map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-3.569483757019043%2C56.08640022631643%2C-3.5642266273498535%2C56.08827082757781&amp;layer=mapnik"
            ></iframe>
          </Box>
        </div>
      </div>
    </section>
  )
}

export default Contact
