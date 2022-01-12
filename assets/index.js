import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector("video")
const player = new MediaPlayer({ el:video, Plugins:[new AutoPlay()] })

const playbutton = document.querySelector("#playPause")
playbutton.onclick = () => player.togglePlay()

const mutebutton = document.querySelector("#muteUnmute")
mutebutton.onclick = () => player.togglemute()