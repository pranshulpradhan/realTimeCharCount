const inputField = document.getElementById('input-field');
const counter = document.getElementById('counter-max');
const clearButton = document.getElementById('clear-button');

inputField.addEventListener('input', updateCharacterCount);
clearButton.addEventListener('click', clearInput);

function updateCharacterCount() {
    const text = inputField.value;
    const remainingChars = 50 - text.length;
    counter.textContent = `${remainingChars}`;
    
    if (remainingChars < 0) {
        counter.classList.add('exceed');
    } else {
        counter.classList.remove('exceed');
    }

    inputField.className = '';
    text.split('').forEach(char => {
        if (/[a-zA-Z]/.test(char)) {
            inputField.classList.add('alphabet');
        } else if (/[0-9]/.test(char)) {
            inputField.classList.add('numeric');
        } else {
            inputField.classList.add('symbol');
        }
    });
}

function clearInput() {
    inputField.value = '';
    updateCharacterCount();
}
