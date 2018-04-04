let $header = $("header");
let $navItem = $header.find(".nav-item");
let $navbar = $header.find(".navbar-nav");
let $navbarNav = $header.find("#navbarNav");
let $body = $("body");
let $homeButton = $body.find("#home-button");
let $mobileButton = $header.find(".navbar-toggler");
let mobileNav = false;
let $overlay = $("#overlay");
let overlay = false;
let $dropdownButton = $header.find(".dropdown-home");
let $dropdownMenu = $dropdownButton.find(".dropdown-menu1");

$navItem.splice( $.inArray($navItem[5], $navItem) ,1 );

 

// Scroll


function scroll(){
	
	var ypos = window.pageYOffset;
	
	// Navbar scroll animation 

	if( ypos > 100 ) {		
		$header.addClass("navbar-transition");
	}	
	else {		
		$header.removeClass("navbar-transition")
	}

	// HOME BUTTON 

	if( ypos > 1000) {
		$homeButton.fadeIn(500);
	}
	else {
		$homeButton.fadeOut(500);
	}
}
scroll();
window.addEventListener("scroll", scroll);

//	Mobile navigation 

function navAnimation(){
	
	if( $body.width() < 992 ) {
		$navItem.off();
		smoothScroll();
		$navItem.click( ()=> {
			$mobileButton.click();
		});
		$dropdownButton.off();
		$dropdownButton.click(dropdownMenuAnimationClick);
		$body.append($navbar);
		$navbar.addClass("mobile-nav");

	}

	else {
		$navItem.off();
		smoothScroll();
		$dropdownMenu.css({"display": "none"});
		$dropdownButton.off();
		$dropdownButton.hover(dropdownMenuAnimationHover);
		mobileNav = false;
		$navbar.removeClass("mobile-nav");
		$navbar.removeClass("mobile-nav-animation-in");
		$navbar.removeClass("mobile-nav-animation-out");
		$overlay.removeClass("overlay");
		$navbarNav.append($navbar);

	}
}

navAnimation();
$(window).resize(navAnimation);

// Mobile button - Link buttons event

$mobileButton.on("click", navigationClickMobileButtonAnimations);

 
function navigationClickMobileButtonAnimations() {
	mobileNav = !mobileNav;
			
	if(mobileNav) {
		
		$mobileButton.addClass("navbar-toggler-animation");
		$body.css({"overflow" : "hidden"});
		$navbar.removeClass("mobile-nav-animation-out");
		$navbar.addClass("mobile-nav-animation-in");
		$overlay.addClass("overlay");

	}
	else {

		$mobileButton.removeClass("navbar-toggler-animation");
		$body.css({"overflow" : "scroll"});
		$overlay.removeClass("overlay");
		$navbar.removeClass("mobile-nav-animation-in");
		$navbar.addClass("mobile-nav-animation-out");	
	}
}


// Dropdown animation

function dropdownMenuAnimationHover() {
		$(this).off();
		$dropdownMenu.slideToggle(250).css({opacity: 1})
		.promise().then( ()=> $(this).hover(dropdownMenuAnimationHover) );	
}



function dropdownMenuAnimationClick(){
	$(this).off();
	$dropdownMenu.slideToggle(250).css({opacity: 1})
		.promise().then( ()=> $(this).click(dropdownMenuAnimationClick) );	
}	

$overlay.click( ()=> {
					$mobileButton.click();
				});		

// Facts counter

$('.counter').counterUp({
    delay: 14,
    time: 1000
});

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.389822, lng: 26.093287},
          zoom: 17
        });
      }

// Smooth scroll

var $navLink = $navItem.find(".nav-link");
$navLink.click(function(e){
	e.preventDefault();
});
var $navLinkDropdown = $dropdownButton.find(".nav-link");
$navLinkDropdown.click(function(e){
	e.preventDefault();
});

function smoothScroll() {
	$navItem.click(function(){
		$("body, html").animate({
			scrollTop: $($(this).children().attr("href")).offset().top
		}, 800);
	});
	$homeButton.click(function(){
		$("body, html").animate({
			scrollTop: 0
		}, 800);
	});
}

smoothScroll();


