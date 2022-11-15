    let display = document.querySelector('.display h2');
    let buttons = document.querySelectorAll('button');
    let clearDisplay = true;

    let equalsDisabled = false;
    let currentNumber = "";
    let previousOperation = "";
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

function calculate (operator) {

    // =
    if (operator == "=" && numbersArray.length == 2) {
        numbersArray.push(parseInt(currentNumber));
        if (numbersArray[1] == "/" && numbersArray[2] == 0) {
            numbersArray = [];
            currentNumber = 0;
            display.textContent = "bro..";
            return;
        }
        let result = operate(numbersArray[0], numbersArray[2], numbersArray[1]);
        display.textContent = result;
        numbersArray = [result];
        currentNumber = result;
    }

    // operators + - * /
    else if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
        // check if the second operand is 0 
       if (currentNumber == 0 && operator == "/" && numbersArray.length == 2 && currentNumber != 0) {
        numbersArray = [];
        currentNumber = 0;
        display.textContent = "bro..";
       }
       else {
         // executes after the display is cleared (or the first time)
        if (!numbersArray.length) {
            numbersArray.push(parseInt(currentNumber), operator);
            currentNumber = 0;
        }

        else if (numbersArray.length == 1) {
            numbersArray[1] = operator;
            currentNumber = 0;
        }

        // second time calling the operator button
        // add first two numbers and store operator ==> [5 + 3 +] => [8, +]
        else if (numbersArray.length == 2) {
            console.log (numbersArray); 
            if (currentNumber != 0) {
                numbersArray.push(parseInt(currentNumber));
                let result = operate(numbersArray[0], numbersArray[2], numbersArray[1]);
            numbersArray = [result, operator];
            display.textContent = result;
            }
            currentNumber = 0;
        }
       }
    }
    clearDisplay = true;
}

function reset () {
    numbersArray = [];
    currentNumber = 0;
    display.textContent = 0;
}

// enable keyboard support 
// add animation on buttons after clicking on keys
window.addEventListener("keydown", (event) => {
    let button = document.getElementById("btn_" + event.key);;
    try {
        switch (event.key) {
            case "Enter":
                button = document.getElementById("btn_=");
                button.click();
                animate(button);
                break;
            default: {
                button.click();
                animate(button);
            }    
        }
    } catch (err) {
        return;
    }

  });

function animate (element) {
    element.classList.add("clicked");
    setTimeout (() => {
        element.classList.remove('clicked');
      }, 50)
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
