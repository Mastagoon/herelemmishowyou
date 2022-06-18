// globals
var socket
var x = 0,
  y = 0
var BACKGROUND_COLOR = 0
var SESSION_DATA_BG = "rgba(200,200,200,1)"
var clearBtn
var sessionData
var brushSize = 20

function setup() {
  createCanvas(displayWidth, displayHeight)
  // session data
  fill(255)
  rect(x, y, 100, 100)
  clearBtn = createButton("clear")
  clearBtn.mouseClicked(clearScreen)
  clearBtn.size(100, 50)
  clearBtn.style("font-size", "24px")
  clearBtn.position(90, 35)
  // tool box
  background(BACKGROUND_COLOR)
  socket = io.connect("http://localhost:8000")
  socket.on("draw", drawFromPeer)
}

function draw() {
  fill(SESSION_DATA_BG)
  noStroke()
  sessionData = rect(x + 10, y + 10, 250, 100, 10)
  stroke(255)
  strokeWeight(brushSize)
  if (mouseIsPressed === true) {
    socket.emit("draw", { mouseX, mouseY, pmouseX, pmouseY, brushSize })
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function clearScreen() {
  background(BACKGROUND_COLOR)
  sessionData = rect(x + 10, y + 10, 250, 100, 10)
}

function mouseDragged() {
  // ellipse(mouseX, mouseY, brushSize, brushSize)
}

// this function fires with mousewheel movement anywhere on screen
function mouseWheel(e) {
  brushSize += e.delta > 0 ? -5 : 5
  if (brushSize <= 0) brushSize = 1
}

function drawFromPeer(data) {
  strokeWeight(data.brushSize)
  line(data.mouseX, data.mouseY, data.pmouseX, data.pmouseY)
}
