export default function slider(sliderImageSelector, slidersSelector, slideSelector, nextSelector, prevSelector, sliderSelector) {
	const sliderImage = document.querySelector(sliderImageSelector),
		  sliders = document.querySelector(slidersSelector),
		  slide = document.querySelectorAll(slideSelector),
		  next = document.querySelector(nextSelector),
		  prev = document.querySelector(prevSelector),
		  slider = document.querySelector(sliderSelector);

	sliders.style.width = ((slide.length * (slide[0].clientWidth + 43)) + sliderImage.clientWidth) + 'px';

	prev.addEventListener('click', () => {
		slider.scrollBy({
		    left: (-1 * (slide[0].clientWidth + 43)),
		        behavior: 'smooth'
		    });
		});
		next.addEventListener('click', () => {
			slider.scrollBy({
		        left: (slide[0].clientWidth + 43),
		        behavior: 'smooth'
		    });
	});
}