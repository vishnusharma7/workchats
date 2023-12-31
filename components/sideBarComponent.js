class SideBar extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `

    
        <link rel="stylesheet" href="style.css">
        
        <div class="container1">
        <div class="menu-sidebar" style="padding: 0.5em; cursor:pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
             </svg>
    </div>
       
    <div class="sidebar">
    <div class="content" style="  display: flex; flex-direction:column; ">
        <div class="top" style="display: flex; justify-content:space-between; align-items:center;">
            <div class="row dropdown-holder">
                <div class="row yourslack dropdown-trigger" tabindex="0" style="cursor: pointer;">
                    <h4>Your worksetu</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <!-- you-slack popup -->
                <div class="your-slack popup dropdown">
                    <div class="column">
                        <div class="row">
                            <img class="img" src="img/sender.png" alt=""
                                style=" width: 40px; height:40px; border-radius:0.5em; cursor:pointer;">
                            <div class="column" style="gap:2px">
                                <span style="font-size: 1em; font-weight:600;">Your worksetu</span>
                                <span>worksetu-tdq3097.slack.com</span>
                            </div>
                        </div>
                        <div class="mid-content">
                            <div class="column"
                                style="border-bottom: 1px solid grey; padding:10px; position:relative" ;>
                                <span class="invite dropdown-trigger" tabindex="0"
                                    style="cursor: pointer;">Invite people to your
                                    slack</span>
                                <!-- invite-pop-up -->
                                <div class="invite-people popup-container dropdown">
                                    <div class="column">
                                        <span style="font-size:1em; font-weight:600 ">Invite people</span>
                                        <span style="font-size:0.7em; font-weight:600 ">To:</span>
                                        <textarea type="text" placeholder="name@gmail.com"></textarea>
                                        <div class="row" style="justify-content: space-between;">
                                            <div class="row">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-link-45deg"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path
                                                        d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                                <a style="font-size:1em; color:var(--text-color)" href="">Copy
                                                    invite link</a>
                                            </div>
                                            <div class="column">
                                                <button class="button" style=" font-size:16px">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="create-pop dropdown-trigger" tabindex="0"
                                    style="cursor: pointer;">Create channel</span>
                                <div class="create-channel-popup popup-container dropdown">
                                    <div class="column">
                                        <span style="font-size:1em; font-weight:600 ">Create channel</span>
                                        <span style="font-size:0.7em; font-weight:600 ">Name</span>
                                        <input class="input" type="text" placeholder="e.g Plan finance">
                                        <span>Channels are where conversations happen around a topic. Use a name
                                            that is easy to find and
                                            understand.</span>
                                        <div class="row" style="justify-content: space-between;">
                                            <div class="column" style="width: 100%;">
                                                <button class="button" style=" font-size:16px;">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column"
                                style="border-bottom: 1px solid grey; padding:10px; position:relative" ;>
                                <span class="setting-and-admin dropdown-trigger" tabindex="0"
                                    style="cursor: pointer;">Setting and
                                    administration</span>
                                <!-- setting-and-administration popup -->
                                <div class="setting-adminitration-popup dropdown" style="position: absolute;
                                width: 300px;
                                left: 0;">
                                    <div class="column">
                                        <div class="column"
                                            style="border-bottom: 1px solid grey; padding:10px; " ;>
                                            <span
                                                style="font-size: 0.7em; color:var(--sub-text-color)">Setting</span>
                                            <span>Workspace setting</span>
                                            <span>Customize your slack</span>
                                            <span class="edit-workspace-button" style="cursor: pointer;">Edit
                                                workspace detail</span>
                                        </div>
                                        <div class="column"
                                            style="border-bottom: 1px solid grey; padding:10px; margin-top:-10px"
                                            ;>
                                            <span
                                                style="font-size: 0.7em; color:var(--sub-text-color)">Administration</span>
                                            <a href="manage.html" style="color:var(--text-color)"><span>Manage
                                                    member </span></a>
                                            <span>Manage apps</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column dropdown-holder"
                                style="border-bottom: 1px solid grey; padding:10px;" ;>
                                <span class="work-pop-up dropdown-trigger" tabindex="0"
                                    style="cursor: pointer;">Add workspace</span>
                                <!-- add workspace -->
                                <div class="add-workspace-popup dropdown" style="width: 200px; ">
                                    <div class="column">
                                        <span style="font-size: 0.7em; color:var(--sub-text-color)">Add
                                            workspace</span>
                                        <a href="index.html" style="color:var(--text-color)"><span>Sign in
                                                another worspace</span></a>
                                        <a href="create.html" style="color:var(--text-color)"><span>Create new
                                                worspace</span></a>
                                        <a href="create.html" style="color:var(--text-color)"><span>Join
                                                workspace</span></a>
                                    </div>
                                </div>
                                <span class="switch-button dropdown-trigger" tabindex="0"
                                    style="cursor: pointer;">Switch workspace</span>

                                <div class="switch-workspace-popup dropdown" style=" ">
                                    <div class="column">
                                        <span style="font-size:1em; font-weight:600 ">Edit workspace
                                            detail</span>
                                        <div class="row">
                                            <img class="img" src="img/profile.png" alt=""
                                                style=" width: 40px; height:40px; border-radius:0.5em; cursor:pointer;">
                                            <div class="column" style="gap:2px">
                                                <span style="font-size: 0.8em;">Enjoyment</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <img class="img" src="img/profile.png" alt=""
                                                style=" width: 40px; height:40px; border-radius:0.5em; cursor:pointer;">
                                            <div class="column" style="gap:2px">
                                                <span style="font-size: 0.8em;">Finance</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <img class="img" src="img/profile.png" alt=""
                                                style=" width: 40px; height:40px; border-radius:0.5em; cursor:pointer;">
                                            <div class="column" style="gap:2px">
                                                <span style="font-size: 0.8em; ">Testing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="button" style="width: 10px; font-size:16px">Sign out</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="dropdown-holder">
                <svg class="dropdown-trigger" tabindex="0" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
                <!-- workspace-detail popup-container -->
                <div class="workspace-detail popup-container dropdown">
                    <div class="column" style="gap:0.5em">
                        <h2>Edit work space detail</h1>
                            <span>Workspace name</span>
                            <input class="input" type="text">
                            <span>URL</span>
                            <input class="input" type="text" placeholder="https://hi-tdq5698.slack.com">
                            <div class="row" style="width: 100%;">
                                <button
                                    style=" width: 50%;background-color:var(--bg-color);color:var(--text-color); border:0.5px solid var(--primary-color)"
                                    class="button" data-action="cancel">Cancel</button>
                                <button style="width: 50%; " class="button">Save</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="row">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chat-text" viewBox="0 0 16 16">
                <path
                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path
                    d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
            </svg>
            <span>Thread</span>
        </div>
        <div class="row">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-bookmark-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>
            <span>Saved Items</span>
        </div>
    </div>
    <!-- channel -->

    <div class="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
        <h5>Channel</h5>
    </div>


    <div class="column">
        <div class="row">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-file-lock" viewBox="0 0 16 16">
                <path
                    d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z" />
                <path
                    d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
            <span>Design Worksetu</span>
        </div>
        <div class="row" style="gap:2em">

            <div class="row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-hash" viewBox="0 0 16 16">
                    <path
                        d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                </svg>
                <span>Production</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-2-circle" viewBox="0 0 16 16">
                <path
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
            </svg>

        </div>
        <div class="row" style="gap:2em">

            <div class="row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-hash" viewBox="0 0 16 16">
                    <path
                        d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                </svg>
                <span>Dev</span>
            </div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
              </svg> -->

        </div>
        <div class="row" style="gap:2em">

            <div class="row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-hash" viewBox="0 0 16 16">
                    <path
                        d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                </svg>
                <span>Music</span>
            </div>
        </div>
        <div class="row" style="gap:2em">
            <div class="row add-channel" style="cursor:pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <span>Add channel</span>
            </div>
        </div>
        <div class="row" style="gap:2em">
            <div class="row add-channel" style="cursor:pointer;">
                <img style="width: 20px; height:20px" src="img/chatgpt-4.png" alt="">
                <span>Reply using ChatGpt</span>
            </div>
        </div>
    </div>
</div>
    
    `;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));



    const menu = shadowRoot.querySelector(".menu-sidebar");
    const sideBar = shadowRoot.querySelector(".sidebar");
    let isMenuOpen = false;

    menu.addEventListener("click", () => {
      if (isMenuOpen) {
        sideBar.style.display = "none";
        isMenuOpen = false;
      } else {
        sideBar.style.display = "block";
        isMenuOpen = true;
      }
    });

    // All pop up code here
    this.signOutButton = shadowRoot.querySelector(".button");

  }


}

customElements.define("side-bar", SideBar);
