var user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener('click', function(e) {
	var user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
	user_icon.classList.toggle('_active');
});
