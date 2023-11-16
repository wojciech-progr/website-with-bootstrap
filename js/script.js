document.addEventListener('DOMContentLoaded', function () {
	// add shadow after scroll
	const nav = document.querySelector('.navbar')
	function addShadow() {
		if (window.scrollY >= 30) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	// hide menu on mobile after click on link
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)

	window.addEventListener('scroll', addShadow)
})
