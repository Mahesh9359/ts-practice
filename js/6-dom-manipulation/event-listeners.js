"use strict";
//Click event
let mybtn = document.getElementById('myBtn');
if (mybtn) {
    mybtn.addEventListener('click', function () {
        console.log('Button clicked!');
    });
}
//Mouse events
const box = document.querySelector('.box');
if (box) {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'blue';
    });
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = '';
    });
}
//Keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Esc pressed');
    }
});
//Event delegation
let list1 = document.querySelector('ul');
if (list1) {
    list1.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('completed');
        }
    });
}
//Remove listener
const onceBtn = document.getElementById('onceBtn');
if (onceBtn) {
    const handler = () => console.log('Only once!');
    onceBtn.addEventListener('click', handler, { once: true });
}
