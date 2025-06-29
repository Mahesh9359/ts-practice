//Input events
const uname = document.getElementById('username') as HTMLInputElement | null;
if(uname){
uname.addEventListener('input', (e:Event) => {
  const target = e.target as HTMLInputElement;
  console.log(`Typing: ${target.value}`);
});
}


//Form validation
let email = document.getElementById('email')
if(email){
email.addEventListener('blur', (e:Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.value.includes('@')) {
    target.setCustomValidity('Invalid email');
  }
});
}


//Dynamic form fields
let element = document.getElementById('addField');
if(element){
element.addEventListener('click', () => {
  const input = document.createElement('input') as HTMLInputElement;
  input.type = 'text';
  input.name = 'dynamicField';
  const form = document.querySelector('form')
  if(form){
    form.appendChild(input);
  }
});
}

//Radio button change
const input = document.querySelectorAll('input[type="radio"]');
if(input){
input.forEach(radio => {
  radio.addEventListener('change', (e:Event) => {
    const target = e.target as HTMLInputElement;
    console.log(`Selected: ${target.value}`);
  });
});
}