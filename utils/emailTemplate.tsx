import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

export function Email(props: { name: any; email: any; phone: any; postcode: any; length: any; width: any; url: any }) {
  const { name, email, phone, postcode, length, width, url } = props
  return (
    <Html style={main}>
      <Head />
      <Preview>Your Quote Summary:</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  style={sectionLogo}
                  src="https://sewingandsons.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.7244df39.png&w=256&q=75"
                  width="256"
                  height="75"
                  alt="Sewing Developments"
                />
              </Column>
            </Row>
          </Section>
          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>THANKS FOR YOUR INTEREST!</Text>
            <Text style={paragraph}>Hello {name},</Text>
            <Text style={paragraph}>This is a summary of your recent quote on our website:</Text>
            <Text style={paragraph}>
              <ul>
                <li>
                  <b>Name:</b> {name}
                </li>
                <li>
                  <b>Email:</b> {email}
                </li>
                <li>
                  <b>Phone:</b> {phone}
                </li>
                <li>
                  <b>Postcode:</b> {postcode}
                </li>
              </ul>
            </Text>
          </Section>
          <Section style={paragraphContent}>
            <Text style={paragraph}>
              We’re also extending the deadline to give you more time to adjust to these changes. Now, apps that target
              API level 29 or below will start experiencing reduced distribution starting <b>Jan 31, 2023</b> instead of
              Nov 1, 2022. If you need more time to update your app, you can request an extension to keep your app
              discoverable to all users until May 1, 2023.
            </Text>
            <Hr style={hr} />
          </Section>
          <Section style={paragraphContent}>
            <Text style={paragraph}>Thank you,</Text>
            <Text style={{ ...paragraph, fontSize: "20px" }}>The Sewings Developments Team.</Text>
          </Section>
          <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
            >
              © 2024 Sewing and Sons Developments
            </Text>
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
            >
              You have received this email because you used the Quote tool on the SewingDevelopments.com website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default Email

const main = {
  backgroundColor: "#cecece",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const sectionLogo = {
  padding: "0 40px",
}

const headerBlue = {
  marginTop: "-1px",
}

const container = {
  margin: "30px auto",
  backgroundColor: "#ffffff",
  borderRadius: 5,
  overflow: "hidden",
  maxWidth: "480px",
}

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
}

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
}

const paragraphContent = {
  padding: "0 40px",
}

const paragraphList = {
  paddingLeft: 40,
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
}

const link = {
  ...paragraph,
  color: "#004dcf",
}

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
}

const footer = {
  maxWidth: "100%",
}
