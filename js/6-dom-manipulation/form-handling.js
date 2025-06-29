"use strict";
//Input events
const uname = document.getElementById('username');
if (uname) {
    uname.addEventListener('input', (e) => {
        const target = e.target;
        console.log(`Typing: ${target.value}`);
    });
}
//Form validation
let email = document.getElementById('email');
if (email) {
    email.addEventListener('blur', (e) => {
        const target = e.target;
        if (!target.value.includes('@')) {
            target.setCustomValidity('Invalid email');
        }
    });
}
//Dynamic form fields
let element = document.getElementById('addField');
if (element) {
    element.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'dynamicField';
        const form = document.querySelector('form');
        if (form) {
            form.appendChild(input);
        }
    });
}
//Radio button change
const input = document.querySelectorAll('input[type="radio"]');
if (input) {
    input.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const target = e.target;
            console.log(`Selected: ${target.value}`);
        });
    });
}
