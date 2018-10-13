document.addEventListener("DOMContentLoaded", () => {
	let ulSearchBox = document.querySelector('ul.search-box');
	let searchBtn = document.querySelectorAll('ul.ul-header-right li');
	let svgLogo = document.querySelector('svg#icon-thom_browne_logo');
	let btnCancelSearch = document.querySelector('ul.search-box a.btnCancel');

	searchBtn[1].addEventListener('click', () => {
		ulSearchBox.classList.add('active');
		svgLogo.classList.add('search-on');
	});

	btnCancelSearch.addEventListener('click', () => {
		ulSearchBox.classList.remove('active');
		svgLogo.classList.remove('search-on');
	});
}, false);