// photo-cropper.js
class PhotoCropper extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="style.css">
       <div class="cropper-image-container">
        <div class="img-box">
            <img src="img/receiver.jpeg" alt="" id="originalImage">
            <div class="button-continue">
                <label for="imageInput" class="button">
                    <span>Upload photo</span>
                </label>
                <input type="file" id="imageInput" accept="image/*">

            </div>
        </div>
        <div class="crop-popup" id="cropPopup">
            <div class="crop-container">
                <img src="" alt="" id="cropImage">
                <div class="two-button">
                    <button class="button" id="saveCrop">Save</button>
                    <button class="button" id="cancelCrop">Cancel</button>
                </div>
            </div>
        </div>
    </div> 
  
  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js"></script>
      `;
    }
  
    connectedCallback() {
      const imageInput = this.shadowRoot.getElementById("imageInput");
      const originalImage = this.shadowRoot.getElementById("originalImage");
      const cropPopup = this.shadowRoot.getElementById("cropPopup");
      const cropImage = this.shadowRoot.getElementById("cropImage");
      const saveCropButton = this.shadowRoot.getElementById("saveCrop");
      const cancelCrop = this.shadowRoot.getElementById("cancelCrop");
      let cropper;
  
      imageInput.addEventListener("change", () => {
        if (imageInput.files && imageInput.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e) {
            originalImage.src = reader.result;
            cropPopup.style.display = "flex";
            if (cropper) {
              cropper.destroy();
            }
            cropper = new Cropper(cropImage, {
              aspectRatio: 1,
              viewMode: 1,
            });
            cropper.replace(reader.result);
          };
          reader.readAsDataURL(imageInput.files[0]);
        }
      });
  
      saveCropButton.addEventListener("click", () => {
        const croppedCanvas = cropper.getCroppedCanvas({
          width: 300,
          height: 300,
        });
        const croppedImage = croppedCanvas.toDataURL();
        originalImage.src = croppedImage;
        cropPopup.style.display = "none";
      });
  
      cancelCrop.addEventListener("click", () => {
        cropPopup.style.display = "none";
        imageInput.value = '';
        originalImage.src = '';
        if (cropper) {
          cropper.destroy();
        }
      });
    }
  }
  
 
  customElements.define("photo-cropper", PhotoCropper);
  