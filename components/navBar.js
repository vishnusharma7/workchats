
class NavBar extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement("template");
      template.innerHTML = `
        <link rel="stylesheet" href="style.css">
        
        <div class="nav" style="border-bottom:0.5px solid var(--border-color)">
            <div style="display: flex;align-items: center;gap: 4em;">

                <div></div>

                <!-- add extra logo -->
                <div class="logo">

                    <img class="logo-main" src="img/wlogo.png" alt="">
                    <span class="text w-title">worksetu</span>
                </div>
            </div>
            <div class="nav-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
        <input class="search" type="text" placeholder="Search...">
        </div>
            <div style="display: flex;align-items: center;gap: 1em;">
                <div class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div class="profile-image-nav">
                    <img src="img/sender.png" alt="Me"
                        style=" width: 40px; height:40px; margin-right:2.5em; border-radius:0.5em; cursor:pointer;">
                </div>
            </div>
        </div>
      `;
  
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));


  

    }
  }
  
  customElements.define("nav-bar", NavBar);
  