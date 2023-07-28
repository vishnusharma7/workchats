const replyonthread = document.querySelector(".reply");
const threadBar = document.querySelector(".thread");
let isMenuOpenthread = false;

document.addEventListener("click", (event) => {
  if (event.target === replyonthread) {
    if (!isMenuOpenthread) {
      threadBar.style.display = "block";
      isMenuOpenthread = true;
    } else {
      threadBar.style.display = "none";
      isMenuOpenthread = false;
    }
  } else if (!threadBar.contains(event.target)) {
    threadBar.style.display = "none";
    isMenuOpenthread = false;
  }
});
window.addEventListener("resize", handleViewportChange);
window.addEventListener("DOMContentLoaded", handleViewportChange);

