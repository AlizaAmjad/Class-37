class Game {
    constructor(){}

    //reads the gameState value from the database
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState = data.val()
        })
    }

    //writes the gameState value in the database
    updateState(count){
        database.ref("/").update({
            gameState :count
        })
    }

    //start screen
    start() {
        if(gameState === 0) {
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }

    //play screen
    play() {
        form.hidden()
        text("Game Has Started",250,250)
    }
}