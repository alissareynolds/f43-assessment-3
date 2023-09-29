console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form was submitted successfully!');
}



let form = document.querySelector('#contact');
let image = document.querySelector('#cat');

form.addEventListener('submit', handleSubmit);

image.addEventListener('mouseover', () => {
	alert('You are wonderful!');
})
