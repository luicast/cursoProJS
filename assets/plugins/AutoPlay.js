
function AutoPlay(){}

AutoPlay.prototype.run = function(Player){
    Player.mute()
    Player.play()
}

export default AutoPlay