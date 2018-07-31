var x = 0;

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background("yellow");
  strokeWeight(8);
   stroke(208);

for(var x = 0; x <= width; x += 50){
  fill(208, 0, random(300));
  ellipse(x, 200, 25, 200);
 }
}

