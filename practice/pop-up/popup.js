const btn = document.querySelector('button');
const dw = document.querySelector('.popup-wrapper');

btn.addEventListener('click', e => {
    dw.style.display = 'block';
});

const crs = document.querySelector('.popup-close');
crs.addEventListener('click', e=> {
    dw.style.display = 'none';
})