// class ReceiverComponent extends HTMLElement {
//   constructor() {
//     super();

//     const template = document.createElement('template');
//     template.innerHTML = `
//       <link rel="stylesheet" href="style.css">
//       <div class="container">
//         <div class="row receiver">
//           <img class="img" src="receiver.jpeg" alt="">
//           <div class="column" style="gap: 0.3em;">
//             <div class="row">
//               <span class="message-owner"></span>
//               <span class="message-time"></span>
//             </div>
//             <span class="messagetext receiver-text"></span>
//           </div>
//         </div>
//       </div>
//     `;

//     const shadowRoot = this.attachShadow({ mode: 'open' });
//     shadowRoot.appendChild(template.content.cloneNode(true));
//   }

//   setElementData(data) {
//     const shadowRoot = this.shadowRoot;
//     const ownerElement = shadowRoot.querySelector('.message-owner');
//     const timeElement = shadowRoot.querySelector('.message-time');
//     const textElement = shadowRoot.querySelector('.receiver-text');

//     ownerElement.textContent = data.owner || '';
//     timeElement.textContent = data.time || '';
//     textElement.textContent = data.text || '';
//   }
// }

// customElements.define('receiver-component', ReceiverComponent);


// const receiverElement = document.getElementById('receiver');
// const messageData = {
//   owner: 'John',
//   time: '12:34 PM',
//   text: 'Hello! how are you'
// };

// receiverElement.setElementData(messageData);
