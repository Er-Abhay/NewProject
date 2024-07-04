// Change main product image
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
 }
 // Increment quantity
 function increment() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
 }
 // Decrement quantity
 function decrement() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
 }
 // Calculate discount percentage
 function calculateDiscount(originalPrice, discountedPrice) {
    let discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.round(discount);
 }
 // Display Add to Cart message
 function addToCart() {
    let size = document.querySelector('input[name="size"]:checked').id;
    console.log(size)
    // let quantity = document.getElementById('quantity').value;
    // let color = document.querySelector('.color.selected').style.backgroundColor;
    // let message = `Added to cart: ${quantity} item(s), Size: ${size.toUpperCase()}, Color: ${color}`;
    // document.getElementById('cart-message').innerText = message;
    // document.getElementById('cart-message').style.display = 'block';
 }
 // Add event listeners to color options
 document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.color').forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
    });
 });
 // Initialize discount calculation
 document.addEventListener('DOMContentLoaded', (event) => {
    let originalPrice = 19999;
    let discountedPrice = 12999;
    document.querySelector('.discount').innerText = `${calculateDiscount(originalPrice, discountedPrice)}% Off`;
 });