let $header = $("header");
let $navbar = $header.find(".navbar-nav");
let $navbarNav = $header.find("#navbarNav");
let $body = $("body");
let $mobileButton = $header.find(".navbar-toggler");
let mobileNav = false;
let $overlay = $("#overlay");
let overlay = false;
let $dropdownButton = $header.find(".dropdown-home");
let $dropdownMenu = $dropdownButton.find(".dropdown-menu1");
let $facts = $("#facts");
let $factsItems = $(".stats-item");
let $factsItemsNumber = $factsItems.find(".stats-item-number");
let factsItemsNumber = [true, true, true, true];
let stats = [76, 153, 290, 81];
let cnt = [];
console.log($factsItemsNumber[1].innerHTML);
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

	// Facts scroll animation
/*	for( var i = 0; i < $factsItems.length; i++) {

		if( ypos > $factsItems.eq(i).position().top - 790 ) {
			
			if( factsItemsNumber[i] ) {
				factsItemsNumber[i] = !factsItemsNumber[i];
				let j = i;
				cnt[j] = 0;
				setInterval( function(){
					if(cnt[j] <= stats[j]) {
						cnt[j]++;
						$factsItemsNumber[j].innerHTML = cnt[j];
					}
				}, 25);
			}

		} 
	}
	
*/	
}

window.addEventListener("scroll", scroll);

/*function factsAnimation() {
	
	setInterval( () => {
		$factsItems.
	}, 1000);
 }
*/
//	Mobile navigation 


function navAnimation(){
	
	if( $body.width() < 992 ) {

		$body.append($navbar);
		$navbar.addClass("mobile-nav");

	}

	else {
		
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

// Mobile button event

$mobileButton.on("click", function(){
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

		});

$dropdownButton.click( ()=>{
					$dropdownMenu.toggle(300);
				});		

$overlay.click( ()=> {
					$mobileButton.click();
				});		

