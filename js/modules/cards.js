import {getInf} from '../works/get-information';
import slider from './slider';

export default function cards(sliderImageSelector, slidersSelector, slideSelector, nextSelector, prevSelector, sliderSelector, url) {
	//cards

	class CreateSlide {
		constructor(header, price, image, block){
			this.header = header;
			this.price = price;
			this.image = image;
			this.block = block;
		}

		render() {
			let blockContainer = document.createElement('div');

			blockContainer.classList.add('slide');

			blockContainer.innerHTML = `
                <div class="image"><img src="${this.image}"></div>
                <div class="slide-name">${this.header}</div>
                <div class="pay">от ${this.price} руб/час</div>
                <button class="buy" id="open-form">Заказать</button>
			`;

			document.querySelector(this.block).appendChild(blockContainer)
		}
	}

	getInf(url)
		.then(res => {
			res.forEach(({header, image, price}) => {
				new CreateSlide(header, price, image, '.slides').render();
			})
		})
		.then(() => console.log('Загружен'))
		.then(() => {
			slider(sliderImageSelector, slidersSelector, slideSelector, nextSelector, prevSelector, sliderSelector);
		})
}