export default function caseFunc(caseMainBlockSelector, caseContainerSelector, caseDatasSelector, caseBoxSelector, closeCaseSelector) {
	//case

	const caseMainBlock = document.querySelectorAll(caseMainBlockSelector);

	caseMainBlock.forEach(casesBlock => {
		const caseContainer = casesBlock.querySelector(caseContainerSelector),
			  caseDatas = casesBlock.querySelectorAll(caseDatasSelector),
			  caseBox = caseContainer.querySelectorAll(caseBoxSelector),
			  closeCase = casesBlock.querySelectorAll(closeCaseSelector);

		caseBox.forEach(item => {
			item.addEventListener('click', () => {
				caseDatas[parseInt(item.getAttribute('data-button')) - 1].classList.add('active');
				caseContainer.style.display = 'none';
			});
		});

		closeCase.forEach(item => {
			item.addEventListener('click', () => {
				caseDatas.forEach(caseData => {
					caseData.classList.remove('active');
					caseContainer.style.display = 'flex';
				});
			});
		});
	});
}