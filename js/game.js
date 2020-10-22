class Game{
    constructor(){
    }

    getstate(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on("value",function(data){
            gameState=data.val();
        });
    }       
    updatestate(state){
        database.ref('/').update({
            gameState:state
        });

    }

    play(){
        form.hide();
        text("Games Start",150,200);
         player.getPlayerInfo();

         if(allPlayers !== undefined){
             var displayPosition = 100;

             for(var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red");                   
                }

                else{
                    fill("black");
                }
                displayPosition+=20;
                textSize(15);
                text(allPlayers[plr].name+" : "+allPlayers [plr].distance ,120,displayPosition);
             }
         }   

         if(keyDown (UP_ARROW)&& player.index!==null){
             player.distance+=40;
             player.update();
             
         }

    
    }
    start(){
        if(gameState === 0 ){
            player=new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}