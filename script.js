    let display = document.querySelector('.display h2');
    let buttons = document.querySelectorAll('button');
    let clearDisplay = true;

    let currentNumber = "";
    let currentOperand = "";
    let numbersArray = [];

    // populate display on button click
    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener('click', () => {
            if (display.textContent == 0 && !buttons[x].className) {
                display.textContent = "";
            }
            // check if button should render in display
            // numbers render in display (have no classnames)
                if (!buttons[x].className) {
                    if (clearDisplay) {
                        currentNumber = "";
                        display.textContent = "";
                    }
                    
                    if (currentNumber != numbersArray[0] && numbersArray.length == 1)
                    {
                        numbersArray = [];
                    }
                    currentNumber += buttons[x].textContent;
                    display.textContent += buttons[x].textContent;     
                    clearDisplay = false;  
                }
        });
    }

function calculate (operand) {

    // =
    if (operand == "=") {
        numbersArray.push(parseInt(currentNumber));
        let result = operate(numbersArray[0], numbersArray[2], numbersArray[1]);
        display.textContent = result;
        numbersArray = [result];
        currentNumber = result;
    }

    // operands + - * /
    else {
        // executes after the display is cleared (or the first time)
        if (!numbersArray.length) {
            numbersArray.push(parseInt(currentNumber), operand);
        }
        
        // the result of previous operation
        else if (numbersArray.length == 1) {
            numbersArray.push(operand);
        }
    }
    clearDisplay = true;
}

function reset () {
    numbersArray = [];
    currentNumber = 0;
    display.textContent = 0;
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
