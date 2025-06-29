//getElementById
const header = document.getElementById('header') as HTMLHeadElement;
if(header){
console.log(header.textContent);
}


//querySelector (first match)
const firstBtn = document.querySelector('.btn') as HTMLButtonElement;
if(firstBtn){
firstBtn.style.color = 'red';
}


//querySelectorAll (NodeList)
const allImages = document.querySelectorAll<HTMLImageElement>('img');
allImages.forEach(img => img.alt = 'Demo image');

//getElementsByClassName (live HTMLCollection)
const cards = document.getElementsByClassName('card');
Array.from(cards).forEach(card => {
  (card as HTMLElement).classList.add('shadow');
});


//Traversal
const container = document.querySelector('.container');
if (container) {
  const firstChild = container.firstElementChild as HTMLElement | null;
  const lastChild = container.lastElementChild as HTMLElement | null;

  console.log('First child:', firstChild);
  console.log('Last child:', lastChild);
}
