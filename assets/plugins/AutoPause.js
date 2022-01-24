class AutoPause {
    run(player){
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: 0.25
        })
        observer.observe(player.media)
    }
    handlerIntersection(entries){
        const entry = entries[0]
        console.log(entry)
    }
}

export default AutoPause