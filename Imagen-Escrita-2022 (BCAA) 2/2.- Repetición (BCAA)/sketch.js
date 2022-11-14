function setup() {
  createCanvas(500,500);
}

function draw() {
  background("rgb(228,226,226)");
  noStroke();
  for(let x = 2; x <= 500; x+=10){
    line(x, 10, x, 390);
    
  for(let y = 10; y <= 400; y +=10){
     let d = dist(x, y, mouseX, mouseY)/65;
     push();
     translate(x, y,);
     rotate(d);
     fill(32, 178, 170);
     triangle(150, 206, 58, 20, 86, 78);
     rotate();
     fill(0, 0, 255);
     triangle(150, 200, 58, 20, 86, 75); 
     pop();       
}
}
}