import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector("video")
const playbutton = document.querySelector("#playPause")
const mutebutton = document.querySelector("#muteUnmute")

const player = new MediaPlayer({
    el: video, 
    Plugins:[new AutoPlay(), new AutoPause()],
})

playbutton.onclick = () => player.togglePlay()
mutebutton.onclick = () => player.togglemute()