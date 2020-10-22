class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h3');       
    }
     hide(){
        this.button.hide();
        this.greeting.hide();
        this.input.hide();

     }
 
    display(){
        var title=createElement("h2");
        title.html("CarRacing Game");
        title.position(400,20);

        this.input.position(390,220);
        this.button.position(450,270);

        

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
           

            player.name=this.input.value();
            playerCount=playerCount+1;
            player.update();
            player.updateCount();
            player.index=playerCount;
            this.greeting.html("Hi "+player.name);
            this.greeting.position(400,200); 
            
         } );
        
    }
}
