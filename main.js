'use strict'

const USD = 27.2635;
const EUR = 32.0591;
const UAH = 1;
const RUB = 0.3660;

let input = document.getElementById('input');
let output = document.getElementById('output');
let optionInput = document.getElementById('optionInput');
let optionOutput = document.getElementById('optionOutput');

let currency = EUR;
let convertedCurrency = UAH;

input.addEventListener('input', convert);
optionInput.addEventListener('change', selectOptionInput);
optionOutput.addEventListener('change', selectOptionOutput);

function selectOptionInput() {
    calculateCurrency();
    convert();
}
function selectOptionOutput() {
    calculateCurrencyConvert();
    convert();
}

function calculateCurrency() {
    currency = (optionInput.value == 'USD') ? USD :
        (optionInput.value == 'EUR') ? EUR :
            (optionInput.value == 'UAH') ? UAH
                : RUB;
}

function calculateCurrencyConvert() {
    convertedCurrency = (optionOutput.value == 'USD') ? USD :
        (optionOutput.value == 'EUR') ? EUR :
            (optionOutput.value == 'UAH') ? UAH
                : RUB;
}

function convert() {
    output.value = (input.value * currency / convertedCurrency).toFixed(2);
}




 function countCurrency() {
     let result = 0;
     if (optionsInput.value == 'eur') {
         if (optionsOutput.value == 'uah') {
             result = enterInput.value * 32.3834;
             resultInput.value = result;
         } else if (optionsOutput.value == 'usd') {
             result = enterInput.value * 1.1872;
             resultInput.value = result;
         } else if (optionsOutput.value == 'rub') {
             result = enterInput.value * 88.6050;
             resultInput.value = result;
         }
     }
     if (optionsInput.value == 'uah') {
       if (optionsOutput.value == 'eur') {
             result = enterInput.value * 0.0309;
             resultInput.value = result;
         } else if (optionsOutput.value == 'usd') {
             result = enterInput.value * 0.0367;
             resultInput.value = result;
         } else if (optionsOutput.value == 'rub') {
             result = enterInput.value * 2.7361;
             resultInput.value = result;
         }
     }
    if (optionsInput.value == 'usd') {
         if (optionsOutput.value == 'eur') {
             result = enterInput.value * 0.8423;
             resultInput.value = result;
         } else if (optionsOutput.value == 'uah') {
             result = enterInput.value * 27.2772;
             resultInput.value = result;
         } else if (optionsOutput.value == 'rub') {
             result = enterInput.value * 74.6336;
             resultInput.value = result;
         }
     }
     if (optionsInput.value == 'rub') {
         if (optionsOutput.value == 'eur') {
             result = enterInput.value * 0.0113;
             resultInput.value = result;
        } else if (optionsOutput.value == 'usd') {
             result = enterInput.value * 0.0134;
             resultInput.value = result;
         } else if (optionsOutput.value == 'uah') {
             result = enterInput.value * 0.3655;
             resultInput.value = result;
         }
    }
 }
