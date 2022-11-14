function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {

  strokeWeight(1);
  stroke(169, 169, 169);
  for (x = 0; x < width; x += size + 0) {
   for (y = 0; y < height; y += size + 0) {
      c = random(0, 2);
        if (c < 1) {
        line(x, y, x + size, y + size);
      } else if (c < 2) {
        line(x, y + size, x + size, y);
      }
        
  //RECTÁNGULOS

  //Rosa
  noStroke(0);
  fill(500, 30, 120);
  rect(0, 0, 100, 700);

  //Verde
  noStroke(0);
  fill(46, 139, 87);
  rect(100, 0, 30, 700);

  //Amarillo
  noStroke(0);
  fill(255, 197, 0);
  rect(130, 0, 30, 700);

  //Rojo
  noStroke(0);
  fill(178, 34, 34);
  rect(160, 0, 30, 700);

  //Azul
  noStroke(0);
  fill(0, 0, 190);
  rect(190, 0, 30, 700);

  //Anaranjado
  noStroke(0);
  fill(255, 140, 0);
  rect(220, 0, 30, 700);

  //Rosa
  noStroke(0);
  fill(500, 30, 120);
  rect(250, 0, 30, 700);

  //Amarillo
  noStroke(0);
  fill(255, 197, 0);
  rect(280, 0, 60, 700);

  //TRIÁNGULOS

  noFill(0);
  stroke(25, 25, 85);
  strokeWeight(3);
  //          abajo   centro  arriba
  //        x1, y2 , x2, y2 , x3, y3
  triangle(280, 150, 339, 75, 280, 0);

  triangle(280, 300, 339, 225, 280, 150);

  triangle(280, 450, 339, 375, 280, 300);

  triangle(280, 600, 339, 525, 280, 450);

  // CÍRCULOS - IZQUIERDA

  fill(25, 25, 85);
  noStroke(0);
  ellipse(305, 75, 40, 40);
  stroke(255, 197, 0);
  strokeWeight(3);
  //      X1, Y1, X2, Y2
  line(285, 75, 325, 75);
  line(319, 55, 285, 105);
  line(293, 57, 317, 94);

  ellipse(305, 225, 40, 40);
  line(285, 225, 325, 225);
  line(315, 208, 293, 245);
  line(293, 204, 318, 247);

  ellipse(305, 375, 40, 40);
  line(285, 375, 325, 375);
  line(318, 355, 286, 405);
  line(293, 357, 317, 393);

  ellipse(305, 525, 40, 40);
  line(285, 525, 325, 525);
  line(318, 507, 288, 551);
  line(293, 507, 317, 543);

  //CÍRCULOS DERECHA

  ellipse(315, 0, 40, 40);
  //      arriba  abajo
  //      X1, Y1, X2, Y2
  line(333, 0, 297, 0);
  line(333, 22, 297, -20);
  line(333, -20, 301, 22);

  ellipse(315, 150, 40, 40);
  line(333, 150, 297, 150);
  line(333, 122, 305, 166);
  line(333, 175, 301, 130);

  ellipse(315, 300, 40, 40);
  line(333, 300, 297, 300);
  line(333, 275, 305, 316);
  line(333, 325, 301, 279);

  ellipse(315, 450, 40, 40);
  line(333, 450, 297, 450);
  line(333, 425, 305, 466);
  line(333, 475, 301, 430);

  ellipse(315, 600, 40, 40);

  //      arriba  abajo
  //      X1, Y1, X2, Y2
  line(333, 600, 297, 600);
  line(333, 620, 300, 580);
  line(330, 580, 300, 620);

  //RECTÁNGULOS

  //Rojo
  noStroke(0);
  fill(178, 34, 34);
  rect(340, 0, 30, 700);

  //Verde
  noStroke(0);
  fill(46, 139, 87);
  rect(370, 0, 30, 700);

  //Anaranjado
  noStroke(0);
  fill(255, 140, 0);
  rect(400, 0, 30, 700);

  //Rosa
  noStroke(0);
  fill(500, 30, 120);
  rect(430, 0, 30, 700);

  //Rojo
  noStroke(0);
  fill(178, 34, 34);
  rect(460, 0, 150, 700);

  //Blanco
  noStroke(0);
  fill(0, 0, 130);
  //  fill(32, 178, 170);

  rect(505, 0, 50, 100);

  rect(484, 100, 92, 30);

  rect(484, 130, 25, 120);

  rect(551, 130, 25, 120);

  rect(460, 250, 49, 25);

  rect(551, 250, 50, 25);

  rect(460, 275, 25, 110);

  rect(575, 275, 25, 110);

  rect(485, 355, 25, 120);

  rect(550, 355, 25, 120);

  rect(485, 475, 90, 30);

  rect(505, 505, 50, 100);

  rect(509, 300, 42, 30);

  //Amarillo
  fill(255, 197, 0);
  rect(523, 0, 15, 700);

  //TRIÁNGULOS PEQUEÑOS - IZQUIERDA

  fill(25, 25, 85);
  //          abajo   centro  arriba
  //           der    arriba   izq
  //        x1, y2 , x2, y2 , x3, y3
  triangle(300, 43, 284, 33, 300, 33);
  triangle(300, 45, 284, 35, 284, 45);

  triangle(300, 115, 284, 105, 300, 105);
  triangle(300, 117, 284, 107, 284, 117);

  triangle(300, 194, 284, 184, 300, 184);
  triangle(300, 196, 284, 186, 284, 196);

  triangle(300, 265, 284, 255, 300, 255);
  triangle(300, 267, 284, 257, 284, 267);

  triangle(300, 345, 284, 335, 300, 335);
  triangle(300, 347, 284, 337, 284, 347);

  triangle(300, 415, 284, 405, 300, 405);
  triangle(300, 417, 284, 407, 284, 417);

  triangle(300, 495, 284, 485, 300, 485);
  triangle(300, 497, 284, 487, 284, 497);

  triangle(300, 565, 284, 555, 300, 555);
  triangle(300, 567, 284, 557, 284, 567);

  //TRIÁNGULOS PEQUEÑOS - DERECHA

  //          abajo   centro  arriba
  //           der    arriba   izq
  //        x1, y2 , x2, y2 , x3, y3
  triangle(337, 43, 321, 33, 337, 33);
  triangle(337, 45, 321, 35, 321, 45);

  triangle(337, 115, 321, 105, 337, 105);
  triangle(337, 117, 321, 107, 321, 117);

  triangle(337, 195, 321, 184, 337, 184);
  triangle(337, 197, 321, 186, 321, 197);

  triangle(337, 265, 321, 255, 337, 255);
  triangle(337, 267, 321, 257, 321, 267);

  triangle(337, 345, 321, 335, 337, 335);
  triangle(337, 347, 321, 337, 321, 347);

  triangle(337, 415, 321, 405, 337, 405);
  triangle(337, 417, 321, 407, 321, 417);

  triangle(337, 495, 321, 485, 337, 485);
  triangle(337, 497, 321, 487, 321, 497);

  triangle(337, 565, 321, 555, 337, 555);
  triangle(337, 567, 321, 557, 321, 567);

  //LÍNEAS
  strokeWeight(2);
  stroke(255, 197, 0); //Amarillo
  line(100, 600, 100, 0);

  stroke(178, 34, 34); //Rojo
  line(130, 600, 130, 0);

  stroke(0, 0, 190); //Azul
  line(160, 600, 160, 0); 

  stroke(255, 248, 220); //Blanco
  line(190, 600, 190, 0);

  stroke(500, 30, 120); //Rosa
  line(220, 600, 220, 0);

  stroke(0, 0, 190); //Azul
  line(250, 600, 250, 0);

  stroke(255, 197, 0); //Anaranjado
  line(370, 600, 370, 0);

  stroke(255, 248, 220); //Blanco
  line(400, 600, 400, 0);

  stroke(0, 0, 190); //Azul
  line(430, 600, 430, 0);

  stroke(255, 140, 0); //Anaranjado
  line(460, 600, 460, 0);

  strokeWeight(3);
  stroke(255, 140, 0); //Amarillo
  line(280, 600, 280, 0);
}
