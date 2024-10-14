import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./layouts/Layout"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import PostPage from "./pages/Post"
import ErrorPage from "./pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage title="Oops!" errorMessage="Page not found" />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
