const screen = document.getElementById('screen');
const simpleKeys = document.getElementById('simple-keys');
const scientificKeys = document.getElementById('scientific-keys');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    if (scientificKeys.style.display === 'none') {
        scientificKeys.style.display = 'grid';
        simpleKeys.style.display = 'none';
        toggleButton.textContent = 'Simple Mode';
    } else {
        scientificKeys.style.display = 'none';
        simpleKeys.style.display = 'grid';
        toggleButton.textContent = 'Scientific Mode';
    }
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            screen.value = '';
        } else if (value === '=') {
            try {
                screen.value = evalExpression(screen.value);
            } catch {
                screen.value = 'Error';
            }
        } else if (value === 'backspace') {
            screen.value = screen.value.slice(0, -1);
        } else if (value === 'π') {
            screen.value += Math.PI;
        } else if (value === 'e') {
            screen.value += Math.E;
        } else if (value === '√') {
            screen.value = Math.sqrt(parseExpression(screen.value));
        } else if (value === 'sin') {
            screen.value = Math.sin(parseExpression(screen.value));
        } else if (value === 'cos') {
            screen.value = Math.cos(parseExpression(screen.value));
        } else if (value === 'tan') {
            screen.value = Math.tan(parseExpression(screen.value));
        } else if (value === 'log') {
            screen.value = Math.log10(parseExpression(screen.value));
        } else if (value === 'ln') {
            screen.value = Math.log(parseExpression(screen.value));
        } else if (value === '!') {
            screen.value = factorial(parseExpression(screen.value));
        } else {
            screen.value += value;
        }
    });
});

function parseExpression(value) {
    try {
        return eval(value);
    } catch {
        return 0;
    }
}

function evalExpression(value) {
    return Function(`'use strict'; return (${value})`)();
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

