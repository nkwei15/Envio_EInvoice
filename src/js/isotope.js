/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|                     Isotope
-----------------------------------------------*/

const isotopeFilter = () => {
	window.addEventListener('load', event => {
		let iso = new Isotope('.grid', {
			itemSelector: '.item',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.item'
			}
		});

		let navLinks = document.querySelectorAll('.nav-item > a[data-bs-nav]');

		navLinks.forEach(link => {
			link.addEventListener('click', function (event) {
				event.preventDefault(); // prevent default navigation

				// Get the filter value from clicked link
				let filterValue = link.getAttribute('data-filter');

				// Filter the isotope grid
				iso.arrange({ filter: filterValue });

				// Optional: highlight active nav link
				navLinks.forEach(l => l.classList.remove('active'));
				link.classList.add('active');
			});
		});
	});
};

export default isotopeFilter;
