let mainNum = document.getElementById('mainNum');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
console.log(mainNum);
console.log(plusBtn);
console.log(minusBtn);

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

