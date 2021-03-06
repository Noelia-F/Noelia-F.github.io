'use strict';

//funcionalidad menu
var burger = document.querySelector('.header__button');
var body = document.querySelector('.body');
var menu = document.querySelector('.header__navigation');

function showRemoveMenu(){
	body.classList.toggle('menu-visible');
}

function hideMenu(){
	body.classList.remove('menu-visible');
}

var items = document.querySelectorAll('.item');
for(var i=0; i < items.length; i++) {
	items[i].addEventListener('click', hideMenu);
}

burger.addEventListener('click', showRemoveMenu);
menu.addEventListener('click', hideMenu);

//funcionalidad más info
var more = document.querySelectorAll('.info--add');
var addInfo = document.querySelectorAll('.aditional-info');

for(var i=0; i<more.length; i++) {
	more[i].addEventListener('click', showMore);
	console.log(more);
}
//
// for(var i=0; i<addInfo.length; i++) {
// 	addInfo[i].addEventListener('click', showMore);
// }

function showMore(){
	for(var i=0; i<addInfo.length; i++) {
		addInfo[i].classList.toggle('hidden');
	};
	for(var i=0; i<more.length; i++) {
		more[i].classList.toggle('info--less');
		more[i].classList.toggle('info--plus');
	}
}
