//main navigation

$("document").ready(function() {  
  $('.toggle-btn').click(function(){
    $('body').addClass("canvas");
  });

$('.overlay, .close-btn' ).click(function(){
  $('body').removeClass("canvas")  
});


var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['Home', 'AboutUs','Services','OurTeam','ContactUS'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Home', 'About Us','Services','Our Team','Contact US'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 1000,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: true,
	loopTop: true,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: true,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: true,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
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
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});


$('.testimonial-slider').slick({
	dots: false,
	infinite: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4,
	pauseOnHover: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 1025,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 481,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

});




