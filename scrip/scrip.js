
 
  

document.addEventListener('DOMContentLoaded', function()
  {
    const titulo = document.querySelector('barra');
titulo.classList.add('animated-title');

});



const button = document.querySelector('#Ofertas');

button.addEventListener('mouseover', () => {
button.style.transition = 'background-color 0.3s ease';
button.style.backgroundColor = 'blue';
});

button.addEventListener('mouseout', () => {
button.style.transition = 'background-color 0.3s ease';
button.style.backgroundColor = 'red';
});
