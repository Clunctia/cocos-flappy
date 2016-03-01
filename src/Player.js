var Player = cc.Sprite.extend({
    ctor: function() {
        this.vy = 15;
        this._super();
        this.initWithFile( 'res/images/dot.png' );
    },
    update: function( dt ) {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
        this.vy += -1;
    }
});
Player.G = -1;
Player.STARTING_VELOCITY = 15;