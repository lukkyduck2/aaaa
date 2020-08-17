var op = {
  x: 20,
  y: 0,
  xspeed: 4,
  yspeed: -3
}
var oo = {
  x: 490,
  y: 120,
  xspeed: 6,
  yspeed: -5
}
var po = {
  x: 200,
  y: 150,
  xspeed: 8,
  yspeed: -7
}
var pp = {
  x: 400,
  y: 209,
  xspeed: -8,
  yspeed:  9
}
var dick = {
  x: 200,
  y: 300,
  xspeed: -4,
  yspeed:  5
}
var annoying = {
  x: 300,
  y: 200,
  xspeed: 2,
  yspeed: -1
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225, 255, 255);
  covid()
  waltz()
  danchz()
  virus()
  fly()
  bounce()
  ball()
  walk()
  bounz()
  balle()
  move()
  shut()
  boi()
  speed()
  kdunk()
  hat()
  dash()
  bonk()
    stroke(0)
  strokeWeight(5)
  noFill()
  noCursor()
  circle(mouseX, mouseY, 30)
  line(mouseX, mouseY, mouseX + 20, mouseY)
  line(mouseX, mouseY, mouseX - 20, mouseY)
  line(mouseX, mouseY, mouseX, mouseY + 20)
  line(mouseX, mouseY, mouseX, mouseY - 20)
  
  
   fill(255, 97, 17)
  stroke(255, 141, 84)
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      circle(mouseX, mouseY, 50);
    }
  }
}

function hat() {
  stroke(0)
  line(annoying.x, annoying.y, annoying.x + 40, annoying.y + 40)
  line(annoying.x, annoying.y, annoying.x + 40, annoying.y - 40)
  line(annoying.x, annoying.y, annoying.x - 40, annoying.y + 40)
  line(annoying.x, annoying.y, annoying.x - 40, annoying.y - 40)
  line(annoying.x, annoying.y, annoying.x, annoying.y + 50)
  line(annoying.x, annoying.y, annoying.x, annoying.y - 50)
  line(annoying.x, annoying.y, annoying.x + 50, annoying.y)
  line(annoying.x, annoying.y, annoying.x - 50, annoying.y)
  stroke(200, 0, 0)
  strokeWeight(4)
  fill(225, 0, 0)
  ellipse(annoying.x, annoying.y, 60, 60)
}

function dash() {
  annoying.x = annoying.x + annoying.xspeed;
  annoying.y = annoying.y + annoying.yspeed;
}

function bonk() {
  if (annoying.x > width || annoying.x < 0) {
    annoying.xspeed = annoying.xspeed * -1
  }
  if (annoying.y > height || annoying.y < 0) {
    annoying.yspeed = annoying.yspeed * -1
  }
}



function boi() {
  stroke(0)
  line(dick.x, dick.y, dick.x + 40, dick.y + 40)
  line(dick.x, dick.y, dick.x + 40, dick.y - 40)
  line(dick.x, dick.y, dick.x - 40, dick.y + 40)
  line(dick.x, dick.y, dick.x - 40, dick.y - 40)
  line(dick.x, dick.y, dick.x, dick.y + 50)
  line(dick.x, dick.y, dick.x, dick.y - 50)
  line(dick.x, dick.y, dick.x + 50, dick.y)
  line(dick.x, dick.y, dick.x - 50, dick.y)
  stroke(0, 0, 200)
  strokeWeight(4)
  fill(0, 0, 225)
  ellipse(dick.x, dick.y, 60, 60)
}

function speed() {
  dick.x = dick.x + dick.xspeed;
  dick.y = dick.y + dick.yspeed;
}

function kdunk() {
  if (dick.x > width || dick.x < 0) {
    dick.xspeed = dick.xspeed * -1
  }
  if (dick.y > height || dick.y < 0) {
    dick.yspeed = dick.yspeed * -1
  }
}



