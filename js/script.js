document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	// add shadow after scroll
	function addShadow() {
		if (window.scrollY >= 30) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
})
