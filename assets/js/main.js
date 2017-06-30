$(document).ready(function() {
	$('#fullpage').fullpage({

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '0em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});

var container = document.querySelector('#fullpage');
var chapters_btn = document.querySelector('.chapters');
// var chapters = document.querySelector('.menu-pop-up');

/*chapters_btn.addEventListener('click', function(e) {
	chapters.style.opacity = 1;
});*/

var stars = document.querySelectorAll('.star');

var slides = document.querySelectorAll('.section');
// var bars = document.querySelectorAll('.bar');
// var timeline_items = document.querySelectorAll('.timeline-items');

for(var i = 0; i < stars.length; i++)
{
	stars[i].addEventListener('click', function(e)
	{
		console.log(e.target.id);
		container.style.transform = 'translateY(-' + e.target.id * 100 + '%)';
		cleanTimeline()
		cleanActive()
		slides[e.target.id].classList.add('active')
		slides[e.target.id].classList.add('fp-completely')
		this.style.boxShadow = '0 0 35px 21px rgba(255, 56, 56, 0.5)'
		// this.style.width = '20px'
		// this.style.height = '20px'
		// this.style.transform = 'translateY(100%)'

		/*if(parseInt(e.target.id)-1 >= 0)
		{
			timeline_items[parseInt(e.target.id)-1].style.transformOrigin = '0% 0%'
			timeline_items[parseInt(e.target.id)-1].style.transform = 'rotate(10deg)'
		}
		if(parseInt(e.target.id)+1 < timeline_items.length)
		{
			timeline_items[parseInt(e.target.id)+1].style.transformOrigin = '100% 100%'
			timeline_items[parseInt(e.target.id)+1].style.transform = 'rotate(-10deg)'
		}*/
	});
}


document.addEventListener('wheel', function(e) {
	for(var i = 0; i < slides.length; i++)
	{
		if(slides[i].classList.contains('active')){
			cleanTimeline()
			var index = slides[i].getAttribute('id')


			stars[i].style.boxShadow = '0 0 35px 21px rgba(255, 56, 56, 0.5)'

			/*if(parseInt(index*2)-1 >= 0)
			{
				timeline_items[parseInt(index*2)-1].style.transformOrigin = '0% 0%'
				timeline_items[parseInt(index*2)-1].style.transform = 'rotate(10deg)'
			}
			if(parseInt(index*2)+1 < timeline_items.length)
			{
				timeline_items[parseInt(index*2)+1].style.transformOrigin = '100% 100%'
				timeline_items[parseInt(index*2)+1].style.transform = 'rotate(-10deg)'
			}*/
		}
	}
});

function cleanTimeline()
{
	for(var i = 0; i < stars.length; i++)
	{
		stars[i].style.boxShadow = '0 0 4px 3px rgba(145, 145, 145, 0.5), 0 0 20px 7px rgba(255, 255, 255, 0.5)'
	}
	/*for(var i = 0; i < bars.length; i++)
	{
		bars[i].style.transform = 'rotate(0deg)'
	}*/
}

function cleanActive()
{
	for(var i = 0; i < slides.length; i++)
	{
		if(slides[i].classList.contains('active'))
		{
			slides[i].classList.remove('active')
			slides[i].classList.remove('fp-completely')
		}
	}

}

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