function balle() {
  stroke(0)
  line(pp.x, pp.y, pp.x + 40, pp.y + 40)
  line(pp.x, pp.y, pp.x + 40, pp.y - 40)
  line(pp.x, pp.y, pp.x - 40, pp.y + 40)
  line(pp.x, pp.y, pp.x - 40, pp.y - 40)
  line(pp.x, pp.y, pp.x, pp.y + 50)
  line(pp.x, pp.y, pp.x, pp.y - 50)
  line(pp.x, pp.y, pp.x + 50, pp.y)
  line(pp.x, pp.y, pp.x - 50, pp.y)
  stroke(0, 200, 0)
  strokeWeight(4)
  fill(0, 225, 0)
  ellipse(pp.x, pp.y, 60, 60)
}

function move() {
  pp.x = pp.x + pp.xspeed;
  pp.y = pp.y + pp.yspeed;
}

function shut() {
  if (pp.x > width || pp.x < 0) {
    pp.xspeed = pp.xspeed * -1
  }
  if (pp.y > height || pp.y < 0) {
    pp.yspeed = pp.yspeed * -1
  }
}



function ball() {
  stroke(0)
  line(po.x, po.y, po.x + 40, po.y + 40)
  line(po.x, po.y, po.x + 40, po.y - 40)
  line(po.x, po.y, po.x - 40, po.y + 40)
  line(po.x, po.y, po.x - 40, po.y - 40)
  line(po.x, po.y, po.x, po.y + 50)
  line(po.x, po.y, po.x, po.y - 50)
  line(po.x, po.y, po.x + 50, po.y)
  line(po.x, po.y, po.x - 50, po.y)
  stroke(200, 200, 0)
  strokeWeight(4)
  fill(255, 225, 0)
  ellipse(po.x, po.y, 60, 60)
}

function walk() {
  po.x = po.x + po.xspeed;
  po.y = po.y + po.yspeed;
}

function bounz() {
  if (po.x > width || po.x < 0) {
    po.xspeed = po.xspeed * -1
  }
  if (po.y > height || po.y < 0) {
    po.yspeed = po.yspeed * -1
  }
}

function virus() {
  stroke(0)
  line(oo.x, oo.y, oo.x + 40, oo.y + 40)
  line(oo.x, oo.y, oo.x + 40, oo.y - 40)
  line(oo.x, oo.y, oo.x - 40, oo.y + 40)
  line(oo.x, oo.y, oo.x - 40, oo.y - 40)
  line(oo.x, oo.y, oo.x, oo.y + 50)
  line(oo.x, oo.y, oo.x, oo.y - 50)
  line(oo.x, oo.y, oo.x + 50, oo.y)
  line(oo.x, oo.y, oo.x - 50, oo.y)
  stroke(200, 0, 200)
  strokeWeight(4)
  fill(255, 0, 255)
  ellipse(oo.x, oo.y, 60, 60)
}

function fly() {
  oo.x = oo.x + oo.xspeed;
  oo.y = oo.y + oo.yspeed;
}

function bounce() {
  if (oo.x > width || oo.x < 0) {
    oo.xspeed = oo.xspeed * -1
  }
  if (oo.y > height || oo.y < 0) {
    oo.yspeed = oo.yspeed * -1
  }
}



function covid() {
  stroke(0)
  line(op.x, op.y, op.x + 40, op.y + 40)
  line(op.x, op.y, op.x + 40, op.y - 40)
  line(op.x, op.y, op.x - 40, op.y + 40)
  line(op.x, op.y, op.x - 40, op.y - 40)
  line(op.x, op.y, op.x, op.y + 50)
  line(op.x, op.y, op.x, op.y - 50)
  line(op.x, op.y, op.x + 50, op.y)
  line(op.x, op.y, op.x - 50, op.y)
  stroke(200, 100, 0)
  strokeWeight(4)
  fill(255, 165, 0)
  ellipse(op.x, op.y, 60, 60)
}

function waltz() {
  op.x = op.x + op.xspeed;
  op.y = op.y + op.yspeed;
}

function danchz() {
  if (op.x > width || op.x < 0) {
    op.xspeed = op.xspeed * -1
  }
  if (op.y > height || op.y < 0) {
    op.yspeed = op.yspeed * -1
  }
}

