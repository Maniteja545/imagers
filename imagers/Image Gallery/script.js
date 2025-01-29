document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.getElementById("gallery-images");
    const addPhotoBtn = document.getElementById("add-photo-btn");
    const photoUrlInput = document.getElementById("photo-url");
  
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox .img img");
    const closeIcon = document.querySelector(".lightbox .close-icon");
  
    // Add new photo to the gallery
    addPhotoBtn.addEventListener("click", () => {
      const photoUrl = photoUrlInput.value.trim();
  
      if (photoUrl) {
        const newListItem = document.createElement("li");
        newListItem.classList.add("img");
  
        const newImage = document.createElement("img");
        newImage.src = photoUrl;
        newImage.alt = "img";
  
        newListItem.appendChild(newImage);
        galleryImages.appendChild(newListItem);
  
        // Add click event to the new image for preview
        newImage.addEventListener("click", () => {
          showLightbox(photoUrl);
        });
  
        // Clear the input field
        photoUrlInput.value = "";
      } else {
        alert("Please enter a valid image URL.");
      }
    });
  
    // Show lightbox with the selected image
    const showLightbox = (imgSrc) => {
      lightboxImg.src = imgSrc;
      lightbox.classList.add("active");
    };
  
    // Close lightbox
    closeIcon.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  
    // Add click event to existing images
    const images = document.querySelectorAll(".gallery .img img");
    images.forEach((img) => {
      img.addEventListener("click", () => {
        showLightbox(img.src);
      });
    });
  
    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  });
  