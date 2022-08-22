require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';


import validate from './modules/validate';
import form from './modules/form';
import sendForm from './modules/send';
import caseFunc from './modules/case';
import menu from './modules/menu';
import cards from './modules/cards';
import openPopap from './modules/popap';

window.addEventListener('DOMContentLoaded', () => {
	validate('.form-block');
	form('#open-form', '#form .close', '#form');
	sendForm("#form > form", 'http://localhost:3000/postsData');
	sendForm('#price > div > form', 'http://localhost:3000/calc')
	caseFunc('.cases', '.cases-container', '.case-container', '.item', '.case-container .close');
	menu('.burger-menu', 'header nav .container .menu', 'header nav .container .menu .close');
	cards('.staff .slider-container .staff-image', '.staff .slides', '.staff .slides .slide', '.staff .slider-container .slider-nav button.next', '.staff .slider-container .slider-nav button.prev', '.staff .slider', 'http://localhost:3000/cards');
	openPopap('.video-block', '.video .video-container .image', '.video-block .close');
});