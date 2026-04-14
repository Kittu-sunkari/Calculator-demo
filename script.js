let display = document.getElementById('display');

function calculatetor() {
    return Function('"use strict";return (' + display.value + ')')();
    
    // let input = display.value; // e.g., "10+5"
    
    // let parts = input.split(/([+\-*/%()^])/).filter(part => part.trim() !== '');
    // if (parts.length !== 3) {
    //     throw new Error('Invalid expression');
    // }   
    // let num1 = parseFloat(parts[0]);
    // let operator = parts[1];
    // let num2 = parseFloat(parts[2]);    
    // // Perform the calculation based on the operator
    // switch (operator) {
    //     case '+':   
    //         return num1 + num2;
    //     case '-':
    //         return num1 - num2; 
    //     case '*':
    //         return num1 * num2;
    //     case '/':
    //         if (num2 === 0) {
    //             throw new Error('Division by zero');
    //         }   
    //         return num1 / num2;
    //     case '%':
    //         return num1 % num2;
    //     case '^':
    //         return Math.pow(num1, num2);
    //     default:
    //         throw new Error('Unsupported operator');
    // }       

}


function appendToDisplay(value) {
    display.value += value;
}   
function clearDisplay() {
    display.value = '';
}   
function calculate() {
    try{
        if(display.value.trim() === '') {   
            display.value = '';
        } else {
            display.value = calculatetor(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
