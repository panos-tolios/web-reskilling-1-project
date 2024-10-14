import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MenuIcon } from "./footer/SocialIcons"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleRandomPost() {
    setIsOpen(false)
    navigate("/post/" + Math.floor(Math.random() * 101))
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-primary-1 text-sm font-medium text-gray-700 hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="flex flex-col justify-center"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/"
              className="w-full text-primary-1 hover:bg-primary-2 hover:text-white p-4 mr-4 rounded-md"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              end
            >
              Home
            </Link>
            <Link
              to="/about"
              className={
                "w-full text-primary-1 hover:bg-primary-2 hover:text-white p-4 rounded-md"
              }
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button
              className="bg-secondary-1 text-primary-1 hover:text-primary-2 text-xs rounded-lg p-3 m-3"
              onClick={handleRandomPost}
            >
              Random Post
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
