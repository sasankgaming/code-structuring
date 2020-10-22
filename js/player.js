class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });

    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
            
        });

    }
    static getPlayerInfo(){
        var playerinfoRef= database.ref('players');
        playerinfoRef.on("value",(data)=>{
            allPlayers=data.val();
            

        });


    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        });

    }
}