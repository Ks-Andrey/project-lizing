export default function validate(formContSelector) {
	//form
	const formCont = document.querySelector(formContSelector),
		submitButton = formCont.querySelector('button'),
		inputs = formCont.querySelectorAll('input');

	let valueTrue = 0;

	submitButton.addEventListener('click', (e) => {
		inputs.forEach(item => {
			if (!(item.value == '')) {
				valueTrue++;
			}else{
				item.style.borderColor = 'red';
			}
		});
		if (valueTrue == inputs.length) {
			formCont.submit();
			valueTrue = 0;
		}else{
			e.preventDefault();
			valueTrue = 0;
		}
	});
}