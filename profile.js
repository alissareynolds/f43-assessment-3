
let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place');
let favRitual = document.querySelector('#ritual');
let koda = document.querySelector('#koda');
let zoeBoo = document.querySelector('#boo-zoe');
let maggie = document.querySelector('#maggie');
let cali = document.querySelector('#cali');
let form = document.querySelector('#feedback');

favColor.addEventListener('click', (event) => {
    event.preventDefault();
    alert('My favorite color is green');
})

favPlace.addEventListener('click', (event) => {
    event.preventDefault();
    alert('My favorite place is secluded countryside');
})

favRitual.addEventListener('click', (event) => {
    event.preventDefault();
    alert('My favorite ritual is going to the gym everyday');
})

koda.addEventListener('mouseover', () => {
    alert('Woof-Woof!')
})

zoeBoo.addEventListener('mouseover', () => {
    alert('Yip-Yip!')
})

maggie.addEventListener('mouseover', () => {
    alert('Bark-Bark!')
})

cali.addEventListener('mouseover', () => {
    alert('Hoooowl!')
})

function submitBtn(event) {
    event.preventDefault();
    alert('Form was submitted successfully!');
}
form.addEventListener('submit', submitBtn);