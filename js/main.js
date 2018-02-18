'use strict';
var burger = document.querySelector('.header__button');
var body = document.querySelector('.body');

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
