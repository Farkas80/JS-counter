let nums = document.querySelector('.nums');
let mainNum = document.querySelector('#mainNum');
let plusBtn = document.querySelector('#plusBtn');
let minusBtn = document.querySelector('#minusBtn');

console.log('hfrkv');

plusBtn.addEventListener('click', (e) => {
    console.log("mukodj")    
    mainNum++;
    mainNum.innerHTML = mainNum;
});