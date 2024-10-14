import Map from "../components/Map"

function AboutPage() {
  return (
    <main className="container mx-auto">
      <div className="h-[400px] flex flex-col justify-center content-center">
        <h1 className="m-8 text-5xl w-full">My Awesome Blog!</h1>
        <Map />
      </div>
    </main>
  )
}

export default AboutPage
