const replyonthread = document.querySelector(".reply");
  const threadBar = document.querySelector(".thread");
  const closeThread = document.querySelector(".close-thread");
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

  closeThread.addEventListener("click", () => {
    threadBar.style.display = "none";
    isMenuOpenthread = false;
  });

  function handleViewportChange() {
    // Implement your logic for handling viewport changes, if needed.
    // This function is referenced in your code but not provided, so you may need to define it separately.
  }

  window.addEventListener("resize", handleViewportChange);
  window.addEventListener("DOMContentLoaded", handleViewportChange);