const themeBtn = document.querySelector('.theme')

function changeTheme() {
	if (document.body.classList.contains('dark')) {
		document.body.classList.remove('dark')
	} else {
        document.body.classList.add('dark')
    }
}

themeBtn.addEventListener('click', changeTheme)
