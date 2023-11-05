
import { flights } from '../data/flight.js';
import { createCards } from '../js/createCards.js';


const popup = document.getElementById("popup");
const cartItems = document.getElementById("list");
const totalAmount = document.getElementById("total-amount");
const flightsList = document.getElementById("list");

// cart.js

// Function to get the cart from localStorage
function getCart() {
    const cartJSON = localStorage.getItem('carts');
    return JSON.parse(cartJSON) || [];
  }
  
  // Function to update and save the cart to localStorage
  function updateCart(cart) {
    const findIndex = carts.findIndex(c => c.id == cart.id);
    if(findIndex == -1)
    {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('carts', cartJSON);
    }  
  }
  
  // Initialize the cart
  let carts = getCart();
  
  // Function to add a flight to the cart
  function addToCart(flight) {
    carts.push(flight);
    updateCart(carts);
  }
  
  // Function to remove a flight from the cart
  function removeFromCart(index) {
    carts.splice(index, 1);
    updateCart(carts);
  }
  

  

function updateCartDisplay() {
    console.log(`Cart ${carts}`);
    if(!carts ){
        alert("There is No empty");
        location.href = "dashboard.html";
    }
    else{
        cartItems.innerHTML = "";
        let totalPrice = 0;
        carts.forEach((cart, index) => {
            createCards (true , cart , index);
            // console.log(carts);
            // cartItems.appendChild(cartItem);
            // totalPrice += flight.price * (flight.travelers || 1);
        });
    
      //  totalAmount.textContent = `$${totalPrice}`;
    }
   
}


function updateCartCount(index) {
    const cartCount = carts.length;
    if (cartCount > 0) {
        document.querySelector("#cartCount").textContent = cartCount;
        document.querySelector("#cartCount").style.display = "block";
        flightsList.removeChild( document.querySelector(`#card${index}`));
    } else {
        document.querySelector("#cartCount").style.display = "none";
    }
  
}
updateCartDisplay();
  // Export the functions and cart
  export { carts, addToCart, removeFromCart ,updateCartCount};