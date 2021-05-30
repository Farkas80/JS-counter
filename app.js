let mainNum = document.getElementById('mainNum');
let moreBtn = document.getElementsByClassName('more');
let lessBtn = document.getElementsByClassName('less'),

moreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mainNum++;
    mainNum.innerText = mainNum;
});