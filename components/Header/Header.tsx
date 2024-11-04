import Image from "next/image"
import NavigationMenuSES from "components/Navigation/Navigation"
import logo from "public/images/SES-Renovations-Logo.png"
// import logoDevelopments from "public/images/logo.png"

export function Header() {
  return (
    <header className="header relative z-10 bg-white">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-12 gap-4 p-4 md:p-6">
        <div className="col-span-12 mx-auto sm:col-span-4 sm:ml-0 sm:mr-auto">
          <a href="/">
            <Image src={logo} alt="SES Renovations Logo" priority={true} height={75} />
          </a>
        </div>
        <div className="col-span-12 content-center justify-self-center sm:col-span-8 sm:justify-self-end md:ml-auto">
          <NavigationMenuSES />
        </div>
      </div>
    </header>
  )
}

export default Header
