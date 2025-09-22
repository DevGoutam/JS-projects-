var boxSize = 25;
var rows =20;
var cols =20;
var board;
var context;

// sneak head 
var snakeX = boxSize * 5;
var snakeY = boxSize * 5;

var velocityX = 0;
var velocityY = 0;

var snackBody =[];

// food 
var foodX;
var foodY;

var gameOver = false;

window.onload = function() {
    board= document.getElementById("board");
    board.height = rows * boxSize;
    board.width = cols * boxSize;
    context = board.getContext("2d");
   placeFood();
   document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/6);
}

function update()  {
    if(gameOver) {
        return;
    }
context.fillStyle= 'rgba(19, 46, 87, 0.93)';
context.fillRect(0,0, board.width, board.height);

context.fillStyle='#26da0fff';

snakeX += velocityX * boxSize
snakeY += velocityY * boxSize
context.fillRect(snakeX,snakeY, boxSize, boxSize)

for(let i = 0; i < snackBody.length; i++){
    context.fillRect(snackBody[i][0], snackBody[i][1], boxSize , boxSize)
}
for(let i = snackBody.length-1; i>0; i--){
snackBody[i] = snackBody[i-1];
}
if(snackBody.length){
    snackBody[0]=[snakeX,snakeY];
}    

// game over conditions
if (snakeX < 0 || snakeX >= cols * boxSize || snakeY < 0 || snakeY >= rows * boxSize) {
    gameOver = true;
    // alert("Game Over");
playGameOver();
}

    for (let i = 3; i < snackBody.length; i++) {
        if (snakeX == snackBody[i][0] && snakeY == snackBody[i][1]) {
            gameOver = true;
            playGameOver();
        }
    }


context.fillStyle='#C8D3A9';
context.fillRect(foodX,foodY, boxSize, boxSize);

if(snakeX == foodX && snakeY == foodY){
    snackBody.push([foodX, foodY])
    placeFood();
        // music play
    let sound = document.getElementById("eatSound");
    sound.play();
}



}

function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1 ){
        velocityX =0;
        velocityY = -1;
    }
    if(e.code == "ArrowDown" && velocityY != -1 ){
        velocityX =0;
        velocityY = 1;
    }
    if(e.code == "ArrowLeft" && velocityX != 1 ){
        velocityX =-1;
        velocityY = 0;
    }
    if(e.code == "ArrowRight" && velocityX !=-1 ){
        velocityX =1;
        velocityY = 0;
    }
}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) *boxSize;
    foodY = Math.floor(Math.random() * rows) *boxSize;
}

function playGameOver() {
    let sound = document.getElementById("gameOver");
    sound.play();

    let heading = document.querySelector('.heading');
    if (heading) {
        heading.classList.add('error');
        setTimeout(() => {
            heading.classList.remove('error');
        }, 1000);
    }
}