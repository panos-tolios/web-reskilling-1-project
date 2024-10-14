import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPost } from "../services/apiService"
import ErrorPage from "./Error"

function PostPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [post, setPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getPost(id)
      .then(({ data }) => {
        setPost(data)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  const contents = post.body?.split("\n")

  if (error) {
    return (
      <ErrorPage
        title="An error occurred"
        errorMessage={error.response.data.error.message}
      />
    )
  }

  return (
    <div className="mt-36">
      {loading && (
        <div className="h-48 flex flex-col items-center justify-center">
          <div className="text-3xl text-primary-1">Loading...</div>
        </div>
      )}
      {/* Post contents */}
      {!loading && (
        <div className="flex mx-20 gap-36">
          <div className="w-1/2">
            <h1 className="text-5xl text-primary-1 mb-6">{post.title}</h1>

            <h2 className="text-2xl text-primary-2 mb-6">{post.subtitle}</h2>

            {contents?.map((content) => (
              <p key={content} className="mb-6">
                {content}
              </p>
            ))}
          </div>
          {/* Post image */}
          <div className="w-1/2">
            <img className="rounded-xl" src={post.photo?.url} alt={post.photo?.title} />
          </div>
        </div>
      )}
    </div>
  )
}

export default PostPage
