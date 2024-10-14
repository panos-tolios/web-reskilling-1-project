import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
})

function getPosts() {
  const startParam = Math.floor(Math.random() * 88)
  const endParam = startParam + 12
  return api.get("posts", {
    params: {
      _start: startParam,
      _end: endParam,
    },
  })
}

function getPost(id) {
  return api.get(`posts/${id}`)
}

export { getPosts, getPost }
