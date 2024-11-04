export function Video() {
  return (
    <div className="bg-gray-100">
      <div className="video-container mx-auto max-w-screen-2xl">
        <video autoPlay muted loop>
          <source src="/video/temp.mp4" type="video/mp4" />
        </video>
        <div className="caption">
          <h1 className="w-xl mx-auto mb-8 text-2xl font-extrabold leading-none tracking-tight text-white md:text-4xl xl:text-5xl">
            Luxury living from a name you can trust
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Video
