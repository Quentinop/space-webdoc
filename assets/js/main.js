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
		paddingTop: '3em',
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
var chapters = document.querySelector('.menu-pop-up');

chapters_btn.addEventListener('click', function(e) {
	chapters.style.opacity = 1;
});

var stars = document.querySelectorAll('.star');
var bars = document.querySelectorAll('.bar');
var timeline_items = document.querySelectorAll('.timeline-items');

for(var i = 0; i < stars.length; i++)
{
	stars[i].addEventListener('click', function(e) 
	{
		container.style.transform = 'translateY(-' + e.target.id / 2 * 100 + '%)';
		cleanTimeline()
		cleanActive()
		slides[e.target.id/2].classList.add('active')
		slides[e.target.id/2].classList.add('fp-completely')
		this.style.width = '20px'
		this.style.height = '20px'
		this.style.transform = 'translateY(100%)'

		if(parseInt(e.target.id)-1 >= 0)
		{
			timeline_items[parseInt(e.target.id)-1].style.transformOrigin = '0% 0%'
			timeline_items[parseInt(e.target.id)-1].style.transform = 'rotate(10deg)'
		}
		if(parseInt(e.target.id)+1 < timeline_items.length)
		{
			timeline_items[parseInt(e.target.id)+1].style.transformOrigin = '100% 100%'
			timeline_items[parseInt(e.target.id)+1].style.transform = 'rotate(-10deg)'
		}
	});
}

var slides = document.querySelectorAll('.section');
initTimeline()

function initTimeline()
{
	stars[0].style.width = '20px'
	stars[0].style.height = '20px'
	stars[0].style.transform = 'translateY(100%)'

	bars[0].style.transformOrigin = '100% 100%'
	bars[0].style.transform = 'rotate(-10deg)'
}

document.addEventListener('wheel', function(e) {
	for(var i = 0; i < slides.length; i++)
	{
		if(slides[i].classList.contains('active')){
			cleanTimeline()
			var index = slides[i].getAttribute('id')
			
			console.log(index);
			timeline_items[index*2].style.width = '20px'
			timeline_items[index*2].style.height = '20px'
			timeline_items[index*2].style.transform = 'translateY(100%)'

			if(parseInt(index*2)-1 >= 0)
			{
				timeline_items[parseInt(index*2)-1].style.transformOrigin = '0% 0%'
				timeline_items[parseInt(index*2)-1].style.transform = 'rotate(10deg)'
			}
			if(parseInt(index*2)+1 < timeline_items.length)
			{
				timeline_items[parseInt(index*2)+1].style.transformOrigin = '100% 100%'
				timeline_items[parseInt(index*2)+1].style.transform = 'rotate(-10deg)'
			}
		}
	}
});

function cleanTimeline()
{
	for(var i = 0; i < stars.length; i++)
	{
		stars[i].style.width = '10px'
		stars[i].style.height = '10px'
		stars[i].style.transform = 'translateY(50%)'
	}
	for(var i = 0; i < bars.length; i++)
	{
		bars[i].style.transform = 'rotate(0deg)'
	}
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
