import MediaPlayer from "../MediaPlayer.js"
class AutoPlay {
    constructor(){}
    run(player: MediaPlayer) {
        if(!player.muted){
            player.muted = true
        }
        player.play()
    }
}


export default AutoPlay