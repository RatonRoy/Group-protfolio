// select the navLinks 
const navLinks = document.getElementById('nav-links');
document.getElementById('nav-toggle').addEventListener('click', function () {
	navLinks.classList.toggle("show-links");
})
// for daynamic date 
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
		e.preventDefault();
		navLinks.classList.remove("show-links"); 
		const id = e.target.getAttribute('href').slice(1);
		const idElement = document.getElementById(id);
		// position correctly 
		let position;
		 if (navBar.classList.contains('fixed')) {
			position = idElement.offsetTop - 66;
		 }
		else {
			position = idElement.offsetTop - 132;
		}
		if (window.innerWidth < 992) {
			if (navBar.classList.contains('fixed')) {
				position = idElement.offsetTop - 66;
			}
			else {
				position = idElement.offsetTop - 66 - 191;
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