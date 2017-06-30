
var w = window.innerWidth
var h = window.innerHeight
var xm = w / 2
var ym = h / 2
var slide_1 = false

var text = document.querySelector('.intro-2 > .text');

setTimeout(function()
{
	slide_1 = true
}, 8500)

window.addEventListener('mousemove', function(e) 
{
	var x = e.clientX
	var y = e.clientY
	if(slide_1)
		makeRatio(x, y)

});

function makeRatio(x, y)
{
	var xr = x * 2 / w - 1
	var yr = y * 2 / h - 1
	var or = y * 0.5 / h
	parallax(yr, xr, or)
}

var bg = document.querySelector('.bg');

function parallax(yr, xr, or)
{
	var invert_xr = xr - (xr * 2)
	var invert_yr = yr - (yr * 2)
	var opacity = 1 - or
	opacity.toString()

	bg.style.transform = 'translate(' + invert_xr + '%,' + invert_yr + '%)'
	bg.style.opacity = opacity
}

var audio = document.querySelector('.start-audio');
var videoOne = document.querySelector('.start-video');
var videoTwo = document.querySelector('.start-video-2');
var videoThree = document.querySelector('.start-video-3');

window.onload = function(){
	videoOne.play()
	audio.play()
}

setTimeout(function(){
	videoTwo.play()
}, 9000)

setTimeout(function(){
	videoThree.play()
}, 19000)


var intro = document.querySelector('.full');
var landing = document.querySelector('.landing');

var skip = document.querySelector('.skip');

skip.addEventListener('click', function(e) {
	intro.style.opacity = 'none'
	landing.style.display = 'block'
});
setTimeout(function(){
	intro.style.display = 'none'
	landing.style.display = 'block'
}, 47000)