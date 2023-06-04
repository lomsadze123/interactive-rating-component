const nums = document.getElementById('flex');
const num = document.querySelectorAll('.num')
const btn = document.getElementById('btn');
const main = document.querySelector('.main');
const thanks = document.querySelector('.thanks');
const outOf = document.getElementById('outOf');

nums.addEventListener('click', (event) => {
    const target = event.target;
    for(let i of num) {
        i.classList.remove('active');
        if (target.classList[0] === "num") {
            target.classList.add('active');
        }
        if(target.value != "" && target.id != "flex") {
            btn.addEventListener('click', () => {
                main.style.display = 'none';
                thanks.style.display = 'block';
                outOf.textContent = target.textContent;
            })
        }
    }
});