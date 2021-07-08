
var database
var gameState = 0;
var playerCount,players;

var database;

var form, player, game;

function setup(){
    createCanvas(500,500);

    //initiating the database
    database = firebase.database()
    game = new Game() 
    game.getState()
    game.start()
}

function draw(){
 if(playerCount ===4) {
     game.updateState(1)
 }
 if(gameState===1) {
     game.play()
 }
}
