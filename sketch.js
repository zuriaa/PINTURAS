function setup() {
  createCanvas(600, 600);
 background("#E585A6");
}
  
  
function draw() {
  
  
  fill("rgb(155,155,223)")
  stroke("rgb(201,131,131)")
  strokeWeight(5)
  
  if(mouseIsPressed){
  rect(mouseX, mouseY, 40, 40);
 }
}
