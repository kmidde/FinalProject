//Bryce Hackel and Karthik
//
//Final Project - History RPG

var player = { //player object
	name:"",
	godMode:false,
	x:10,
	y:360,
	walkingSpeed:1,
	movementSpeed:3,
	runningSpeed:10,
};

var game = { //game object
	run:false,
};

console.log("screen size of "+window.innerWidth+"x"+window.innerHeight);

var frameRun;var keyRun;

function start() {
	"use strict";
	player.name = document.getElementById("nameField").value;
	//if (player.name === "") { //doesnt allow blank names
		//alert("invalid name");
		//return;
	//}
	game.run = true;
	document.getElementById("choose").innerHTML = ''; //clears the staring screen
	document.getElementById("content").innerHTML += '<div id="playerImage" style="position: absolute;left:'+(player.x-25)+'px;top:+'+(player.y-25)+'px;"><img id="player" src="../_images/player.png"></div>';
	if (player.name === "God" || player.name === "god" || player.name === "gaben" || player.name === "Gaben") { //secret dev mode/easter egg
		document.getElementById("player").setAttribute('src', '../_images/God.png');
		player.godMode = true;
	}
	frameRun = setInterval(frame, 10);//runs frame every 0.01 second
	
}

function frame() {
	if (game.run === true) {
		checkKey();
		if (player.y <= 0 || player.y >= 720 || player.x <= 0 || player.x >= 1280) { //checking if player has left the canvas, then kills them
			game.run = false;
		}
		
	}
	else { //displays death message when game ends
		console.log("you died");
		document.getElementById("choose").style.fontSize = '50px';
		document.getElementById("choose").innerHTML = "you died reload to not be dead";
		clearInterval(frameRun);
	}
}

var Keys = {
    up: false,
    down: false,
    left: false,
    right: false,
};

window.onkeydown = function(e){
     var kc = e.keyCode;
     //e.preventDefault();

     if(kc === 37) {Keys.left = true;}
     if(kc === 38) {Keys.up = true;}
     if(kc === 39) {Keys.right = true;}
     if(kc === 40) {Keys.down = true;}
	 if(kc === 16) {player.movementSpeed = player.maxMovementSpeed;}
 };

window.onkeyup = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) {Keys.left = false;}
     if(kc === 38) {Keys.up = false;}
     if(kc === 39) {Keys.right = false;}
     if(kc === 40) {Keys.down = false;}
	 if(kc === 16) {player.movementSpeed = player.minMovementSpeed;}
};

function checkKey(){
    if(Keys.up){
        player.y -= player.movementSpeed;
    }

    if(Keys.down){
        player.y += player.movementSpeed;
    }

    if(Keys.left) {
        player.x -= player.movementSpeed;
    }

    if(Keys.right){
        player.x += player.movementSpeed;
    }
	document.getElementById("playerImage").style = 'position: absolute;left:'+(player.x-25)+'px;top:+'+(player.y-25)+'px;';
}
