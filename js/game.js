// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
		function( callback ){
			return window.setTimeout(callback, 1000 / 60);
		};
})();

window.cancelRequestAnimFrame = ( function() {
	return  window.cancelAnimationFrame          ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame    ||
			window.oCancelRequestAnimationFrame      ||
			window.msCancelRequestAnimationFrame     ||
		clearTimeout;
} )();

// Do not change any code above

// console.log('Holla');

// Step 01 .. faye .. create game canvas and track mouse position

var gameCanvas = document.getElementById("canvas");
// Store HTML5 canvas tag into js variabls

var ctx = gameCanvas.getContext("2d"); // Create context 2D
var W = window.innerWidth;
var H = window.innerHeight;

var mouseObj = {};

gameCanvas.width = W;
gameCanvas.height = H;

function paintCanvas() {
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, W, H);
}

paintCanvas();

function trackPosition(evt) {
	mouseObj.x = evt.pageX;
	mouseObj.y = evt.pageY;
	console.log("cursor x is : " + mouseObj.x + " cursor y is : " + mouseObj.y);
}

gameCanvas.addEventListener("mousemove", trackPosition, true);










