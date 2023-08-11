// receiver-component.js


class ReceiverComponent extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
  
          .row {
            display: flex;
            gap: 0.5em;
            align-items:center;
          }
          .column {
            display: flex;
            flex-direction: column;
            
          }
          .receiver {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            max-width: 100%;
          }
          .container{
            width: 100%;
            margin: auto;
          
          }
          .messagetext {
            line-height: 1.5em;
            font-size: 16px;
            font-weight: 400;
          }
          .img {
            width: 40px;
            height: 40px;
            border-radius: 2em;
            cursor: pointer;
          }
          .message-owner {
            font-weight: 600;
          }
          .message-time {
            font-size: 0.7em;
            color: grey;
            font-weight: 400;
          }
          .receiver-text {
            padding: 1em;
            background-color: rgba(158, 154, 159, 0.1);
            border-top-right-radius: 1em;
            border-bottom-right-radius: 1em;
            border-bottom-left-radius: 1em;
          }
        </style>
        <div class="container">
        <div class="row receiver">
          <img class="img" src="receiver.jpeg" alt="">
          <div class="column" style="gap: 0.3em;">
            <div class="row">
              <span class="message-owner"></span>
              <span class="message-time"></span>
            </div>
            <span class="messagetext receiver-text"></span>
          </div>
        </div>
        </div>
      `;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      const shadowRoot = this.shadowRoot;
      const ownerElement = shadowRoot.querySelector('.message-owner');
      const timeElement = shadowRoot.querySelector('.message-time');
      const textElement = shadowRoot.querySelector('.receiver-text');
      const status = shadowRoot.querySelector('.status');
  
  
      ownerElement.textContent = this.getAttribute('owner') || '';
      timeElement.textContent = this.getAttribute('time') || '';
      textElement.textContent = this.getAttribute('text') || '';
   
    }
  }
  
  customElements.define('receiver-component', ReceiverComponent);
  