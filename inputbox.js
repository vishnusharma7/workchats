const inputField = document.querySelector('.chatbox-msg');
const textStyles = document.querySelector('.input-msg');

inputField.addEventListener('click', (event) => {
    const svgs = textStyles.querySelectorAll('svg:not(.rightbutton svg)');
    svgs.forEach(svg => {
        svg.style.display = 'block';
    });

    event.stopPropagation();
});

// Hiding the SVGs when clicking outside the inputField
document.addEventListener('click', (event) => {
    if (!inputField.contains(event.target)) {
        const svgs = textStyles.querySelectorAll('svg:not(.rightbutton svg)');
        svgs.forEach(svg => {
            svg.style.display = 'none';
        });
    }
});


