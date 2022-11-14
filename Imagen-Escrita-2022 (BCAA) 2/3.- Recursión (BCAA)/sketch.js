function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  l= 2
  l2 = 4
  l3 = 5

 background("black");
 stroke("#E0E0E0");
 strokeWeight(3)
  cruz(width / 2, height / 2, 400, millis()/9999, l);
  
}

function cruz(x, y, tam, rot, niveles) {
  push();
  translate(x, y);
  rotate(rot);
  strokeWeight(tam/870);
  line(-tam / 2, 0, tam / 2, 0);
  stroke("#8B8B8B");
  line(0, -tam / 2, 0, tam / 2);
  stroke("#E0E0E0");
  if (niveles > 0) {
    cruz(-tam / 2, 0, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
    cruz(tam / 2, 0, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
    cruz(0, -tam / 2, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
    cruz(0, tam / 2, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
  }
  pop();
}

