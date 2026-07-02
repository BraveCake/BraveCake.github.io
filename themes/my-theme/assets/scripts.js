const themeToggleButton = document.getElementById('theme-toggle');
const rust_logo = document.querySelector('.invert-color');
const body = document.body;
themeToggleButton.addEventListener('click', () => {
	body.classList.toggle('light-mode');
	rust_logo.classList.toggle('invert-color');
	document.querySelectorAll(".icon").forEach((e)=> e.classList.toggle('invert-color'))
	if(body.classList.contains('light-mode')) {
		themeToggleButton.innerHTML = '☀️';
		themeToggleButton.title = 'dark mode';	
	} else {
		themeToggleButton.innerHTML = '🌙';
		themeToggleButton.title = 'light mode';
	}
});
