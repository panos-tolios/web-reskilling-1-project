const express = require("express")
const cors = require("cors")
const postsRouter = require("./routes/posts")

const app = express()
app.use(cors())

app.use("/posts", postsRouter)

app.get("/", (req, res) => {
  res.json({
    message: "Web Reskilling 1 - Backend API",
  })
})

app.listen(9000)
