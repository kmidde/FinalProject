//Bryce Hackel and Karthik
//
//Final Project - History RPG

var hero = { //object of the hero, gets modified by the class chosen
	type:"hero",
	name:"",
	class:"",
	maxHitpoints:500,
	hitpoints:500,
	attackPower:10,
	x:10,
	y:360,
	changeHP:changeHP,
	movementSpeed: 1,
	maxMovementSpeed:10,
	minMovementSpeed:1,
};

var game = { //game object
	run:false,
};

console.log("screen size of "+window.innerWidth+"x"+window.innerHeight);

var framerun;

function start() {
	"use strict";
	hero.name = document.getElementById("nameField").value;
	//if (hero.name === "") { //doesnt allow blank names
		//alert("invalid name");
		//return;
	//}
	hero.hitpoints = hero.maxHitpoints;
	hero.cooldown = hero.maxCooldown;
	game.run = true;
	document.getElementById("choose").innerHTML = ''; //clears the staring screen
	document.getElementById("content").innerHTML += '<div id="playerImage" style="position: absolute;left:'+(hero.x-25)+'px;top:+'+(hero.y-25)+'px;"><img id="player" src="../_images/player.png"></div>';
	if (hero.name === "God" || hero.name === "god" || hero.name === "gaben" || hero.name === "Gaben") { //secret dev mode/easter egg
		document.getElementById("player").setAttribute('src', '../_images/God.png');
		hero.maxHitpoints += 1000000;
		hero.attackPower += 1000000;
	}
	framerun = setInterval(frame, 100);//runs frame every 1/10 of a second
	setInterval(checkKey, 10);//improved movement script
}

function frame() {
	if (game.run === true) {
		if (hero.hitpoints <= 0) {
			game.run = false;
		}
	}
	else { //displays death message when game ends
		console.log("you died");
		document.getElementById("choose").style.fontSize = '50px';
		document.getElementById("choose").innerHTML = "you died reload to not be dead";
		clearInterval(framerun);
	}
}

function changeHP(change) { //displays the hearts
	var i = 0;
	this.hitpoints += change;
	if (this.hitpoints < 0) {
		this.hitpoints = 0;
	}
	document.getElementById('health').innerHTML = '';
	for (i = 0; i < this.hitpoints; i++) { //displaying living hearts
		document.getElementById(this.name+'health').innerHTML += '<img src="../_images/heart.png">';
	}
	for (i = 0; i < (this.maxHitpoints-this.hitpoints); i++) { //displaying dead hearts
		document.getElementById(this.name+'health').innerHTML += '<img src="../_images/deadHeart.png">';
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
	 if(kc === 16) {hero.movementSpeed = hero.maxMovementSpeed;}
 };

window.onkeyup = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) {Keys.left = false;}
     if(kc === 38) {Keys.up = false;}
     if(kc === 39) {Keys.right = false;}
     if(kc === 40) {Keys.down = false;}
	 if(kc === 16) {hero.movementSpeed = hero.minMovementSpeed;}
};

function checkKey(){
    if(Keys.up){
        hero.y -= hero.movementSpeed;
    }

    if(Keys.down){
        hero.y += hero.movementSpeed;
    }

    if(Keys.left) {
        hero.x -= hero.movementSpeed;
    }

    if(Keys.right){
        hero.x += hero.movementSpeed;
    }
	document.getElementById("playerImage").style = 'position: absolute;left:'+(hero.x-25)+'px;top:+'+(hero.y-25)+'px;';
}
