document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const functions = document.querySelectorAll('.function');
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');

    let currentInput = '';

    numbers.forEach(number => {
        number.addEventListener('click', function() {
            currentInput += number.textContent;
            display.value = currentInput;
        });
    });
    
    operators.forEach(operator => {
        operator.addEventListener('click', function() {
            currentInput += ` ${operator.textContent} `;
            display.value = currentInput;
        });
    });

    functions.forEach(func => {
        func.addEventListener('click', function() {
            if (func.textContent === '%') {
                currentInput = `${parseFloat(currentInput) / 100}`;
            } else if (func.textContent === '√') {
                currentInput = Math.sqrt(parseFloat(currentInput));
            } else if (func.textContent === 'log') {
                currentInput = Math.log10(parseFloat(currentInput));
            }  
            display.value = currentInput;
        });
    });

    calculateButton.addEventListener('click', function() {
        try {
            currentInput = eval(currentInput);
            display.value = currentInput;
        } catch (error) {
            display.value = 'Error';
        }
    });

    clearButton.addEventListener('click', function() {
        display.value = '';
        currentInput = '';
    });
});
