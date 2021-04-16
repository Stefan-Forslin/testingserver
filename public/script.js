const button = document.querySelector('#faggotButton')
button.addEventListener('click', event => {
	console.log('Faggotbutton clicked');
	const messageElement = document.querySelector('.faggotMessage')
	messageElement.innerHTML += `<br> horknappen klickades` 
})
