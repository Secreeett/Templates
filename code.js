const submitButtonEl = document.getElementById('submit-button');
const enteredTextEl = document.getElementById('text-email');

    submitButtonEl.addEventListener('click', () => {
        const enteredText = enteredTextEl.value.trim();

     const existingH3 = document.querySelector('.first-panel h3');
      if (existingH3) {
        existingH3.remove();
      }

     const displayText = document.createElement('h3');
      displayText.textContent = enteredText;
        displayText.classList.add('text-center');

     const panelBody = document.querySelector('.first-panel');
         panelBody.prepend(displayText);

     enteredTextEl.value = '';
    });