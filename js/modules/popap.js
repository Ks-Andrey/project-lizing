export default function openPopap(popapSelector, btnSelector, closeSelector) {
	const popap = document.querySelector(popapSelector),
		  bg = document.querySelector('.bg'),
		  closePopap = document.querySelector(closeSelector),
		  popapBtn = document.querySelectorAll(btnSelector);

	popapBtn.forEach(item => {
		item.addEventListener('click', () => {
			popap.classList.add('active');
			bg.classList.add('active');
		})
	});
	closePopap.addEventListener('click', () => {
		popap.classList.remove('active');
		bg.classList.remove('active');
	})
	bg.addEventListener('click', () => {
		popap.classList.remove('active');
		bg.classList.remove('active');
	})
}