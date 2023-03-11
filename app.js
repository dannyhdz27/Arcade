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

setFood();

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    cell.id = `${i}-${j}`;
    Board.appendChild(cell);
  }
}

// let gameLoop = setInterval(frameUpdate, 1000 / 30);

// function frameUpdate() {
//   setBoard();
//   setFood();
//   moveSnake();

//   if (hitWall() || hitSelf()) {
//     clearInterval(gameLoop);
//   }
// }

function setFood() {
  const xValue = Math.floor(Math.random() * 10);
  const yValue = Math.floor(Math.random() * 10);
  const food = `${xValue}-${yValue}`;
  // const foodID = document.getElementById(food);
  div.classList.add("food");
  console.log("the food id is:", food);
}
