document.getElementById('nav-toggle').addEventListener('click', function () {
	const navLinks = document.getElementById('nav-links');
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