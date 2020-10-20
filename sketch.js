var  database;
var position,player,form,game,allPlayers,playerCount;
var distance = 0;
var gameState=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400); 
  game=new Game();
  game.getstate();
  game.start();

}

function draw(){
  background("white");

  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  
}


