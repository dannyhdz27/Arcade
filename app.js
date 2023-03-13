let snake = {
  body: [
    [10, 5],
    [10, 6],
    [10, 7],
    [10, 8],
  ],
  nextDirection: [1, 0],
};

const Board = document.querySelector(".gameBoard");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const box = document.createElement("div");
    box.id = `${i}-${j}`;
    Board.appendChild(box);
  }
}

let gameLoop = setInterval(frameUpdate, 1000 / 30);

function frameUpdate() {
  //   moveSnake();
  //   if (hitWall() || hitSelf()) {
  //     clearInterval(gameLoop);
  //   }
}

Board.children[0].classList.add("snake");

setFood();

function setFood() {
  const xValue = Math.floor(Math.random() * 10);
  const yValue = Math.floor(Math.random() * 10);
  let food = `${xValue}-${yValue}`;
  let div1 = document.getElementById(food);
  div1.classList.add("apple");

  console.log("the food id is:", food);
}

// document.addEventListener("keydow", changeDirection);
// function gameOver(){
// if(
//   snake[snake.length -1].row < 0 ||
//   snake[snake.length -1].col < 0 ||
//   snake[snake.length -1].row < 10 ||
//   snake[snake.length -1].col < 10 ||
// )

// }
