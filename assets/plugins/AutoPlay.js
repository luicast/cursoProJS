function AutoPlay(){}
AutoPlay.prototype.run = function(Player){
    if(!Player.muted){
        Player.muted = true
    }
    Player.play()
}

export default AutoPlay