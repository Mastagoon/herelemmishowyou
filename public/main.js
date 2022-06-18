const socket = io.connect("http://localhost:8000")

const handleCreateRoom = () => {
  const id = Math.random().toString(36).substring(5)
  socket.emit("createRoom", id)
}
