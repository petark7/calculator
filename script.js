    let display = document.querySelector('.display h2');
    let buttons = document.querySelectorAll('button');

    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener('click', () => {
            if (display.textContent == 0) {
                display.textContent = "";
            }
            display.textContent += buttons[x].textContent;
        });
    }

function buttonClick (content) {
    display.textContent += content;
}

function add (x, y) {
    return x + y;
}

function substract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (x, y, operator) {
    switch(operator) {
        case "+":
            return add(x, y);
            break;
     
        case "-":
            return substract(x, y);
            break;
        
        case "*":
            return multiply(x, y);
            break;
        
        case "/":
            return divide(x, y);
            break;
    }

}
