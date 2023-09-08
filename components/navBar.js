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
                    <input class="search" type="text" placeholder="Find your own Worksetu...">
                </div>
                <div style="display: flex;align-items: center;gap: 1em;">
                    <div class="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <div class="profile-image-nav dropdown-holder">
                    <img class="dropdown-trigger" tabindex="0"  src="img/sender.png" alt="Me"
                        style=" width: 40px; height:40px; margin-right:2.5em; border-radius:0.5em; cursor:pointer;">
                    <!-- profile-popup -->
                    <div class="profile-popup dropdown" style="width:250px">
                        <div class="column">
                            <div class="row">
                                <img class="img" src="img/sender.png" alt="">
                                <div class="column" style="gap: 2px;">
                                    <span style="font-size:1em; font-weight:600 ">Test User</span>
                                    <span style="color:rgb(11, 173, 11); ">Active</span>
                                </div>
                            </div>
                            <div class="column" style="border-bottom: 1px solid grey; padding:10px " ;>
                                <span>Set Yourself away</span>
                                <div class="row" style="justify-content:space-between">
                                    <span>Pause Notifications</span>
                                    <div class="row">
                                        <span>On</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="column" style="border-bottom: 1px solid grey; padding:10px" ;>
                                <a href="profile.html"><span>Profile</span></a>
                                <span>Preference</span>
                            </div>
                            <div class="column">
                                <button class="button" style=" font-size:16px">Sign out</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
    
    }

  
}

customElements.define("nav-bar", NavBar);
