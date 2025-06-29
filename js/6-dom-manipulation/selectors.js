"use strict";
//getElementById
const header = document.getElementById('header');
if (header) {
    console.log(header.textContent);
}
//querySelector (first match)
const firstBtn = document.querySelector('.btn');
if (firstBtn) {
    firstBtn.style.color = 'red';
}
//querySelectorAll (NodeList)
const allImages = document.querySelectorAll('img');
allImages.forEach(img => img.alt = 'Demo image');
//getElementsByClassName (live HTMLCollection)
const cards = document.getElementsByClassName('card');
Array.from(cards).forEach(card => {
    card.classList.add('shadow');
});
//Traversal
const container = document.querySelector('.container');
if (container) {
    const firstChild = container.firstElementChild;
    const lastChild = container.lastElementChild;
    console.log('First child:', firstChild);
    console.log('Last child:', lastChild);
}
