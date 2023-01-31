let button;

function setup() {
  noCanvas();
}

function draw() {
  background(255);
  button = select("#bottone-home");
  button.mouseOver(changeStyle);
  button.mouseOut(resetStyle);
  tint(0, 153, 204);
  let logo = select("#logo");
  logo.tint(200, 201, 102, 255);

  console.log(logo);
}

function changeStyle() {
  button.style("color", "green");
  button.style("border-color", "green");
}

function resetStyle() {
  button.style("color", "white");
  button.style("border-color", "white");
}
