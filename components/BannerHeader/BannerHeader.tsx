"use client"

type Props = {
  title: string
  content: string
}

export function BannerHeader({ title, content }: Props) {
  return (
    <section className="w-full bg-blue-500 bg-gradient-to-r from-gray-400 to-gray-600">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center">
        <div className="mx-auto place-self-center">
          <h1 className="w-xl mx-auto mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="max-w-4xl font-light text-white md:text-lg lg:text-lg">{content}</p>
        </div>
      </div>
    </section>
  )
}

export default BannerHeader
