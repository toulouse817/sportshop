// Get all product elements using querySelectorAll
const products = document.querySelectorAll('.product');

// Get the popup element using getElementById
const popup = document.getElementById('myPopup');

// Get the close button element using querySelector
const closeBtn = document.querySelector('.close');

// Loop through each product element
products.forEach(product => {
  // Add a click event listener to each product element
  product.addEventListener('click', () => {
    // Get the ID of the clicked product
    const clickedProductId = product.id;

    // Get the image element inside the popup
    const popupImg = popup.querySelector('img');

    // Get the image element of the clicked product
    const productImg = product.querySelector('img');

    // Get the large image URL from the clicked product's data-image attribute
    const largeImageUrl = productImg.dataset.image;

    // Set the source of the popup image to the large image URL
    popupImg.src = largeImageUrl;

    // Display the popup by setting its display property to 'block'
    popup.style.display = 'block';
  });
});

// Add a click event listener to the close button
closeBtn.addEventListener('click', () => {
  // Hide the popup by setting its display property to 'none'
  popup.style.display = 'none';
});
