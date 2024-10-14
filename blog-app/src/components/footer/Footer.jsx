import Topic from "./Topics"
import SocialSection from "./SocialSection"
function Footer() {
  const topics = [
    {
      name: "Topic 1",
      pages: ["Page 1", "Page 2", "Page 3"],
    },
    {
      name: "Topic 2",
      pages: ["Page 1", "Page 2", "Page 3"],
    },
    {
      name: "Topic 3",
      pages: ["Page 1", "Page 2", "Page 3"],
    },
  ]

  return (
    <footer className="flex flex-col mt-24 py-8 bg-primary-1 text-white">
      <div className="container mx-auto">
        <div className="w-full border-t-2 border-t-gray-500 opacity-30"></div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between mt-12">
            <h3 className="text-2xl font-normal">My Awesome Blog</h3>
            <SocialSection />
          </div>
          <div className="flex flex-row mt-12">
            {topics.map((topic) => (
              <Topic className="mx-4 ml-8 w-[11em]" key={topic.name} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
