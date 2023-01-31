let button;
let logo = select("#logo");

function setup() {
  noCanvas();
}

function draw() {
  background(255);
  button = select("#bottone-home");
  button.mouseOver(changeStyle);
  button.mouseOut(resetStyle);
  logo.tint(255, 100, 150);
}

function changeStyle() {
  button.style("color", "green");
  button.style("border-color", "green");
}

function resetStyle() {
  button.style("color", "white");
  button.style("border-color", "white");
}
