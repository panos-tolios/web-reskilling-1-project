import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../services/apiService"
import Post from "../components/Post"
import RelatedPost from "../components/RelatedPost"
import ErrorPage from "./Error"

function HomePage() {
  const [loading, setLoading] = useState(false)
  const [mainPost, setMainPost] = useState({})
  const [firstSecondaryPost, setFirstSecondaryPost] = useState({})
  const [secondSecondaryPost, setSecondSecondaryPost] = useState({})
  const [relatedPosts, setRelatedPosts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    getPosts()
      .then(({ data }) => {
        setMainPost(data?.pop(Math.floor(Math.random() * data.length)))
        setFirstSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setSecondSecondaryPost(data?.pop(Math.floor(Math.random() * data.length)))
        setRelatedPosts(data)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
        return err.status === 404 ? (
          <ErrorPage title="Oops!" errorMessage="Post not found" />
        ) : (
          <ErrorPage title={"Something went wrong"} errorMessage={err} />
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (error) {
    // error handling
    return error.status === 404 ? (
      <ErrorPage title="Oops!" errorMessage="Post not found" />
    ) : (
      <ErrorPage title={"Something went wrong"} errorMessage={error.message} />
    )
  }

  return (
    <main className="container mx-auto">
      {loading && (
        <div className="h-48 flex flex-col items-center justify-center mt-20">
          <h1 className="text-3xl text-primary-1">Loading...</h1>
        </div>
      )}
      {!loading && (
        <>
          {/* Primary Post */}
          <Post {...mainPost} isMain />

          {/* Secondary Posts */}
          <div className="flex md:flex-row flex-col gap-8">
            <Post className="md:w-1/2 w-full" {...firstSecondaryPost} />
            <Post className="md:w-1/2 w-full" {...secondSecondaryPost} />
          </div>

          {/* Related Articles*/}
          <div className="mt-32">
            <div>
              <h2 className="text-4xl font-semibold">Related articles or posts</h2>
            </div>
            <div className="flex flex-row flex-wrap mx-auto w-full gap-8 justify-between">
              {relatedPosts.map((post) => (
                <Link
                  className="mt-8 mb-24 lg:w-1/4 md:w-1/3 w-1/2 grow"
                  to={`/post/${post.id}`}
                  key={post.id}
                >
                  <RelatedPost key={post.id} post={post} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default HomePage
