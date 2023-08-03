// Get references to the elements
var forwardShareThread = document.querySelector('.forward-share-thread');
var messageOptions = document.querySelector('.message-options');

// Function to show the forward-share-thread div
function showForwardShareThread() {
    forwardShareThread.style.display = 'flex';
}
function hidesForwardShareThread() {
    forwardShareThread.style.display = 'none';
}

// Function to hide the forward-share-thread div
function hideForwardShareThread() {
    if (!forwardShareThread.dataset.mouseover && !forwardShareThread.dataset.clicked) {
        forwardShareThread.style.display = 'none';
        hideMessageOptions();
    }
}

// Function to handle the click event on the forward-share-thread div
function handleForwardShareClick(event) {
    forwardShareThread.dataset.clicked = 'true';
    showMessageOptions();
}

// Function to resume hiding the forward-share-thread div
function resumeHideForwardShare() {
    forwardShareThread.removeAttribute('data-mouseover');
    hideForwardShareThread();
}

// Function to show the message options
function showMessageOptions() {
    messageOptions.style.display = 'flex';
}

// Function to hide the message options
function hideMessageOptions() {
    messageOptions.style.display = 'none';
}

// Event listener for clicks outside both forward-share-thread and message-options
document.addEventListener('click', function (event) {
    const isInsideForwardShare = forwardShareThread.contains(event.target);
    const isInsideMessageOptions = messageOptions.contains(event.target);

    if (!isInsideForwardShare && !isInsideMessageOptions) {
        hidesForwardShareThread();
        hideMessageOptions();
    }
});



// Event listener for clicks inside the forward-share-thread div
forwardShareThread.addEventListener('click', function (event) {
    event.stopPropagation();
    showMessageOptions();
});

// Event listener to set the mouseover flag when mouse enters the forward-share-thread div
forwardShareThread.addEventListener('mouseenter', function () {
    forwardShareThread.dataset.mouseover = 'true';
});

// Event listener to remove the mouseover flag and hide the forward-share-thread div when mouse leaves it
forwardShareThread.addEventListener('mouseleave', function () {
    delete forwardShareThread.dataset.mouseover;
    hideForwardShareThread();
    
});