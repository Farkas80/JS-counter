let mainNum = document.getElementById('mainNum');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let resetBtn = document.getElementById('reset');
let values = document.getElementById('values');

let count = 0;

function increment() {
    count = count + 1;
    console.log(count);
    mainNum.innerText = count;
}

function decrement() {
    count = count - 1;
    console.log(count);
    mainNum.innerText = count;
}

function reset() {
    count = 0;   
    mainNum.textContent = count;
}

function save() {    
    let savedValues = count + ' - ';    
    values.textContent += savedValues;
};