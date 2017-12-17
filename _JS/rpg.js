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

var keyRun;

function start() {
	"use strict";
	player.name = document.getElementById("nameField").value;
	//if (player.name === "") { //doesnt allow blank names
		//alert("invalid name");
		//return;
	//}
	game.run = true;
	document.getElementById("choose").innerHTML = ''; //clears the staring screen
	//document.getElementById("content").innerHTML += '<div id="playerImage" style="position: absolute;left:'+(player.x-25)+'px;top:+'+(player.y-25)+'px;"><img id="player" src="../_images/player.png"></div>';
	if (player.name === "God" || player.name === "god" || player.name === "gaben" || player.name === "Gaben") { //secret dev mode/easter egg
		//document.getElementById("player").setAttribute('src', '../_images/God.png');
		player.godMode = true;
	}
	
	document.getElementById('choose').innerHTML += '<button style="position:absolute;left:120px;top:50px" onclick="china()">China</button><button style="position:absolute;left:540px;top:50px" onclick="middle()">Middle Ages</button><button style="position:absolute;left:960px;top:50px" onclick="americas()">Americas</button';
	keyRun = setInterval(checkKey, 10);//runs frame every 0.01 second
}

/*function frame() {
	if (game.run === true) {
		checkKey();
		document.getElementById("playerImage").style = 'position: absolute;left:'+(player.x-25)+'px;top:+'+(player.y-25)+'px;';
		if (player.y <= 0 || player.y >= 720 || player.x <= 0 || player.x >= 1280) { //checking if player has left the canvas, then kills them
			game.run = false;
		}
		if (player.display === false) {
			document.getElementById("playerImage").style.display = 'none';
			player.allowMove = false;
		} else { document.getElementById("playerImage").style.display = 'inherit';player.allowMove = true;}
	}
	else { //displays message when game ends
		console.log("you lose");
		document.getElementById("choose").style.fontSize = '50px';
		document.getElementById("choose").innerHTML = "you lose reload to not be lose";
		clearInterval(frameRun);
	}
}*/

var Keys = {
    up: false,
    down: false,
    left: false,
    right: false,
	shift: false,
	alt: false,
};

window.onkeydown = function(e){
     var kc = e.keyCode;
     //e.preventDefault();

     if(kc === 37) {Keys.left = true;}
     if(kc === 38) {Keys.up = true;}
     if(kc === 39) {Keys.right = true;}
     if(kc === 40) {Keys.down = true;}
	 if(kc === 16) {Keys.shift = true;}
	 if(kc === 18) {Keys.alt = true;}
 };

window.onkeyup = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) {Keys.left = false;}
     if(kc === 38) {Keys.up = false;}
     if(kc === 39) {Keys.right = false;}
     if(kc === 40) {Keys.down = false;}
	 if(kc === 16) {Keys.shift = false;}
	 if(kc === 18) {Keys.alt = false;}
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

/*function checkInteract(x1,y1,x2,y2,w1,h1,w2,h2){
	if (x1 < x2+w2 && x1+w1 > x2-w2 && y1 < y2+h2 && y1+h1 > y2-h2) {
		return true;
	}
}*/

function checkInteract(elemID1,elemID2){
	"use strict";
	var elem1 = document.getElementById(elemID1);
	var elem2 = document.getElementById(elemID2);
	var x1 = parseInt(elem1.style.left);
	var x2 = parseInt(elem2.style.left);
	var y1 = parseInt(elem1.style.top);
	var y2 = parseInt(elem2.style.top);
	var w1 = parseInt(elem1.clientWidth);
	var w2 = parseInt(elem2.clientWidth);
	var h1 = parseInt(elem1.clientHeight);
	var h2 = parseInt(elem2.clientHeight);
	//console.log(x1+','+x2+','+y1+','+y2+','+w1+','+w2+','+h1+','+h2)
	if (x1 < x2+w2 && x1+w1 > x2-w2 && y1 < y2+h2 && y1+h1 > y2-h2) {
		return true;
	}
}

