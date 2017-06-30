var menu_btn = document.querySelector('.burger');
var menu = document.querySelector('.menu-chapter');
var cancel = document.querySelector('.cancel');

menu_btn.addEventListener('click', function(e) {
	menu.style.transform = 'translate(100%, 0%)'
});

cancel.addEventListener('click', function(e) {
	menu.style.transform = 'translate(-100%, 0%)'
});

