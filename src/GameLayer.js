var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
 
        this.addKeyboardHandlers();
        
        this.player = new Player();
        this.player.setPosition( new cc.Point( screenWidth / 2, screenHeight / 2 ) );
        this.addChild( this.player );
        this.player.scheduleUpdate();
        return true;
    },
    onKeyDown: function( keyCode, event ) {
	   if ( keyCode == cc.KEY.space ) {
           this.ship.switchDirection();
	   }
    },
    onKeyUp: function( keyCode, event ) {
	   console.log( 'Up: ' + keyCode.toString() );
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        
        console.log( 'GameLayer created' );
        
        layer.init();
        this.addChild( layer );
    }
});

