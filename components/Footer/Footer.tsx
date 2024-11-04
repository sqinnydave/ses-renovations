import { Button, Dialog, Flex, Text } from "@radix-ui/themes"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="items-center border-t border-blue-400 text-center text-white md:text-left">
      <div className="border-white-700 border-t bg-blue-900">
        <div className="mx-auto grid max-w-screen-xl grid-cols-12 gap-4 p-4 md:items-center md:p-6">
          <div className="col-span-12 md:col-span-6 md:mr-auto">
            <p>
              <Image src="/images/accreditations_chas.png" alt="CHAS" height={25} width={90} className="mr-2 inline" />
              <Image
                src="/images/accreditations_constructionline.png"
                alt="Construction Line"
                height={25}
                width={90}
                className="inline"
              />
            </p>
            <p className="mt-2 text-sm">All Content © SES Renovations LTD {new Date().getFullYear()}</p>
          </div>
          <div className="col-span-12 flex justify-center md:col-span-6 md:ml-auto md:justify-start">
            <div className="mr-2">
              <Button color="blue" size="2">
                <a href="/files/SES+Health++Safety+Policy+manual+2021doc.pdf" className="flex" target="_blank">
                  Health & Safety Policy
                </a>
              </Button>
            </div>
            <div>
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button className="cursor-pointer">Privacy Policy</Button>
                </Dialog.Trigger>
                <Dialog.Content maxWidth="1200px" size="2">
                  <Dialog.Title>Privacy Policy</Dialog.Title>
                  <Dialog.Description></Dialog.Description>
                  <Flex direction="column" gap="3">
                    <Text as="p">
                      <strong>1. Introduction</strong>
                      <br />
                      <br />
                      1.1 We are committed to safeguarding the privacy of our website visitors and customers; in this
                      policy we explain how we will handle your personal data.
                      <br />
                      1.2 By using our website and agreeing to this policy, you consent to our use of cookies in
                      accordance with the terms of this policy.
                      <br />
                      1.3 Our website incorporates privacy controls which affect how we will process your personal data.
                      By using the privacy controls, you can specify whether you would like to receive direct marketing
                      communications and limit the publication of your information. <br />
                      <br />
                      <strong>2. How we use your “personal data”</strong>
                      <br />
                      <br />
                      2.1 In this Section 2 we have set out:
                      <br />
                      (a) the general categories of personal data that we may process;
                      <br />
                      (b) in the case of personal data that we did not obtain directly from you, the source and specific
                      categories of that data;
                      <br />
                      (c) the purposes for which we may process personal data; and
                      <br />
                      (d) the legal bases of the processing.
                      <br />
                      <br />
                      2.2 We may process data about your use of our website and services (&quot;usage data&quot;). The
                      usage data may include your IP address, geographical location, browser type and version, operating
                      system, referral source, length of visit, page views and website navigation paths, as well as
                      information about the timing, frequency and pattern of your service use. The source of the usage
                      data is our analytics tracking system. This usage data may be processed for the purposes of
                      analysing the use of the website and services. The legal basis for this processing is our
                      legitimate interests, namely monitoring and improving our website and services.
                      <br />
                      2.3 We may process your account data (&quot;account data&quot;). The account data may include your
                      name, email address, telephone number, fax number, newsletter subscription preference and postal
                      address. The account data may be processed for the purposes of operating our website, providing
                      our services, ensuring the security of our website and services, maintaining back-ups of our
                      databases and communicating with you. The legal basis for this processing is our legitimate
                      interests, namely the proper administration of our website and business and/or the performance of
                      a contract between you and us and/or taking steps, at your request, to enter into such a contract.
                      <br />
                      2.4 We may process information that you post for publication on our website or through our
                      services (&quot;publication data&quot;). The publication data may be processed for the purposes of
                      enabling such publication and administering our website and services. The legal basis for this
                      processing is our legitimate interests, namely the proper administration of our website and
                      business and/or the performance of a contract between you and us and/or taking steps, at your
                      request, to enter into such a contract.
                      <br />
                      2.5 We may process information contained in any enquiry you submit to us regarding goods and/or
                      services (&quot;enquiry data&quot;). The enquiry data may be processed for the purposes of
                      offering, marketing and selling relevant goods and/or services to you.
                      <br />
                      2.6 We may process information contained in or relating to any communication that you send to us
                      (&quot;correspondence data&quot;). The correspondence data may include the communication content
                      and metadata associated with the communication. Our website will generate the metadata associated
                      with communications made using the website contact forms. The correspondence data may be processed
                      for the purposes of communicating with you and record-keeping. The legal basis for this processing
                      is our legitimate interests, namely the proper administration of our website and business and
                      communications with users.
                      <br />
                      2.7 We may process any of your personal data identified in this policy where necessary for the
                      establishment, exercise or defence of legal claims, whether in court proceedings or in an
                      administrative or out-of-court procedure. The legal basis for this processing is our legitimate
                      interests, namely the protection and assertion of our legal rights, your legal rights and the
                      legal rights of others.
                      <br />
                      2.8 We may process any of your personal data identified in this policy where necessary for the
                      purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining professional
                      advice. The legal basis for this processing is our legitimate interests, namely the proper
                      protection of our business against risks.
                      <br />
                      2.9 In addition to the specific purposes for which we may process your personal data set out in
                      this Section 2, we may also process any of your personal data where such processing is necessary
                      for compliance with a legal obligation to which we are subject, or in order to protect your vital
                      interests or the vital interests of another natural person.
                      <br />
                      <br />
                      <strong>3. Providing your personal data to others</strong>
                      <br />
                      <br />
                      3.1 We may disclose your personal data to our insurers and/or professional advisers insofar as
                      reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing
                      risks, obtaining professional advice, or the establishment, exercise or defence of legal claims,
                      whether in court proceedings or in an administrative or out-of-court procedure.
                      <br />
                      3.2 In addition to the specific disclosures of personal data set out in this Section 3, we may
                      disclose your personal data where such disclosure is necessary for compliance with a legal
                      obligation to which we are subject, or in order to protect your vital interests or the vital
                      interests of another natural person. We may also disclose your personal data where such disclosure
                      is necessary for the establishment, exercise or defence of legal claims, whether in court
                      proceedings or in an administrative or out-of-court procedure.
                      <br />
                      <br />
                      <strong>4. International transfers of your personal data</strong>
                      <br />
                      <br />
                      4.1 In this Section 4, we provide information about the circumstances in which your personal data
                      may be transferred to countries outside the European Economic Area (EEA).
                      <br />
                      4.2 We have offices and facilities in the United Kingdom. The European Commission has made an
                      &quot;adequacy decision&quot; with respect to the data protection laws of each of these countries.{" "}
                      <br />
                      Transfers to each of these countries will be protected by appropriate safeguards, namely the use
                      of standard data protection clauses adopted or approved by the European Commission, a copy of
                      which can be obtained from the Information Commissioner&apos;s Office.
                      <br />
                      4.3 The hosting facilities for our website are situated in the United States. The European
                      Commission has made an &quot;adequacy decision&quot; with respect to the data protection laws of
                      each of these countries. Transfers to each of these countries will be protected by appropriate
                      safeguards, namely the use of standard data protection clauses adopted or approved by the European
                      Commission, a copy of which you can obtain from the Information Commissioner&apos;s Office.
                      <br />
                      4.4 You acknowledge that personal data that you submit for publication through our website or
                      services may be available, via the internet, around the world. We cannot prevent the use (or
                      misuse) of such personal data by others.
                      <br />
                      <br />
                      <strong>5. Retaining and deleting personal data</strong>
                      <br />
                      <br />
                      5.1 This Section 5 sets out our data retention policies and procedure, which are designed to help
                      ensure that we comply with our legal obligations in relation to the retention and deletion of
                      personal data.
                      <br />
                      5.2 Personal data that we process for any purpose or purposes shall not be kept for longer than is
                      necessary for that purpose or those purposes.
                      <br />
                      5.3 We will retain your personal data for a minimum period of 30 days following its provision.
                      <br />
                      5.4 In some cases it is not possible for us to specify in advance the periods for which your
                      personal data will be retained. In such cases, we will determine the period of retention based on
                      its necessity for the proper administration of our website and business and/or the performance of
                      a contract between you and us and/or taking steps, at your request, to enter into such a contract.
                      <br />
                      5.5 Notwithstanding the other provisions of this Section 5, we may retain your personal data where
                      such retention is necessary for compliance with a legal obligation to which we are subject, or in
                      order to protect your vital interests or the vital interests of another natural person.
                      <br />
                      <br />
                      <strong>6. Amendments</strong>
                      <br />
                      <br />
                      6.1 We may update this policy from time to time by publishing a new version on our website.
                      <br />
                      6.2 You should check this page occasionally to ensure you are happy with any changes to this
                      policy.
                      <br />
                      6.3 We may notify you of changes to this policy by email or other means of communication.
                      <br />
                      <br />
                      <strong>7. Your rights</strong>
                      <br />
                      <br />
                      7.1 In this Section 7, we have summarised the rights that you have under data protection law. Some
                      of the rights are complex, and not all of the details have been included in our summaries.
                      Accordingly, you should read the relevant laws and guidance from the regulatory authorities for a
                      full explanation of these rights.
                      <br />
                      7.2 Your principal rights under data protection law are:
                      <br />
                      (a) the right to access;
                      <br />
                      (b) the right to rectification;
                      <br />
                      (c) the right to erasure;
                      <br />
                      (d) the right to restrict processing;
                      <br />
                      (e) the right to object to processing;
                      <br />
                      (f) the right to data portability;
                      <br />
                      (g) the right to complain to a supervisory authority; and
                      <br />
                      (h) the right to withdraw consent.
                      <br />
                      7.3 You have the right to confirmation as to whether or not we process your personal data and,
                      where we do, access to the personal data, together with certain additional information. That
                      additional information includes details of the purposes of the processing, the categories of
                      personal data concerned and the recipients of the personal data. Providing the rights and freedoms
                      of others are not affected, we will supply to you a copy of your personal data. The first copy
                      will be provided free of charge, but additional copies may be subject to a reasonable fee. You can
                      request a copy of the personal data we hold by contacting us. Please note that we may in return
                      request copies of valid identification.
                      <br />
                      7.4 You have the right to have any inaccurate personal data about you rectified and, taking into
                      account the purposes of the processing, to have any incomplete personal data about you completed.
                      <br />
                      7.5 In some circumstances you have the right to the erasure of your personal data without undue
                      delay. Those circumstances include: the personal data are no longer necessary in relation to the
                      purposes for which they were collected or otherwise processed; you withdraw consent to
                      consent-based processing; you object to the processing under certain rules of applicable data
                      protection law; the processing is for direct marketing purposes; and the personal data have been
                      unlawfully processed. However, there are exclusions of the right to erasure. The general
                      exclusions include where processing is necessary: for exercising the right of freedom of
                      expression and information; for compliance with a legal obligation; or for the establishment,
                      exercise or defence of legal claims.
                      <br />
                      7.6 In some circumstances you have the right to restrict the processing of your personal data.
                      Those circumstances are: you contest the accuracy of the personal data; processing is unlawful but
                      you oppose erasure; we no longer need the personal data for the purposes of our processing, but
                      you require personal data for the establishment, exercise or defence of legal claims; and you have
                      objected to processing, pending the verification of that objection. Where processing has been
                      restricted on this basis, we may continue to store your personal data. However, we will only
                      otherwise process it: with your consent; for the establishment, exercise or defence of legal
                      claims; for the protection of the rights of another natural or legal person; or for reasons of
                      important public interest.
                      <br />
                      7.7 You have the right to object to our processing of your personal data on grounds relating to
                      your particular situation, but only to the extent that the legal basis for the processing is that
                      the processing is necessary for: the performance of a task carried out in the public interest or
                      in the exercise of any official authority vested in us; or the purposes of the legitimate
                      interests pursued by us or by a third party. If you make such an objection, we will cease to
                      process the personal information unless we can demonstrate compelling legitimate grounds for the
                      processing which override your interests, rights and freedoms, or the processing is for the
                      establishment, exercise or defence of legal claims.
                      <br />
                      7.8 You have the right to object to our processing of your personal data for direct marketing
                      purposes (including profiling for direct marketing purposes). If you make such an objection, we
                      will cease to process your personal data for this purpose.
                      <br />
                      7.9 To the extent that the legal basis for our processing of your personal data is:
                      <br />
                      (a) consent; or
                      <br />
                      (b) that the processing is necessary for the performance of a contract to which you are party or
                      in order to take steps at your request prior to entering into a contract, and such processing is
                      carried out by automated means, you have the right to receive your personal data from us in a
                      structured, commonly used and machine-readable format. However, this right does not apply where it
                      would adversely affect the rights and freedoms of others.
                      <br />
                      7.10 If you consider that our processing of your personal information infringes data protection
                      laws, you have a legal right to lodge a complaint with a supervisory authority responsible for
                      data protection. You may do so in the EU member state of your habitual residence, your place of
                      work or the place of the alleged infringement.
                      <br />
                      7.11 To the extent that the legal basis for our processing of your personal information is
                      consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the
                      lawfulness of processing before the withdrawal.
                      <br />
                      7.12 You may exercise any of your rights in relation to your personal data by written notice to
                      us, in addition to the other methods specified in this Section 7.
                      <br />
                      <br />
                      <strong>8. Third party websites</strong>
                      <br />
                      <br />
                      8.1 Our website can include hyperlinks to, and details of, third party websites.
                      <br />
                      8.2 We have no control over, and are not responsible for, the privacy policies and practices of
                      third parties.
                      <br />
                      <br />
                      <strong>9. Personal data of children</strong>
                      <br />
                      <br />
                      9.1 Our website and services are targeted at persons over the age of 16.
                      <br />
                      9.2 If we have reason to believe that we hold personal data of a person under that age in our
                      databases, we will delete that personal data.
                      <br />
                      <br />
                      <strong>10. Updating information</strong>
                      <br />
                      <br />
                      10.1 Please let us know if the personal information that we hold about you needs to be corrected
                      or updated.
                      <br />
                      <br />
                      <strong>11. About cookies</strong>
                      <br />
                      <br />
                      11.1 A cookie is a file containing an identifier (a string of letters and numbers) that is sent by
                      a web server to a web browser and is stored by the browser. The identifier is then sent back to
                      the server each time the browser requests a page from the server.
                      <br />
                      11.2 Cookies may be either &quot;persistent&quot; cookies or &quot;session&quot; cookies: a
                      persistent cookie will be stored by a web browser and will remain valid until its set expiry date,
                      unless deleted by the user before the expiry date; a session cookie, on the other hand, will
                      expire at the end of the user session, when the web browser is closed.
                      <br />
                      11.3 Cookies do not typically contain any information that personally identifies a user, but
                      personal information that we store about you may be linked to the information stored in and
                      obtained from cookies.
                      <br />
                      <br />
                      <strong>12. Cookies that we use</strong>
                      <br />
                      <br />
                      12.1 We use cookies for the following purposes:
                      <br />
                      (a) personalisation - we use cookies to store information about your preferences and to
                      personalise our website for you.
                      <br />
                      (b) security - we use cookies as an element of the security measures to protect our website and
                      services generally.
                      <br />
                      (c) analysis - we use cookies to help us to analyse the use and performance of our website and
                      services.
                      <br />
                      (d) cookie consent - we use cookies to store your preferences in relation to the use of cookies
                      more generally.
                      <br />
                      <br />
                      <strong>13. Cookies used by our service providers</strong>
                      <br />
                      <br />
                      13.1 Our service providers use cookies and those cookies may be stored on your computer when you
                      visit our website.
                      <br />
                      13.2 We use Google Analytics to analyse the use of our website. Google Analytics gathers
                      information about website use by means of cookies. The information gathered relating to our
                      website is used to create reports about the use of our website. Google&apos;s privacy policy is
                      available at: https://www.google.com/policies/privacy/.
                      <br />
                      <br />
                      <strong>14. Managing cookies</strong>
                      <br />
                      <br />
                      14.1 Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for
                      doing so vary from browser to browser, and from version to version. You can however obtain
                      up-to-date information about blocking and deleting cookies via these links:
                      <br />
                      (a) https://support.google.com/chrome/answer/95647?hl=en (Chrome);
                      <br />
                      (b) https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences (Firefox);
                      <br />
                      (c) http://www.opera.com/help/tutorials/security/cookies/ (Opera);
                      <br />
                      (d) https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                      (Internet Explorer);
                      <br />
                      (e) https://support.apple.com/kb/PH21411 (Safari); and
                      <br />
                      (f) https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy (Edge).
                      <br />
                      14.2 Blocking all cookies will have a negative impact upon the usability of many websites.
                      <br />
                      14.3 If you block cookies, you will not be able to use all the features on our website.
                      <br />
                      <br />
                      <strong>15. Cookie preferences</strong>
                      <br />
                      15.1 You can manage your preferences relating to the use of cookies on our website by following
                      the steps in section 14 most relevant to your web browser software.
                      <br />
                      15.2 Please note that if you block cookies, you may not be able to use all of the features on our
                      website. This may also “break” certain elements of our website and prevent them from functioning
                      correctly for you only.
                      <br />
                      <br />
                      <strong>16. Our details</strong>
                      <br />
                      <br />
                      16.1 This website is owned and operated by SES Renovations Ltd
                      <br />
                      16.2 Our principal place of business is at SES Renovations Ltd, The Auld Orchard, KY12 9QB.
                      <br />
                      16.3 You can contact us:
                      <br />
                      (a) by post, to the postal address given above;
                      <br />
                      (b) using our website contact form;
                      <br />
                      (c) by telephone, on the contact number published on our website from time to time; or
                      <br />
                      (d) by email, using the email address published on our website from time to time.
                      <br />
                      <br />
                      <strong>17. Representative within the European Union</strong>
                      <br />
                      <br />
                      17.1 You can contact our Representative within the European Union with respect to our obligations
                      under data protection law using any of the contact methods listed in section 16.3.
                      <br />
                      <br />
                      <strong>18. Data protection officer</strong>
                      <br />
                      <br />
                      18.1 You can contact our Data Protection Officer with respect to our obligations under data
                      protection law using any of the contact methods listed in section 16.3.
                    </Text>
                  </Flex>
                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Close
                      </Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
