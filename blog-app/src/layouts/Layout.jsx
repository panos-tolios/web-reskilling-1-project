import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/footer/Footer"

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
