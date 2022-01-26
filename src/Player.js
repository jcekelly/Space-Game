class Player {

    constructor(){
        this.x = 0 
        this.y = 250
        this.controls = true
    }



    preload (){
        this.playerImage = loadImage('../assets/surt6.png')
        this.boosting = loadSound('../assets/Randomize88.wav')
        this.boosting.setVolume(0.3)
    }

    draw (){
        image(this.playerImage,this.x,this.y,80,60)


       if (this.controls === true){
       
        if (keyIsDown(39)) {
            this.moveRight()
          } else if (keyIsDown (37)) {
            this.moveLeft()
          } else if (keyIsDown (40)) {
            this.moveDown()
          } else if (keyIsDown (38)){
            this.moveUp()
          } else if (keyIsDown(32)){
              this.boost()
              this.boosting.play()
          }
        }

        let remainingLives = document.getElementById('losses').value
    if(remainingLives <= '0'){
        gameOver();
    }
          
          this.x = constrain(this.x,0,720)
          this.y = constrain(this.y,0,460)


          if (this.x === 0){
              background.displayControls();
          }
          
    }




    moveRight(){
        this.x +=10
      }
      moveLeft(){
        this.x -=8
      }
      moveUp(){
        this.y -=8
      }
      moveDown(){
        this.y +=8
      }

      boost(){
          this.x +=20
      }

      

    }
      


