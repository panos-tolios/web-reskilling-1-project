import PropTypes from "prop-types"

function RelatedPost({ post, className }) {
  RelatedPost.propTypes = {
    post: PropTypes.object,
    className: PropTypes.string,
  }

  return (
    <div className={className}>
      <img className="rounded-lg" src={post?.photo?.url} alt={post?.photo?.title} />
      <div className="mt-6">
        <h2 className="text-xl font-medium">{post?.title}</h2>
        <h3 className="mt-1 text-xl opacity-45 font-medium">{post?.author}</h3>
      </div>
    </div>
  )
}
export default RelatedPost
