const express = require("express")
const axios = require("axios")
const router = express.Router()
let users = []
let photos = []

router.use(async (req, res, next) => {
  try {
    const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users")
    this.users = users
    // Get 50 photos
    const { data: photos } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=100"
    )
    this.photos = photos
    next()
  } catch (error) {
    res.json(error)
  }
})

router.route("/").get(async (req, res) => {
  try {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: req.query,
      }
    )
    const response = posts.map((post) => {
      const user = this.users.find((user) => user.id === post.userId)

      return {
        ...post,
        subtitle: post.body.split("\n")[0],
        author: user.name,
        photo: this.photos.find((photo) => photo.id === post.id),
      }
    })
    res.json(response)
  } catch (error) {
    console.log(error)
    if (error.status == 404) {
      res.status(404)
      res.json({ error: { message: "Post Not found", status: 404 } })
    } else res.json(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { data: post } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
    )
    const response = {
      ...post,
      subtitle: post.body.split("\n")[0],
      author: this.users.find((user) => user.id === post.userId).name,
      photo: this.photos.find((photo) => photo.id === post.id),
    }
    res.json(response)
  } catch (error) {
    if (error.status == 404) {
      res.status(404)
      res.json({ error: { message: "Post not found", status: 404 } })
    } else res.json(error)
  }
})

module.exports = router
