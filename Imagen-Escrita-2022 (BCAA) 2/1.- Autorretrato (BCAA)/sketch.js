function setup() {
  createCanvas(500, 500);
}

function draw() {
  clear();
  
  noStroke();
  background(210, 100, 40);
  
  //Cara
  noStroke(0);
  fill ('#D1A788');
  ellipse(248,223,160,177);
 
  //Cuerpo
  noStroke(0);
  fill ('#029B8C');
  ellipse(250,470,305,290);
  
  //Ojos
  fill('rgb(245,225,202)');
  ellipse(285,220,30,17);
  ellipse(212,220,30,17);
  
  //Pupila
  fill('#955139');
  ellipse (286,220,13,16);
  ellipse (213,220,13,16);
  
  fill('black');
  line(261,420,290,425);
  
  //Iris
  fill('rgb(22,2,2)');
  ellipse (286,220,6,6);
  ellipse (213,220,6,6);
  
  //Brillo
  fill('rgb(252,252,252)');
  ellipse (289,217,2,2);
  ellipse (210,217,2,2);
  
  //Cejas
  fill('#6E4019');
  triangle(295, 194, 300, 199, 267, 194);
  triangle(200, 195, 225, 195, 190, 202);
  
  //Boca
  noStroke(0);
  fill("#FA8072");
  ellipse (250,275,30,15);
  
  //Cabello
  strokeWeight(2);
  fill('#8D4D36');
  stroke(139, 69, 19);
  ellipse(325, 310, 35, 290);
  stroke(139, 69, 19);
  ellipse(170, 310, 35, 290);
  
  fill('#A6644C');
  stroke(160, 82, 45);
  ellipse(320, 285, 30, 250);
  stroke (160, 82, 45);
  ellipse(175, 285, 30, 250);
   
  //Cabello desde Raíz
  ellipse(245, 145, 120,40);
  ellipse (310, 154, 30, 30);
  ellipse (185, 155, 30, 30);
}