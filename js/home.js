let button;

let verde;
let bianco;
let colore;
let angle = 0;

let font;

function preload() {
  font = loadFont("font/ELEKTRA_.ttf");
}

function setup() {
  noCanvas();
}

function draw() {
  background(255);
  angle += 0.08;

  button = select("#bottone-home");

  textFont(font);

  stileButton();
  // button.mouseOver(changeStyle);

  verde = color(0, 255, 0, 255);
  bianco = color(255, 255, 255, 255);
  colore = lerpColor(verde, bianco, abs(sin(angle)));
}
function stileButton() {
  button.style("color", verde);
  button.style("border-color", verde);
}

//function changeStyle() {
//  button.style("color", verde);
//  button.style("border-color", verde);
//}

//function resetStyle() {
//  stileButton;
//}
