// Function to handle click events outside the forward-share-thread div
function handleOutsideClick(event) {
    const forwardShareThread = document.querySelector('.forward-share-thread');
    const messageOptions = document.querySelector('.message-options');
    if (!forwardShareThread.contains(event.target)) {
        messageOptions.style.display = 'none';
    }
}

// Function to toggle the message options visibility
function toggleMessageOptions(event) {
    const messageOptions = document.querySelector('.message-options');
    messageOptions.style.display = messageOptions.style.display === 'none' ? 'flex' : 'none';
    event.stopPropagation();
}

// Add click event listener to the forward-share-thread div
const forwardShareThread = document.querySelector('.forward-share-thread');
forwardShareThread.addEventListener('click', toggleMessageOptions);

// Add click event listener to handle clicks outside the forward-share-thread div
document.addEventListener('click', handleOutsideClick);

// Add click event listener to the message-options div to prevent hiding when clicking on it
const messageOptions = document.querySelector('.message-options');
messageOptions.addEventListener('click', function (event) {
    event.stopPropagation();
});  