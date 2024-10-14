import { NavLink, useNavigate } from "react-router-dom"
import Dropdown from "./Dropdown"
import { Logo } from "./footer/SocialIcons"
import classes from "./Header.module.css"

function Header() {
  const navigate = useNavigate()
  function gotoRandomPost() {
    navigate("/post/" + Math.floor(Math.random() * 101))
  }
  return (
    <header className="w-full h-40 py-4 bg-primary-1">
      <div className="flex flex-row mx-20 h-full justify-between content-center">
        <NavLink
          to="/"
          className="flex flex-row content-center items-center justify-between gap-4"
        >
          <Logo className="h-7 w-7 icon-white" />
          <div className="content-center text-xl text-white">My Awesome Blog</div>
        </NavLink>

        <nav className="content-center">
          <ul className="hidden lg:flex flex-row items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-secondary-1 p-1 mr-4 rounded-md ${
                    isActive ? classes.active : undefined
                  }`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white hover:text-secondary-1 p-1 mr-12 rounded-md ${
                    isActive ? classes.active : undefined
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <button
                className="bg-secondary-1 text-primary-1 hover:text-primary-2 text-xs rounded-lg p-3"
                onClick={gotoRandomPost}
              >
                Random Post
              </button>
            </li>
          </ul>
          <div className="lg:hidden icon-white">
            <Dropdown />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
