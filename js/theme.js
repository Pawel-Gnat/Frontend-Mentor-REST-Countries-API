const themeBtn = document.querySelector('.theme')
const body = document.querySelector('body')
let theme = localStorage.getItem('theme') || 'light'

function changeTheme() {
	if (theme === 'dark') {
		body.classList.remove('dark')
		body.classList.add('light')
		theme = 'light'
	} else {
		body.classList.remove('light')
		body.classList.add('dark')
		theme = 'dark'
	}

	localStorage.setItem('theme', theme)
}

if (theme === 'dark') {
	body.classList.add('dark')
} else {
	body.classList.add('light')
}

themeBtn.addEventListener('click', changeTheme)
