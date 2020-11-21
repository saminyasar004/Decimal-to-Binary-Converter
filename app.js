/*
* Title: decimal to binary converter
* Description: people can convert their decimal number to binary number
* Author: Samin Yasar 
* Date: 21/11/2020
*/

// select all necessary elements

const numberInputEl = document.getElementById('number-input');
const binaryOutputEl = document.getElementById('binary-output');
const btn = document.getElementById('btn');

// addeventlistener

btn.addEventListener('click', btnFunction);

// all functionality

function btnFunction(e) {
    e.preventDefault();
    let numberInput = numberInputEl.value;
    if(numberInput < 0) {
        alert('Please enter a positive number');
    } else if(numberInput === "") {
        alert('Please enter a positive decimal number');
    } else {
        numberInput = Number(numberInput).toString(2);
        binaryOutputEl.value = numberInput;
    }
}