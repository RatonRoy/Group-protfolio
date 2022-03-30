// select the navLinks 
const navLinks = document.getElementById('nav-links');
document.getElementById('nav-toggle').addEventListener('click', function () {
	// show-links is a class that define in the css files there remains the nav-links height without nav header div 
	navLinks.classList.toggle("show-links");
})
// for dynamic date 
document.getElementById('date').innerHTML = new Date().getFullYear();
// position fixed navbar 
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
	if (window.pageYOffset > 66) {
		navBar.classList.add('fixed');
	}
	else {
		navBar.classList.remove('fixed');
	}
})
/* *************** smooth scroll ************** */
// select all scroll links 
const scrollLinks = document.querySelectorAll('.scroll-link');
// for selecting every link use forEach array methods 
scrollLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		// prevent the default behavior of the browser such that the web page don't reload when click the link item.
		e.preventDefault();
		// show-links is a class remove when click every nav-link in the mobile and tablet design.
		navLinks.classList.remove("show-links"); 
		// get the href attribute value when click the each link and for removing the # character  use the slice(1) method 
		const id = e.target.getAttribute('href').slice(1);
		// seclect the target element use this 
		const idElement = document.getElementById(id);
		// position correctly
		// offsetTop is the distance top to the element which you select. offsetLeft offsetBottom offsetRight are others properties 
		
		let position;
		if (navBar.classList.contains('fixed')) {
			//  here 66 is the fixed navbar height 
			position = idElement.offsetTop - 66;
		 }
		else {
			// here 132 is the height of the normal navbar with fixed navbar height 
			position = idElement.offsetTop - 132;
		}
		// for responsive design js code manner 
		if (window.innerWidth < 992) {
			if (navBar.classList.contains('fixed')) {
				position = idElement.offsetTop - 66;
			}
			else {
				position = idElement.offsetTop - 191;
			}
		}
		window.scrollTo({
			left: 0,
			top: position,
			behavior: "smooth"
		});

	})
	

})
/* *************** end of the smooth scroll ************** */