class MessageListComponent extends HTMLElement {
    constructor() {
      super();
     
      const template = document.createElement("template");
      template.innerHTML = `
      <link rel="stylesheet" href="style.css">
        <div class="column" id="messageContainer"></div>
      `;
  
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      this.renderMessages();
    }
  
    renderMessages() {
      const messageContainer = this.shadowRoot.getElementById("messageContainer");
  
      const messages = [
        { owner: "Alice", time: "6:51 PM", text: "First message from component received" },
        { owner: "Alice", time: "6:51 PM", text: "First message from component received" },
        { owner: "You", time: "6:51 PM", text: " message from sender" },
        { owner: "You", time: "7:05 PM", text: "Hello, this is a sender message" },
        { owner: "Alice", time: "7:55 PM", text: "Reply to the first message" },
        // Add more messages here
      ];
  
      // Sort messages based on time
      messages.sort((a, b) => new Date(a.time) - new Date(b.time));
  
      messages.forEach(messageData => {
        if (messageData.owner === "You") {
          const senderMessageBox = document.createElement("send-messagebox");
          senderMessageBox.setSendMessageData(messageData);
          messageContainer.appendChild(senderMessageBox);
        } else {
          const messageBox = document.createElement("message-box");
          messageBox.setMessageData(messageData);
          messageContainer.appendChild(messageBox);
        }
      });
    }
  }
  
  customElements.define("message-list", MessageListComponent);
  