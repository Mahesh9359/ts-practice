"use strict";
// createElement
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';
document.body.appendChild(newDiv);
// insertBefore
const parent1 = document.querySelector('ul');
if (parent1) {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    parent1.insertBefore(newItem, parent1.firstChild);
}
// cloneNode
const original1 = document.querySelector('.template');
if (original1) {
    const clone = original1.cloneNode(true);
    document.body.appendChild(clone);
}
// DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const item = document.createElement('div');
    item.textContent = `Item ${i}`;
    fragment.appendChild(item);
}
const list = document.getElementById('list');
if (list) {
    list.appendChild(fragment);
}
