document.addEventListener("DOMContentLoaded", () => {
	let ulSearchBox = document.querySelector('ul.search-box'),
	searchBtns = document.querySelectorAll('ul.ul-header-right li'),
	svgLogo = document.querySelector('svg#icon-thom_browne_logo'),
	btnCancelSearch = document.querySelector('ul.search-box a.btnCancel'),
	inputCheck = document.querySelectorAll('.product-size ul li input');

	searchBtns[1].addEventListener('click', () => {
		ulSearchBox.classList.add('active');
		svgLogo.classList.add('search-on');
	});
	btnCancelSearch.addEventListener('click', () => {
		ulSearchBox.classList.remove('active');
		svgLogo.classList.remove('search-on');
	});
	for (let x of inputCheck) {
		x.onclick = () => {
			for (let b of inputCheck) {
				b.checked = false;
			}
			x.checked = true;
		};
	};

	let imgActive = document.querySelector('.left-products-images img._detailImgActive'),
	imgActiveMain = document.querySelector('.middle-products-images img'),
	imgDetails = document.querySelectorAll('.left-products-images img');
	imgActiveMain.src = imgActive.src;

	for (let x of imgDetails) {
		x.onclick = () => {
			for (let y of imgDetails) {
				y.classList.remove('_detailImgActive');
			}
			imgActiveMain.src = '';
			x.classList.add('_detailImgActive');
			imgActiveMain.src = x.src;
		}
	};





}, false);