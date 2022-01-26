class Background {

    preload (){
        this.backgroundImage = loadImage('../assets/6707990.jpg')
    }
   draw (){
       image(this.backgroundImage,0,0, 800, 530)

   }

   
   

   displayControls (){
    text('Arrow Keys to move. Space-bar to Boost',400,500)

}
}