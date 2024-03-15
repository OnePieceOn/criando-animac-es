let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(900, 900);
   background(color(20,8,9));
  cor = color(random(0,225), random(0,225), random(0,225));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,150);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,230), random(0,265), random(0,255), random(0,200));
  }
   
}