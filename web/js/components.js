/**
 *
 * Created by Easley94 on 4/4/2014.
 */

Crafty.c('Grid',{
init: function(){
    this.attr({
        w: Game.map_grid.tile.width,
        h: Game.map_grid.tile.height
    })
},

at: function(x,y){
    if(x=== undefined && y === undefined){
        return {x: this.x/Game.map_grid.tile.width, y:this.y/Game.map_grid.tile.height}
    }else{
        this.attr({x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.width});
    return this;
    }
}
});

Crafty.c('Actor',{
    init: function(){
        this.requires('2D,Canvas,Grid');
    }
});



Crafty.c('Tree',{
    init: function(){
        this.requires('Actor, Color');
        this.color('rgb(20, 125, 40)');
    }
});

Crafty.c('Bush',{
   init: function(){
       this.requires('Actor, Color');
       this.color('rgb(20, 185, 40)');
   }
});

Crafty.c('Tri'){
    Crafty.polygon([50,0], [100,100], [0,100])
}

Crafty.c("Triangle", {
    Triangle: function(height, width, color, alpha) {
        this.h = height; // TODO check for bad values
        this.w = width; // TODO check for bad values
        this.color = color || "#000000";
        this.alpha = alpha; // TODO check for bad values



        return this;
    },
//http://www.ehow.com/how_8484308_draw-triangles-java.html
    draw: function() {
        var context = Crafty.canvas.context;
        // Set the style properties.
        context.fillStyle   = this.color;
        context.strokeStyle = "#FFF";
        context.lineWidth   = 1;
        context.globalAlpha = this.alpha;

        context.beginPath();
        // Start from the top-left point.
        context.moveTo(this.x+this.w/3, this.y+(2*this.h)/3); // give the (x,y) coordinates
        context.lineTo(this.x+this.w/2, this.y+this.h/3);
        context.lineTo(this.x+(2*this.w)/3, this.y+(2*this.h)/3);
        context.lineTo(this.x+this.w/3, this.y+(2*this.h)/3);

        // Done! Now fill the shape, and draw the stroke.
        // Note: your shape will not be visible until you call any of the two methods.
        context.fill();
        context.stroke();
        context.closePath();
    }



});

/*Craft.c('PlayerCharacter',function(){
    init: function(){
        this.requires('Actor,Fourway,Color,Collision')
            .fourway(4)
            .color('rgb(20, 75, 40)')
            .stopOnSolids();
    }


    stopOnSolids : function(){
        this.onHit('Solid', this.stopMovement);

        return this;
    },

    stopMovement : function(){
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },
});*/
