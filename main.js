const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}

// main.js

// Inicializar ScrollReveal
ScrollReveal().reveal('section', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true // Ajuste conforme necessário
});
