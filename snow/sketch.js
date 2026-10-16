let snowflake = []
let stack = 0

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(7) 

  for(let i = 0; i < 30; i ++) {
    snowflake.push(new Snowflake())
  }
}

function draw() {
  background(220);

  for(let i = 0; i < 30; i ++) {
    snowflake[i].show()
    snowflake[i].fall()
  }

  rect(0, height - stack, width, stack)
}

class Snowflake {
  constructor() {
    this.x = random(width)
    this.y = -200
    this.size = random(10,30)


  }

  show() {
    circle(this.x, this.y, this.size)
  }

  fall() {
    this.x += random(-10, 10)

    if (this.y < height) {
      this.y += random(-5, 100)
    }
    else if (this.y > height - stack) {
      this.y = -100
      stack += 0.1
      print(int(stack))
    }
  }
}

function mousePressed() {
  if(stack > 10) {
    stack -= 10
  }
  textAlign(CENTER)
  text('눈을 치웠습니다.', width / 2, height / 2)
}

function doubleClicked() {
  stack = 0;
}