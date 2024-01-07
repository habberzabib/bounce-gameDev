let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let blueSquare = {
  x: 50,
  y: canvas.height / 2 - 25,
  size: 30,
  speedX: 2,
};

let greenSquare = {
  x: canvas.width / 2 - 25,
  y: 50,
  size: 30,
  speedY: 2,
};

let orangeSquare = {
  x: canvas.width - 50,
  y: canvas.height - 50,
  size: 30,
  speedX: -2,
  speedY: -2,
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Blue square
  ctx.fillStyle = "blue";
  ctx.fillRect(blueSquare.x, blueSquare.y, blueSquare.size, blueSquare.size);

  // Green square
  ctx.fillStyle = "green";
  ctx.fillRect(
    greenSquare.x,
    greenSquare.y,
    greenSquare.size,
    greenSquare.size
  );

  // Orange square
  ctx.fillStyle = "orange";
  ctx.fillRect(
    orangeSquare.x,
    orangeSquare.y,
    orangeSquare.size,
    orangeSquare.size
  );
}

function update() {
  // Blue square movement (horizontal)
  blueSquare.x += blueSquare.speedX;
  if (blueSquare.x + blueSquare.size > canvas.width || blueSquare.x < 0) {
    blueSquare.speedX *= -1;
  }

  // Green square movement (vertical)
  greenSquare.y += greenSquare.speedY;
  if (greenSquare.y + greenSquare.size > canvas.height || greenSquare.y < 0) {
    greenSquare.speedY *= -1;
  }

  // Orange square movement (diagonal)
  orangeSquare.x += orangeSquare.speedX;
  orangeSquare.y += orangeSquare.speedY;
  if (orangeSquare.x + orangeSquare.size > canvas.width || orangeSquare.x < 0) {
    orangeSquare.speedX *= -1;
  }
  if (
    orangeSquare.y + orangeSquare.size > canvas.height ||
    orangeSquare.y < 0
  ) {
    orangeSquare.speedY *= -1;
  }
}

function animate() {
  draw();
  update();
  requestAnimationFrame(animate);
}

animate();
