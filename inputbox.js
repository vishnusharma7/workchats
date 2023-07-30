const inputField = document.querySelector('.chatbox-msg');
const textStyles = document.querySelector('.textStyle');

inputField.addEventListener('click', (event) => {
    textStyles.style.display = 'flex';
    event.stopPropagation();
});

//Hide when click outside
document.addEventListener('click', (event) => {
    if (!event.target.matches('.textStyle')) {
        textStyles.style.display = 'none';
    }
});

