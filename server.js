const express = require("express")
const cors = require("cors")
const socket = require("socket.io")

const rooms = []

const app = express()

app.use(cors())

app.use(express.static("public"))

const server = app.listen(8000, () => console.log("listening on port 8000"))

const io = socket(server)

io.on("connection", (s) => {
  console.log("made socket connection", s.id)
  // add user to the list of users
  s.on("createRoom", (id) => {
    // create a new room
    s.join(id)
  })
})

// create a room
app.use("/create", (req, res, next) => {
  const room = Math.floor(Math.random() * 1000000)
  req.room = room
  next()
})
