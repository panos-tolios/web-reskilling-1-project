import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Post({ id, title, subtitle, body, photo, className, isMain }) {
  Post.propTypes = {
    id: PropTypes.number,
    body: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    photo: PropTypes.object,
    className: PropTypes.string,
    isMain: PropTypes.bool,
  }

  const contents = body?.split("\n")

  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <h1 className="text-6xl text-primary-1 mt-20 font-bold">{title}</h1>
        <h2 className="text-2xl text-primary-2 mt-6">{subtitle}</h2>
        <img
          className={`rounded-lg mt-20 mx-auto h-[${
            isMain ? 40 : 27
          }em] w-full object-cover`}
          src={photo?.url}
          alt={photo?.title}
        />
      </Link>
      <article className="container mx-auto mt-20">
        {contents?.map((content) => (
          <p key={content} className="post-body">
            {content}
          </p>
        ))}
      </article>
    </div>
  )
}

export default Post
