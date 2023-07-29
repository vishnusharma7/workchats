
const inputField = document.querySelector('.chatbox-msg');
const textStyles = document.querySelector('.input-msg');

inputField.addEventListener('click', () => {
    const svgs = textStyles.querySelectorAll('svg');
    svgs.forEach(svg => {
        svg.style.display = 'block';
    });
});



