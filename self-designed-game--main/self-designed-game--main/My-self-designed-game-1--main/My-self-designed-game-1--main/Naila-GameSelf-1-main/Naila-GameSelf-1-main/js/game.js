class Game{
    constructor(){
        this.question1 = createElement('h1');
        this.next1 = createButton('Next')
    }
    getState() { 
        var gameStateRef = database.ref("gameState"); 
        gameStateRef.on("value", function(data) { gameState = data.val(); }); 
    } 

    update(state) { 
        database.ref("/").update({ gameState: state }); 
    }

    hideQ1(){
        this.question1.hide();
    }

    start(){
        form = new Form();
        form.display();
    }

    play(){
        form.hide();
        console.log("gameStatePlay");
        this.question1.html('Answer the following question');
        this.question1.position(300,100);

        this.next1.position(400,300);
        this.next1.mousePressed(()=>{
            this.hideQ1()
        })



    }
    end(){

    }
}