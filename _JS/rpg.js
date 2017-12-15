//Bryce Hackel and Karthik
//
//Final Project - History RPG

var player = { //player object
	name:"",
	godMode:false,
	allowMove: false,
	display:false,
	x:10,
	y:360,
	walkingSpeed:1,
	movementSpeed:3,
	runningSpeed:10,
	speed:3,
};

var game = { //game object
	run:false,
};

console.log("screen size of "+window.innerWidth+"x"+window.innerHeight);

var frameRun;

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
	
	document.getElementById('choose').innerHTML += '<button id="" onclick="china()">China</button><button id="" onclick="middle()">Middle Ages</button><button id="" onclick="americas()">Americas</button';
	frameRun = setInterval(frame, 10);//runs frame every 0.01 second
}

function frame() {
	if (game.run === true) {
		checkKey();
		document.getElementById("playerImage").style = 'position: absolute;left:'+(player.x-25)+'px;top:+'+(player.y-25)+'px;';
		if (player.y <= 0 || player.y >= 720 || player.x <= 0 || player.x >= 1280) { //checking if player has left the canvas, then kills them
			game.run = false;
		}
		if (player.display === false) {
			document.getElementById("playerImage").style.display = 'none';
		} else { document.getElementById("playerImage").style.display = 'inherit';}
		
	}
	else { //displays message when game ends
		console.log("you lose");
		document.getElementById("choose").style.fontSize = '50px';
		document.getElementById("choose").innerHTML = "you lose reload to not be lose";
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
	 if(kc === 16) {player.speed = player.runningSpeed;}
	 if(kc === 18) {player.speed = player.walkingSpeed;}
 };

window.onkeyup = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) {Keys.left = false;}
     if(kc === 38) {Keys.up = false;}
     if(kc === 39) {Keys.right = false;}
     if(kc === 40) {Keys.down = false;}
	 if(kc === 16) {player.speed = player.movementSpeed;}
	 if(kc === 18) {player.speed = player.movementSpeed;}
};

function checkKey(){
	if (player.allowMove === true) {
		if(Keys.up){
			player.y -= player.speed;
		}

		if(Keys.down){
			player.y += player.speed;
		}

		if(Keys.left) {
			player.x -= player.speed;
		}

		if(Keys.right){
			player.x += player.speed;
		}
	}
	
}

function checkInteract(x1,y1,x2,y2,w1,h1,w2,h2){
	if (x1 < x2+w2 && x1+w1 > x2-w2 && y1 < y2+h2 && y1+h1 > y2-h2) {
		return true;
	}
}


//moveAnimate((boss.x+250),(boss.y+200),(tempx),(tempy),'kitten',25,25);
var pos = 0;
var maxpos = 200;
function moveAnimate(x1,y1,x2,y2,elem,xoff,yoff,intID) {
	if (pos === maxpos) {
		document.getElementById(elem).style = 'position: absolute;display: none;';
		pos = 0;
		clearInterval(intID);
	} else {
		pos++;
		document.getElementById(elem).style = 'position: absolute;display: inherit;left: '+(Math.floor(x1+(pos*((x2-x1)*1.0/maxpos)))-xoff)+'px;top: '+(Math.floor(y1+(pos*((y2-y1)*1.0/maxpos)))-yoff)+'px;';//calculates distance to change per tick lol what a great explanation
	}
}


//games

function china() {
	document.getElementById("choose").innerHTML = '';
	
}