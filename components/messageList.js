// class MessageListComponent extends HTMLElement {
//   constructor() {
//     super();
   
//     const template = document.createElement("template");
//     template.innerHTML = `
//       <link rel="stylesheet" href="style.css">
//       <div class="column" id="messageContainer"></div>
//     `;

//     const shadowRoot = this.attachShadow({ mode: "open" });
//     shadowRoot.appendChild(template.content.cloneNode(true));

//     this.renderMessages();
//   }

//   renderMessages() {
//     const messageContainer = this.shadowRoot.getElementById("messageContainer");

//     const messages = [
//       { owner: "Alice", time: "6:51 PM", text: "First message from component received" },
//       { owner: "Alice", time: "6:51 PM", text: "First message from component received" },
//       { owner: "You", time: "6:51 PM", text: " message from sender" },
//       { owner: "You", time: "7:05 PM", text: "Hello, this is a sender message" },
//       { owner: "Alice", time: "7:55 PM", text: "Reply to the first message" },
//       // Add more messages here
//     ];
//     messages.forEach(messageData => {
//       const messageBox = document.createElement("message-box");
//       messageBox.setMessageData(messageData);
//       messageContainer.appendChild(messageBox);
//     });
//   }
// }

// customElements.define("message-list", MessageListComponent);

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

    this.messageContainer = this.shadowRoot.getElementById("messageContainer");
  }

  addMessage(owner, text) {
    const messageBox = document.createElement("message-box");
    const messageData = {
      owner: owner,
      time: this.getCurrentTime(),
      text: text,
    };
    messageBox.setMessageData(messageData);
    this.messageContainer.appendChild(messageBox);
  }

  getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  // Render messages from the stored data
  renderMessages() {
    this.messages.forEach((messageData) => {
      const messageBox = document.createElement("message-box");
      messageBox.setMessageData(messageData);
      this.messageContainer.appendChild(messageBox);
    });
  }
}

customElements.define("message-list", MessageListComponent);