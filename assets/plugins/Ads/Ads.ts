interface Ad{
    imageUrl:string
    title:string
    body:string
    url:string
}

const ALL_ADS: Ad[] = []

class Ads{
    private static instance:Ads
    private ads: Ad[]

    private constructor(){}

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads()
        }
    }

    private iniAds(){
        this.ads = []
    }

    getAd(){
        this.ads.pop()
    }
}