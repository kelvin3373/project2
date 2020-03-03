var quads = [];
var pos_x = 200;
var pos_y= 200;
var moving_right = true;
var moving_down = true;
var rv = 100;
var blend_mode = "LIGHT";
// var s = second()*4.3;

function setup() {
  createCanvas(800,800);
  blendMode(LIGHTEST);
  stroke(5);
  background(0);
  frameRate(30);
}

function quadConstructor(){}

function renderQuads(i){
    var s = second();
    var color_x= mouseX/3;
    var color_y= mouseY/3;
  	fill(color(random(0,color_x),random(0,color_x),random(0,color_x)));
  	quad(pos_x+random(-rv,rv),pos_y+random(-rv,rv),
       	pos_x+random(-rv,rv),pos_y+random(-rv,rv),
      	pos_x+random(-rv,rv),pos_y+random(-rv,rv),
       	pos_x+random(-rv,rv),pos_y+random(-rv,rv))
    fill(color(random(0,255),random(0,255),random(0,255)));
    ellipse(pos_x,pos_y,30,30);
    fill(color(random(0,255),random(0,255),random(0,255)));
    ellipse(pos_x,pos_y,50,50);
}

function draw() {
textSize(30);
text(blend_mode , 340, 390);

//whether it is reaching the end of the screen
if(pos_x >= 800){
  moving_right = false;
}else if(pos_x <= 0){
  moving_right = true;
}else if(pos_y >= 800){
  moving_down = false;
}else if(pos_y <= 0){
  moving_down = true;
}

//speed
var speed = mouseY/2;
if (moving_right == true){
  pos_x += random(0,speed);
}else if(moving_right == false){
  pos_x += random(-speed,0);
}
if (moving_down == true){
  pos_y += random(0,speed);
}else if(moving_down == false){
  pos_y += random(-speed,0);
}

quads.push(new quadConstructor());

for(i = 0; i < 1; i++){
renderQuads(i);}
}

function mouseClicked(){
  if (blend_mode == "LIGHT") {
    blendMode(DARKEST);
    blend_mode = "DARK";
  } else if(blend_mode == "DARK") {
    blendMode(LIGHTEST);
    blend_mode = "LIGHT";
  }
}
