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
	space: false,
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
	 if(kc === 32) {Keys.space = true;}
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
	 if(kc === 32) {Keys.space = false;}
};

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
	//console.log(x1+','+x2+','+y1+','+y2+','+w1+','+w2+','+h1+','+h2);
	if (x1 < x2+w2 && x1+w1 > x2 && y1 < y2+h2 && y1+h1 > y2) {
		return true;
	}
}

//moveAnimate((boss.x+250),(boss.y+200),(tempx),(tempy),'kitten',25,25);
var pos = 0;
function moveAnimate(x2,y2,elem,intID,ticks) {
	"use strict";
	var eleme = document.getElementById(elem);
	var x1 = parseInt(eleme.style.left);
	var y1 = parseInt(eleme.style.top);
	var xoff = parseInt(eleme.clientWidth)/2;
	var yoff = parseInt(eleme.clientHeight)/2;
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
var chinaInt;
function china() {
	"use strict";
	document.body.style.backgroundImage = "url('../_images/greatwall.jpg')";
	document.getElementById("content").innerHTML = '<div id="towerImage" style="position:absolute;top:150px;left:50px"><img id="tower" src="../_images/tower.png" /><progress id="towerBar" value="100" max="100"></progress></div>';
	document.getElementById("content").innerHTML += '<img id="mongol1" onclick="mongolClick(1)" style="position:absolute;left:0;top:0;display:none;" src="../_images/warrior.png" />';
	document.getElementById("content").innerHTML += '<img id="mongol2" onclick="mongolClick(2)" style="position:absolute;left:0;top:0;display:none;" src="../_images/warrior.png" />';
	document.getElementById("content").innerHTML += '<img id="mongol3" onclick="mongolClick(3)" style="position:absolute;left:0;top:0;display:none;" src="../_images/warrior.png" />';
	document.getElementById("content").innerHTML += '<img id="mongol4" onclick="mongolClick(4)" style="position:absolute;left:0;top:0;display:none;" src="../_images/warrior.png" />';
	document.getElementById("content").innerHTML += '<img id="mongol5" onclick="mongolClick(5)" style="position:absolute;left:0;top:0;display:none;" src="../_images/warrior.png" />';
	chinaInt = setInterval(chinasFrame, 10);
}

var mongol = { //im lazy okay
	xoff:50,
	yoff:47.5,
	x1:1100,
	y1:480,
	dis1:false,
	delay1:100,
	temp1:0,
	hp1:1,
	x2:1100,
	y2:360,
	dis2:false,
	delay2:50,
	temp2:0,
	hp2:1,
	x3:1100,
	y3:240,
	dis3:false,
	delay3:200,
	temp3:0,
	hp3:1,
	x4:1100,
	y4:120,
	dis4:false,
	delay4:10,
	temp4:0,
	hp4:1,
	x5:1100,
	y5:640,
	dis5:false,
	delay5:100,
	temp5:0,
	hp5:1,
};

var tower = {
	hp: 2000,
	hpmax:2000,
	count:0,
	run:true,
	end:'',
};

function chinasFrame() {
	"use strict";
	if (tower.run === true) {
		tower.count += 1;
		console.log(tower.count);
		document.getElementById("towerBar").value = ((tower.hp/tower.hpmax)*100);
		document.getElementById("mongol1").style = 'position:absolute;left:'+(mongol.x1-mongol.xoff)+'px;top:'+(mongol.y1-mongol.yoff)+'px;';
		document.getElementById("mongol2").style = 'position:absolute;left:'+(mongol.x2-mongol.xoff)+'px;top:'+(mongol.y2-mongol.yoff)+'px;';
		document.getElementById("mongol3").style = 'position:absolute;left:'+(mongol.x3-mongol.xoff)+'px;top:'+(mongol.y3-mongol.yoff)+'px;';
		document.getElementById("mongol4").style = 'position:absolute;left:'+(mongol.x4-mongol.xoff)+'px;top:'+(mongol.y4-mongol.yoff)+'px;';
		document.getElementById("mongol5").style = 'position:absolute;left:'+(mongol.x5-mongol.xoff)+'px;top:'+(mongol.y5-mongol.yoff)+'px;';
		if (mongol.dis1 === false) { 
			document.getElementById("mongol1").style.display = 'none'; 
			if (tower.count >= mongol.temp1+mongol.delay1) { mongol.dis1 = true;}
		} else {document.getElementById("mongol1").style.display = 'inherit';}
		if (mongol.dis2 === false) { 
			document.getElementById("mongol2").style.display = 'none'; 
			if (tower.count >= mongol.temp2+mongol.delay2) { mongol.dis2 = true;}
		} else {document.getElementById("mongol2").style.display = 'inherit';}
		if (mongol.dis3 === false) { 
			document.getElementById("mongol3").style.display = 'none'; 
			if (tower.count >= mongol.temp3+mongol.delay3) { mongol.dis3 = true;}
		} else {document.getElementById("mongol3").style.display = 'inherit';}
		if (mongol.dis4 === false) { 
			document.getElementById("mongol4").style.display = 'none'; 
			if (tower.count >= mongol.temp4+mongol.delay4) { mongol.dis4 = true;}
		} else {document.getElementById("mongol4").style.display = 'inherit';}
		if (mongol.dis5 === false) { 
			document.getElementById("mongol5").style.display = 'none'; 
			if (tower.count >= mongol.temp5+mongol.delay5) { mongol.dis5 = true;}
		} else {document.getElementById("mongol5").style.display = 'inherit';}
		
		if (mongol.x1 <= 320) { mongol.x1 = 320; tower.hp -= 1;} else if (mongol.dis1) { mongol.x1 -= 3;}
		if (mongol.x2 <= 320) { mongol.x2 = 320; tower.hp -= 1;} else if (mongol.dis2) { mongol.x2 -= 2;}
		if (mongol.x3 <= 320) { mongol.x3 = 320; tower.hp -= 1;} else if (mongol.dis3) { mongol.x3 -= 4;}
		if (mongol.x4 <= 320) { mongol.x4 = 320; tower.hp -= 1;} else if (mongol.dis4) { mongol.x4 -= 1;}
		if (mongol.x5 <= 320) { mongol.x5 = 320; tower.hp -= 1;} else if (mongol.dis5) { mongol.x5 -= 2;}
		
		if (tower.hp <= 0) { tower.run = false; tower.end='you were slaughtered by mongols<br />reload to go back to the main menu';}
		if (tower.count >= 2000) { tower.run = false; tower.end='you defended against the mongols long enough for reinforcements to arrive<br />reload to go back to the main menu';}
	}
	else {
		clearInterval(chinaInt);
		document.getElementById('content').innerHTML += '<p style="position:absolute;top:50px;left:490px;width:300px;height:100px;font-size:20px;font-family: Arial;z-index:9999;">'+tower.end+'</p>';
	}
}

function mongolClick(num){
	"use strict";
	switch (num) {
		case 1:
			mongol.hp1 -= 1;
			if (mongol.hp1 <= 0) { mongol.hp1 = 3; mongol.dis1 = false; mongol.temp1 = tower.count;mongol.x1 = 1100;mongol.y1 = Math.floor(Math.random() * 550) + 100;}
			break;
		case 2:
			mongol.hp2 -= 1;
			if (mongol.hp2 <= 0) { mongol.hp2 = 3; mongol.dis2 = false; mongol.temp2 = tower.count;mongol.x2 = 1100;mongol.y2 = Math.floor(Math.random() * 550) + 100;}
			break;
		case 3:
			mongol.hp3 -= 1;
			if (mongol.hp3 <= 0) { mongol.hp3 = 3; mongol.dis3 = false; mongol.temp3 = tower.count;mongol.x3 = 1100;mongol.y3 = Math.floor(Math.random() * 550) + 100;}
			break;
		case 4:
			mongol.hp4 -= 1;
			if (mongol.hp4 <= 0) { mongol.hp4 = 3; mongol.dis4 = false; mongol.temp4 = tower.count;mongol.x4 = 1100;mongol.y4 = Math.floor(Math.random() * 550) + 100;}
			break;
		case 5:
			mongol.hp5 -= 1;
			if (mongol.hp5 <= 0) { mongol.hp5 = 3; mongol.dis5 = false; mongol.temp5 = tower.count;mongol.x5 = 1100;mongol.y5 = Math.floor(Math.random() * 550) + 100;}
			break;
	}
}






//middle ages
var mousedown;
function middle() {
	"use strict";
	document.body.style.backgroundImage = "url('../_images/chapel.jpg')";
	document.getElementById("content").innerHTML = '<p style="position:absolute;top:500px;left:25px;width:225px;height:100px;font-size:20px;font-family: Arial;">Renaissance Painter Simulator - Be Your Own Artist With Leonardo Da Vinci!<br />reload to go back to the main menu</p><img src="../_images/brush.png" style="position:absolute;" id="brush" /><div id="tools" style="position:absolute;left:20px;"><div style="width:20px;height:20px;background-color:green;" onclick="changeColor(1)"></div><div style="width:20px;height:20px;background-color:red;" onclick="changeColor(2)"></div><div style="width:20px;height:20px;background-color:blue;" onclick="changeColor(3)"></div><div style="width:20px;height:20px;background-color:black;" onclick="changeColor(4)"></div><img src="../_images/eraser.png" style="float:left;" onclick="changeColor(5)" /><br /><br /><br /><button onclick="erase()">Clear Canvas</button></div><img src="../_images/leonardo.png" style="position:absolute;top:320px;left:50px" /><canvas onmousemove="getCoords(event)" onmousedown="mousedown=true;flag=true;" onmouseup="mousedown=false" onmouseout="mousedown=false;xold = x; yold = y;" id="canvas" width="1000px" height="720px" style="position:absolute;left:280px;"></canvas>';
	mousedown = false;
}

var x,y,xold,yold,color='black',flag,lineWidth=2;
function getCoords(event) {
	"use strict";
	document.getElementById("brush").style = 'left:'+(event.offsetX+280)+'px;top:'+event.offsetY+'px;position:absolute;';
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
	"use strict";
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
	"use strict";
	document.body.style.backgroundImage = "url('../_images/ice.jpg')";
	//document.getElementById("content").style.backgroundImage = "url('../_images/watertemp.gif')";
	document.getElementById("content").innerHTML = '<p style="position:absolute;top:50px;left:490px;width:300px;height:100px;font-size:20px;font-family: Arial;">Pick a ship to transport your workers to the Americas</p><div style="position:absolute;top:150px;left: 150px;"><img src="../_images/ship1.png" onclick="ship(1)" /></div><div style="position:absolute;left: 950px;top:150px"><img src="../_images/ship2.png" onclick="ship(2)" /></div><div style="position:absolute;left: 150px;top:400px"><img src="../_images/ship3.png" onclick="ship(3)" /></div><div style="position:absolute;left: 950px;top:400px"><img src="../_images/ship4.png" onclick="ship(4)" /></div>';
}

var shipStats = {
	type: 0,
	speed: 0,
	hp: 0,
	hpmax: 0,
	attack: false,
	attackPower: 0,
	attackDelay: 0,
	x: 100,
	y: 10,
	width: 180,
	height: 170,
	run: true,
	deathMessage: '',
	timer: 0,
};
var shipInt;
function ship(num) {
	"use strict";
	shipStats.type = num;
	switch (num) {
		case 1:
			shipStats.speed = 2;
			shipStats.hp = 400;
			shipStats.attack = true;
			shipStats.attackPower = 20;
			shipStats.attackDelay = 300;
			break;
		case 2:
			shipStats.speed = 4;
			shipStats.hp = 100;
			shipStats.attack = false;
			break;
		case 3:
			shipStats.speed = 8;
			shipStats.hp = 50;
			shipStats.attack = false;
			break;
		case 4:
			shipStats.speed = 1;
			shipStats.hp = 800;
			shipStats.attack = true;
			shipStats.attackPower = 5;
			shipStats.attackDelay = 300;
			break;
	}
	shipStats.hpmax = shipStats.hp;
	document.getElementById("content").innerHTML = '<div id="shipImage" style="position:absolute;left:'+(shipStats.x+shipStats.width/2)+'px;top:'+(shipStats.y+shipStats.height/2)+'px;" ><img src="../_images/ship'+num+'.png" /><progress id="shipBar" value="100" max="100"></progress></div>';
	document.getElementById('content').innerHTML += '<img style="display:none;left:0;top:0;" src="../_images/player.png" id="cannon" />';
	document.getElementById("content").innerHTML += '<img src="../_images/eship1.png" id="shipEnemy1" style="position:absolute;left:'+(shipEnemy1.x-190-shipEnemy1.timer)+'px;top: '+(shipEnemy1.y)+'px;display:none;"/><img src="../_images/eship2.png" id="shipEnemy2" style="position:absolute;left:'+(shipEnemy2.x-190-shipEnemy1.timer)+'px;top: '+(shipEnemy2.y)+'px;display:none;"/>';
	document.getElementById("content").style.backgroundColor = '#0064c8';
	shipInt = setInterval(americasFrame, 10);
}

function americasFrame() {
	"use strict";
	shipStats.timer += 1;
	if (shipStats.run === true) {
		if (Keys.up === true) { shipStats.y -= shipStats.speed; }
		if (Keys.down === true) { shipStats.y += shipStats.speed; }
		document.getElementById("shipImage").style = 'position:absolute;left:'+(shipStats.x-shipStats.width/2)+'px;top:'+(shipStats.y-shipStats.height/2)+'px;';
		document.getElementById("shipBar").value = ((shipStats.hp/shipStats.hpmax)*100);
		if (shipStats.y <= 0 || shipStats.y >= 720) {
			shipStats.run = false;
			shipStats.deathMessage = 'you crashed into the ice!<br />reload to go back to the main menu';
		}
		if (shipStats.hp <= 0) {
			shipStats.run = false;
			shipStats.deathMessage = 'your ship was destroyed!<br />reload to go back to the main menu';
		}
		console.log(shipStats.timer);
		if (shipStats.timer >= 1000) {
			shipStats.run = false;
			shipStats.deathMessage = 'You successfully arrived in the americas<br />reload to go back to the main menu';
		}
		/*if (shipStats.timer%shipStats.attackDelay === 0 && shipStats.attack && Keys.space && (shipEnemy1.flag === true || shipEnemy2.flag === true)) {
			document.getElementById("cannon").style = 'display:none;left:'+(shipStats.x)+'px;top:'+(shipStats.y)+'px;';
			cannonAnimate = setInterval(function(){ 
				console.log(document.getElementById("cannon").style.left);
				console.log(document.getElementById("cannon").style.top);
				moveAnimate(600,200,'cannon',cannonAnimate,200);
				checkInteract('cannon','shipEnemy1');
				checkInteract('cannon','shipEnemy2');
			}, 20);
		}*/
		if (shipStats.timer%100 === 0 && shipEnemy1.flag === false) {
			shipEnemy1.timer = 0;
			shipEnemy1.x = 1280;
			shipEnemy1.y = Math.floor(Math.random() * 550) + 1;
			shipEnemy1.flag = true;
			document.getElementById("shipEnemy1").style.display = "inherit";
			var shipEnemy1Animate = setInterval(function(){ 
				shipEnemy1.timer += 5;
				document.getElementById("shipEnemy1").style = 'position:absolute;left:'+(shipEnemy1.x-190-shipEnemy1.timer)+'px;top: '+(shipEnemy1.y)+'px;display:inherit;';
				if (checkInteract('shipImage','shipEnemy1')) { shipStats.hp -= shipEnemy1.atkPower;console.log("ship1 is doing damage"); }
				if (shipEnemy1.timer >= 1280 || shipEnemy1.hp <= 0) {
					clearInterval(shipEnemy1Animate);
					document.getElementById("shipEnemy1").style.display = 'none';
					shipEnemy1.flag = false;
				}
			}, 20);
		}
		if (shipStats.timer%100 === 0 && shipEnemy2.flag === false) {
			shipEnemy2.timer = 0;
			shipEnemy2.x = 1280;
			shipEnemy2.y = Math.floor(Math.random() * 550) + 1;
			shipEnemy2.flag = true;
			document.getElementById("shipEnemy2").style.display = "inherit";
			var shipEnemy2Animate = setInterval(function(){ 
				shipEnemy2.timer += 10;
				document.getElementById("shipEnemy2").style = 'position:absolute;left:'+(shipEnemy2.x-190-shipEnemy2.timer)+'px;top: '+(shipEnemy2.y)+'px;display:inherit;';
				if (checkInteract('shipImage','shipEnemy2')) { shipStats.hp -= shipEnemy2.atkPower;console.log("ship2 is doing damage"); }
				if (shipEnemy2.timer >= 1280 || shipEnemy2.hp <= 0) {
					clearInterval(shipEnemy2Animate);
					document.getElementById("shipEnemy2").style.display = 'none';
					shipEnemy2.flag = false;
				}
			}, 20);
		}
	}
	else {
		clearInterval(shipInt);
		document.getElementById('content').innerHTML += '<p style="position:absolute;top:50px;left:490px;width:300px;height:100px;font-size:20px;font-family: Arial;z-index:9999;">'+shipStats.deathMessage+'</p>';
	}
}

var shipEnemy1 = {
	x:1280,
	y:200,
	flag:false,
	timer:0,
	atkPower:3,
};

var shipEnemy2 = {
	x:1280,
	y:500,
	flag:false,
	timer:0,
	atkPower:1,
};





