const express = require("express")
const socket = require("socket.io")

const app = express()

app.use(express.static("public"))

const server = app.listen(8000, () => console.log("listening on port 8000"))

const io = socket(server)

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id)
})
