const inputField = document.querySelector('.chatbox-msg');
const textStyles = document.querySelector('.textStyle');

inputField.addEventListener('click', (event) => {
    textStyles.style.display = 'flex';
    event.stopPropagation();
});

// Hide when click outside, but don't close when clicking on textStyle itself or its children
document.addEventListener('click', (event) => {
    if (!textStyles.contains(event.target)) {
        textStyles.style.display = 'none';
    }
});
