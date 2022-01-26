class StartEnd {

    constructor (){
        this.startX = 250
        this.startY = 30
        this.endX = 200 
        this.endY = 730
    }

    preload(){
        this.startPlanetImage = loadImage('../assets/base3n.png')
        this.endPlanetImage = loadImage ('../assets/Moon.gif')
        this.playerWin = loadSound('../assets/planet.mp3')
    }
    draw (){
        image(this.startPlanetImage,this.startY,this.startX,50,50)
        image (this.endPlanetImage,this.endY,this.endX,50,50)

        if(dist(this.endY,this.endX,player.x,player.y) < 20){
            console.log('SUCCESS')
            resetPlayerWin();
        }
    }

  
}

