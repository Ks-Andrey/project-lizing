export const bg = document.querySelector('.bg');

export default function menu(menuBtnSelector, menuSelector, closeSelector) {

	//menu
	const menuBtn = document.querySelector(menuBtnSelector),
		menu = document.querySelector(menuSelector),
		closeMenu = document.querySelector(closeSelector);

	menuBtn.addEventListener('click', () => {
		menu.classList.add('active');
	});
	closeMenu.addEventListener('click', () => {
		menu.classList.remove('active');
	})
}