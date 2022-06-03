// globals
let x = 0,
  y = 0
let BACKGROUND_COLOR = 0
let SESSION_DATA_BG = "rgba(200,200,200,1)"

function setup() {
  createCanvas(displayWidth, displayHeight)
  // session data
  fill(255)
  noStroke()
  rect(x, y, 100, 100)
  // tool box
}

function draw() {
  background(BACKGROUND_COLOR)
  fill(SESSION_DATA_BG)
  rect(x + 10, y + 10, 250, 100, 10)
}
