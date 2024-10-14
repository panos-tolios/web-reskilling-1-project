import proptypes from "prop-types"

ErrorPage.propTypes = {
  title: proptypes.string,
  errorMessage: proptypes.string,
}

function ErrorPage({ title, errorMessage }) {
  return (
    <div className="container mx-auto h-48 mt-36 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-primary-1">{title}</h1>
      <h2 className="text-3xl text-primary-2 m-10">{errorMessage}</h2>
    </div>
  )
}
export default ErrorPage
