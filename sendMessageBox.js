class SendMessageBoxComponent extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
        <link rel="stylesheet" href="style.css">
        <div class="row sender">
          <div class="column" style="gap: 0.3em;">
            <div class="row sender-name-time">
              <span class="message-owner"></span>
              <span class="message-time"></span>
            </div>
            <span class="messagetext sender-text"></span>
          </div>
          <img class="img" src="sender.png" alt="">
        </div>`;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    setSendMessageData(data) {
      const shadowRoot = this.shadowRoot;
      const ownerElement = shadowRoot.querySelector(".message-owner");
      const timeElement = shadowRoot.querySelector(".message-time");
      const textElement = shadowRoot.querySelector(".sender-text");
  
      ownerElement.textContent = data.owner || "";
      timeElement.textContent = data.time || "";
      textElement.textContent = data.text || "";
    }
  }
  
  customElements.define("send-messagebox", SendMessageBoxComponent);

  