//moveAnimate((boss.x+250),(boss.y+200),(tempx),(tempy),'kitten',25,25);
var pos = 0;
function moveAnimate(x2,y2,elem,intID,ticks) {
	"use strict";
	var x1 = parseInt(elem.style.left);
	var y1 = parseInt(elem.style.top);
	var xoff = parseInt(elem.clientWidth)/2;
	var yoff = parseInt(elem.clientHeight)/2;
	if (pos === ticks) {
		document.getElementById(elem).style = 'position: absolute;display: none;';
		pos = 0;
		clearInterval(intID);
	} else {
		pos++;
		document.getElementById(elem).style = 'position: absolute;display: inherit;left: '+(Math.floor(x1+(pos*((x2-x1)*1.0/ticks)))-xoff)+'px;top: '+(Math.floor(y1+(pos*((y2-y1)*1.0/ticks)))-yoff)+'px;';//calculates distance to change per tick lol what a great explanation
	}
}


//games

//chinas
function china() {

}
//middle ages
var mousedown;
function middle() {
	"use strict";
	document.body.style.backgroundImage = "url('../_images/chapel.jpg')";
	document.getElementById("content").innerHTML = '<p style="position:absolute;top:500px;left:25px;width:225px;height:100px;font-size:20px;font-family: Arial;">Renaissance Painter Simulator - Be Your Own Artist With Leonardo Da Vinci!</p><img src="../_images/player.png" style="position:absolute;" id="brush" /><div id="tools" style="position:absolute;left:20px;"><div style="width:20px;height:20px;background-color:green;" onclick="changeColor(1)"></div><div style="width:20px;height:20px;background-color:red;" onclick="changeColor(2)"></div><div style="width:20px;height:20px;background-color:blue;" onclick="changeColor(3)"></div><div style="width:20px;height:20px;background-color:black;" onclick="changeColor(4)"></div><div style="width:19px;height:19px;background-color:white;border:1px solid black;" onclick="changeColor(5)"></div><br /><button onclick="erase()">Clear Canvas</button></div><img src="../_images/leonardo.png" style="position:absolute;top:320px;left:50px" /><canvas onmousemove="getCoords(event)" onmousedown="mousedown=true;flag=true;" onmouseup="mousedown=false" onmouseout="mousedown=false;xold = x; yold = y;" id="canvas" width="1000px" height="720px" style="position:absolute;left:280px;"></canvas>';
	mousedown = false;
}

var x,y,xold,yold,color='black',flag,lineWidth;
function getCoords(event) {
	"use strict";
	document.getElementById("brush").style = 'left:'+(event.offsetX+280)+'px;top:'+event.offsetY+'px;position:absolute;';
	console.log(event.offsetX);
	if (flag === true) {
		xold = event.offsetX;
		yold = event.offsetY;
		flag = false;
	}
	if (mousedown === true) {
		if (event.offsetX || event.offsetX === 0) {
			x = event.offsetX;
			y = event.offsetY;
		}
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.strokeStyle=color;
		ctx.beginPath();
		ctx.lineWidth = lineWidth;
        ctx.moveTo(xold, yold);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
		xold = x; yold = y;
	}
}
function changeColor(c){
	"use strict";
	switch (c) {
		case 1:
			color = 'green';
			lineWidth = 2;
			break;
		case 2:
			color = 'red';
			lineWidth = 2;
			break;
		case 3:
			color = 'blue';
			lineWidth = 2;
			break;
		case 4:
			color = 'black';
			lineWidth = 2;
			break;
		case 5: 
			color = 'white';
			lineWidth = 25;
			break;
	}
}
 function erase() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var erasePrompt = confirm("Want to clear");
    if (erasePrompt) {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    	document.getElementById("canvasimg").style.display = "none";
	}
}

//americas
function americas() {
	
}
