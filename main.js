var screenWidth = 800;       // add these two constants
var screenHeight = 600;      //
 
cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(screenWidth, screenHeight, cc.ResolutionPolicy.SHOW_ALL);    // use them here
    // ...
};
cc.game.run();