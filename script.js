let button = document.querySelector('#finish')

let result = 0

const checkTest = () => {
	return button.addEventListener('click', e => {
		e.preventDefault()
		let a1 = document.querySelector('#q1').value
		if (a1 === '4') {
			result++
		}

		let a2 = document.getElementById('q2').value
		if (a2 === '9') {
			result++
		}

		let a3 = document.getElementById('q3').value
		if (a3 === '16') {
			result++
		}

		let a4 = document.getElementById('q4').value
		if (a4 === '25') {
			result++
		}

		let a5 = document.getElementById('q5').value
		if (a5 === '36') {
			result++
		}
		// alert('количество правильных ответов ' + result)
		console.log(`количество правильных ответов ${result}`)
	})
}
checkTest()

// button.addEventListener('click', checkTest)
