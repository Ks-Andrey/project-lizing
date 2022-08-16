import {bg} from './menu';

export default function form(btnOpenSelector, closeSelector, formSelector) {
	const openForm = document.querySelectorAll(btnOpenSelector),
                close = document.querySelector(closeSelector),
                form = document.querySelector(formSelector),
                bg = document.querySelector('.bg');

            openForm.forEach(item => {
                item.addEventListener('click', () => {
                    form.classList.add('active');
                	bg.classList.add('active');
                }); 
            })

            close.addEventListener('click', () => {
                form.classList.remove('active');
                bg.classList.remove('active');
            })

            bg.addEventListener('click', () => {
                form.classList.remove('active');
                bg.classList.remove('active');
            })


        function findHeight() {
            let formH = form.querySelector('form').clientHeight,
                socialH = form.querySelector('.social').clientHeight,
                centerBlock = form.querySelector('.form-list'),
                height,
                containerH = form.offsetHeight;

            containerH -= parseInt(window.getComputedStyle(form).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(form).getPropertyValue('padding-bottom'));

            height = containerH - (formH + socialH);

            centerBlock.style.height = height + 'px';
        }

        window.addEventListener(`resize`, event => {
            console.log(window.screen.width); 
            if (window.screen.height > 680) {
                 findHeight();
            }
        });

        findHeight();
}