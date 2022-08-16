import {postInf} from '../works/posts-information';

export default function sendForm(formBlockSelector, url) {
		//form send
        const formBlock = document.querySelector(formBlockSelector);

        formBlock.addEventListener('submit', (e) => {
        	e.preventDefault();

            let map = new Map();
        	const input = formBlock.querySelectorAll('input');

            input.forEach(item => {
                map.set(item.getAttribute('name'), item.value);
            })

        	postInf(url, Object.fromEntries(map))
        		.then(res => console.log(res));
        })
}