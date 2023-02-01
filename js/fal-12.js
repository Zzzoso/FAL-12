let faceapi;
let detections = [];

let video;
let canvas;

let angle = 0;
let txt;

function setup() {
  canvas = createCanvas(480 * 1.8, 360 * 1.8);
  canvas.id("canvas");

  video = createCapture(VIDEO); // Creat the video: ビデオオブジェクトを作る
  video.id("video");
  video.size(width, height);
  video.hide();

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5,
  };

  //Initialize the model: モデルの初期化
  faceapi = ml5.faceApi(video, faceOptions, faceReady);

  txt = createP("Ciao!");
  txt.id("text");
}

function faceReady() {
  faceapi.detect(gotFaces); // Start detecting faces: 顔認識開始
  console.log(detections);
}

// Got faces: 顔を検知
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result; //Now all the data in this detections: 全ての検知されたデータがこのdetectionの中に
  // console.log(detections);

  clear(); //Draw transparent background;: 透明の背景を描く
  drawBoxs(detections); //Draw detection box: 顔の周りの四角の描画
  drawLandmarks(detections); //// Draw all the face points: 全ての顔のポイントの描画
  drawExpressions(detections, 20, 250, 14); //Draw face expression: 表情の描画

  faceapi.detect(gotFaces); // Call the function again at here: 認識実行の関数をここでまた呼び出す
}

function drawBoxs(detections) {
  if (detections.length > 0) {
    //If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    for (f = 0; f < detections.length; f++) {
      let { _x, _y, _width, _height } = detections[f].alignedRect._box;
      stroke(0, 255, 0, 100);
      strokeWeight(1);
      noFill();
      rect(_x, _y, _width, _height);
    }
  }
}

function drawLandmarks(detections) {
  if (detections.length > 0) {
    //If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    for (f = 0; f < detections.length; f++) {
      let points = detections[f].landmarks.positions;
      for (let i = 0; i < points.length; i++) {
        stroke(0, 255, 0);
        strokeWeight(4);
        point(points[i]._x, points[i]._y);
      }
    }
  }
}

function drawExpressions(detections, x, y, textYSpace) {
  if (detections.length > 0) {
    //If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    let { neutral, happy, angry, sad, disgusted, surprised, fearful } =
      detections[0].expressions;
    nfneutral = nf(neutral * 100, 2, 2);
    textFont("Menlo, Monaco, 'Courier New', monospace");
    textSize(14);
    noStroke();
    fill(0, 255, 0);

    text("   neutral:       " + nfneutral + "%", x, y + textYSpace * 2);

    text(
      "   happiness:     " + nf(happy * 100, 2, 2) + "%",
      x,
      y + textYSpace * 4
    );

    text(
      "   anger:         " + nf(angry * 100, 2, 2) + "%",
      x,
      y + textYSpace * 6
    );
    text(
      "   sad:           " + nf(sad * 100, 2, 2) + "%",
      x,
      y + textYSpace * 8
    );
    text(
      "   disgusted:     " + nf(disgusted * 100, 2, 2) + "%",
      x,
      y + textYSpace * 10
    );
    text(
      "   surprised:     " + nf(surprised * 100, 2, 2) + "%",
      x,
      y + textYSpace * 12
    );
    text(
      "   fear:          " + nf(fearful * 100, 2, 2) + "%",
      x,
      y + textYSpace * 14
    );
  } else {
    //If no faces is detected: 顔が1つも検知されていなかったら
    text("   neutral: ", x, y + textYSpace * 2);
    text("   happiness: ", x, y + textYSpace * 4);
    text("   anger: ", x, y + textYSpace * 6);
    text("   sad: ", x, y + textYSpace * 8);
    text("   disgusted: ", x, y + textYSpace * 10);
    text("   surprise: ", x, y + textYSpace * 12);
    text("   fear: ", x, y + textYSpace * 14);
  }
}

function keyPressed() {
  if (keyPressed) {
    saveCanvas("capolavoro.jpg");
  }
}

var loader = document.getElementById("preloader");

function draw() {
  // contatore che fa cambiare contenuto al paragrafo

  angle = angle + 0.02;
  let counter = sin(angle);

  if (counter < 0) {
    txt.html("cheeeeeeeeeese");
  } else if (counter > 0) {
    txt.html("schiaccia⋅un⋅tasto⋅per⋅salvare");
  }

  // -------------------------------------------------

  let r = 0;
  let g = 255 * abs(sin(angle));
  let b = 0;
  let a = 100;
  let col = color(r, g, b, a);
  txt.style("color", col);

  if (angle > 2) {
    loader.style.display = "none";
  }
}
