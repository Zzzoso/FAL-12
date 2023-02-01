let button;

let verde;
let bianco;
let colore;
let angle = 0;

function setup() {
  noCanvas();
}

function draw() {
  background(255);
  angle += 0.08;

  button = select("#bottone-home");

  //button.mouseOut(resetStyle);

  stileButton();
  button.mouseOver(changeStyle);

  verde = color(0, 255, 0, 255);
  bianco = color(255, 255, 255, 255);
  colore = lerpColor(verde, bianco, abs(sin(angle)));
}
function stileButton(yes, no) {
  button.style("color", colore);
  button.style("border-color", colore);
}

function changeStyle() {
  button.style("color", verde);
  button.style("border-color", verde);
}

//function resetStyle() {
//  stileButton;
//}
