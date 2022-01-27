class StartEnd {

    constructor (){
        this.startX = 250
        this.startY = 30
        this.endX = 200 
        this.endY = 730
        this.posArray = [25,50,100,150,200,250,300,350,400,450]
        this.randomX = this.posArray[Math.floor(this.posArray.length * Math.random())];
    }

    preload(){
        this.startPlanetImage = loadImage('assets/base3n.png')
        this.endPlanetImage = loadImage ('assets/Moon.gif')
        this.playerWin = loadSound('assets/planet.mp3')
    }
    draw (){
        image(this.startPlanetImage,this.startY,this.startX,50,50)
        image (this.endPlanetImage,this.endY,this.randomX,50,50)

        if(dist(this.endY,this.endX,player.x,player.y) < 20){
            console.log('SUCCESS')
            resetPlayerWin();
        }
    }

  
}

