
const background = new Background()
const player = new Player()
const obstacle = new Obstacle()
const startEnd = new StartEnd()


function preload (){
background.preload()
player.preload()
obstacle.preload()
startEnd.preload()
VCR = loadFont('/assets/VCR_OSD_MONO_1.001.ttf')
soundtrack = loadSound('/assets/soundtrackShort.wav')
soundtrack.loop(true);}


function setup (){
    createCanvas(800, 600);
    frameRate(60);
    textFont(VCR);
    textAlign(CENTER,CENTER);
    textSize(25);
    fill('#FF6C00');
    soundtrack.play();
    soundtrack.setVolume(0.3);

}




function draw (){
    clear ()
background.draw()
player.draw()
obstacle.draw()
startEnd.draw()
}

function resetPlayerLoss(){
    player.x = 0;
    player.y = 250;
    const lossCount = document.getElementById('losses').value -- ;
    obstacle.nebulaX = (Math.random() * 560)+100
    obstacle.nebulaY = 0
    obstacle.greenX = (Math.random() * 560)+100
    obstacle.greenY = 480
    obstacle.phantomX = (Math.random() * 560)+100
    obstacle.phantomY = 480
    obstacle.vortexX = (Math.random() * 560)+100
    obstacle.vortexY = 480
    obstacle.sunburstX = (Math.random() * 560)+100
    obstacle.sunburstY = 0
    obstacle.collision.play()   
}

function resetPlayerWin(){
    player.x = 0;
    player.y = 250;
    const winCount = document.getElementById('Wins').value ++ ;
    obstacle.nebulaX = (Math.random() * 560)+100
    obstacle.nebulaY = 0
    obstacle.greenX = (Math.random() * 560)+100
    obstacle.greenY = 0
    obstacle.phantomX = (Math.random() * 560)+100
    obstacle.phantomY = 480
    obstacle.vortexX = (Math.random() * 560)+100
    obstacle.vortexY = 0
    obstacle.sunburstX = (Math.random() * 560)+100
    obstacle.sunburstY = 480 
    startEnd.playerWin.play()
}


function gameOver(){
    console.log('GAME OVER');
    text('GAME OVER - press enter to play again', 400, 150);
    if (keyCode === 13){
        location.reload();
    }
    player.controls = false
    obstacle.movement = false 
    }






// - randomize planet again 
// - generate own sound ?
// - add game over sound that is triggered outside draw? 
// - improve planet and station sprites
