document.addEventListener('DOMContentLoaded', (event) => {

	function iniMobile() {
		var menuFrame = document.querySelector('nav[js-main-navigation]');
		var menuButtonNav = document.querySelector('div[js-mobile-menu]');
		var menuButtonParrent = document.querySelector('div[js-mobile-menu-close]');
		var menuButton = menuButtonParrent.querySelector('div[js-mobile-menu-close] > i');

		if (!menuFrame || !menuButton) {
			return;
		}

		menuButton.addEventListener('click', () => {
			var classOpen = 'open';
			if (menuFrame.classList.contains(classOpen)) {
				menuFrame.classList.remove(classOpen)
				menuButtonParrent.classList.remove(classOpen)
				menuButtonNav.classList.remove(classOpen)
				return;
			}
			menuFrame.classList.add(classOpen);
			menuButtonParrent.classList.add(classOpen);
			menuButtonNav.classList.add(classOpen)
		});
	}

	iniMobile();
});


