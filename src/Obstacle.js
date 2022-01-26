class Obstacle {
    
   
    constructor(){
        this.nebulaX = (Math.random() * 560)+100
        this.nebulaY = 480
        this.greenX = (Math.random() * 560)+100
        this.greenY = 480
        this.phantomX = (Math.random() * 560)+100
        this.phantomY = 0
        this.vortexX = (Math.random() * 560)+100
        this.vortexY = 0
        this.sunburstX = (Math.random() * 560)+100
        this.sunburstY = 480 
        this.width = 40
        this.height = 40
        this.widthPlus = 80
        this.heightPlus = 80
        this.nebulaSpeed = -1
        this.greenSpeed = -3
        this.phantomSpeed = -3
        this.vortexSpeed = -3
        this.sunburstSpeed = -3
        this.movement = true
    }

    preload(){
        this.obstacleImageNebula = loadImage('../assets/nebula-sprite.gif')
        this.obstacleImageGreen = loadImage('../assets/green-sprite.gif')
        this.obstacleImagePhantom = loadImage('../assets/phantom sprite.gif')
        this.obstacleImageVortex = loadImage('../assets/vortex.gif')
        this.obstacleImageSunburst = loadImage('../assets/sunburst.gif')
        this.collision = loadSound('../assets/collision.wav')
        this.collision.setVolume(0.3);

        

    
    }
    draw(){
        image(this.obstacleImageNebula,this.nebulaX,this.nebulaY,this.widthPlus,this.heightPlus)
        image(this.obstacleImageGreen,this.greenX,this.greenY,this.widthPlus,this.heightPlus)
        image(this.obstacleImagePhantom,this.phantomX,this.phantomY,this.widthPlus,this.heightPlus)
        image(this.obstacleImageVortex,this.vortexX,this.vortexY,this.widthPlus,this.heightPlus)
        image(this.obstacleImageSunburst,this.sunburstX,this.sunburstY,this.widthPlus,this.heightPlus)

       if (this.movement = true){
           
        
        if (this.nebulaY < 5){
            this.nebulaSpeed = random(3,10);
        } else if (this.nebulaY > 479){
            this.nebulaSpeed = random(-10,-3);
        }

        if (this.greenY < 5){
            this.greenSpeed = random(3,10);
        } else if (this.greenY > 479){
            this.greenSpeed = random(-10,-3);
        }

        if (this.phantomY < 5){
            this.phantomSpeed = random(3,10);
        } else if (this.phantomY > 479){
            this.phantomSpeed = random(-10,-3)
        }


        if (this.vortexY < 5){
            this.vortexSpeed = random(3,10);
        } else if (this.vortexY > 479){
            this.vortexSpeed = random(-10,-3)
        }

        if (this.sunburstY < 5){
            this.sunburstSpeed = random(3,10);
        } else if (this.sunburstY > 479){
            this.sunburstSpeed = random(-10,-3)
        }


       
        this.nebulaY = this.nebulaY + this.nebulaSpeed
        this.greenY = this.greenY + this.greenSpeed
        this.phantomY = this.phantomY + this.phantomSpeed
        this.vortexY = this.vortexY + this.vortexSpeed
        this.sunburstY = this.sunburstY + this.sunburstSpeed

    }


       if(dist(this.nebulaX,this.nebulaY,player.x,player.y) < 40){
           console.log('nebula collision')
           resetPlayerLoss();
       } 

       if(dist(this.greenX,this.greenY,player.x,player.y) < 40){
        console.log('green collision')
        resetPlayerLoss();
        }

       if(dist(this.phantomX,this.phantomY,player.x,player.y) < 40){
        console.log('phantom collision')
        resetPlayerLoss();
        }

        if(dist(this.vortexX,this.vortexY,player.x,player.y) < 40){
            console.log('vortex collision')
            resetPlayerLoss();
        }

        if(dist(this.sunburstX,this.sunburstY,player.x,player.y) < 40){
            console.log('sunburst collision')
            resetPlayerLoss();
        }

        


}

     

}

