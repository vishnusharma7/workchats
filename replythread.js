  const replyonthread = document.querySelector(".reply");
  const threadBar = document.querySelector(".thread");
  const closeThread = document.querySelector(".close-thread");
  let isMenuOpenthread = false;

  document.addEventListener("click", (event) => {
    if (event.target === replyonthread) { 
      if (!isMenuOpenthread) {
        threadBar.style.display = "flex";
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
    
  }

  window.addEventListener("resize", handleViewportChange);
  window.addEventListener("DOMContentLoaded", handleViewportChange);

  