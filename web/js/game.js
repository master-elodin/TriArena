Game = {

    KEYCODES:{
        ARROW_LEFT : 37,
        ARROW_RIGHT : 39,
        ARROW_UP : 38,
        ARROW_DOWN : 40
    },

    playerConstants: {
        maxSpeed : 4

    },

    player : null,

    keyEventPressed : function(e) {
        switch (event.keyCode) {
            case Game.KEYCODES.ARROW_LEFT:
                createjs.Tween.get(Game.player).to({ rotation: Game.player.rotation  - 5}, 100);
                break;
            case Game.KEYCODES.ARROW_RIGHT:

                createjs.Tween.get(Game.player).to({ rotation: Game.player.rotation + 5}, 100);
                break;
            case Game.KEYCODES.ARROW_UP:
                if(Game.player.playerSpeed != Game.playerConstants.maxSpeed){
                    Game.player.playerSpeed++;
                }


                break;
            case Game.KEYCODES.ARROW_DOWN:

                Game.player.playerSpeed--;

                break;
        }

    },


    init : function(){
        var stage = new createjs.Stage("demoCanvas");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
        Game.player = new createjs.Shape();
        Game.player.graphics.s("black").mt(0, 60).lt(90, 105).lt(0, 150).lt(0, 60);


        Game.player.x = 60;
        Game.player.y = 60;
        Game.player.regX =  45;
        Game.player.regY = 105;
        Game.player.playerSpeed = 0;
        stage.addChild(Game.player);
        stage.update();



        stage.addChild(Game.player);
        createjs.Ticker.addEventListener("tick", stage);
        createjs.Ticker.addEventListener("tick",Game.playerMove)

        this.document.onkeydown = Game.keyEventPressed;
    },


playerMove : function(){
    var angle = Game.player.rotation * Math.PI / 180;
    Game.player.x = Game.player.x + Game.player.playerSpeed * Math.cos(angle);
    Game.player.y = Game.player.y + Game.player.playerSpeed * Math.sin(angle)

}


}