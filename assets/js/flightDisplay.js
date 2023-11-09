import { createCards } from '../js/createCards.js';
import { getMyFlights } from './cart.js';
import { getAllFlight} from "./getterAndSetter.js";

const myFlights = getMyFlights();
const flightItems = document.getElementById("list");
const allFlight = getAllFlight();

function displayUserFlight() {
    if (myFlights.length === 0) {
        flightItems.innerHTML = "";
    } else {
        flightItems.innerHTML = "";
      myFlights.forEach((flight, index) => {
        createCards(true, flight, index);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const cancelButton = document.querySelectorAll(".cancelButton");
    console.log(cancelButton);
    cancelButton.forEach((button, index) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const cartIndex = (e.target.id).id;
        removeFromCart(cartIndex); 
        updateCartCount(index); 
       
      });
    });
    
    });

    function removeFromCart(index) {
        console.log(`remove index ${index}`);
        flights.push(carts[index]);
        console.log(carts);
        carts.splice(index, 1);
        console.log(carts);
        updateCart(carts);
        displayTotalPrice(carts);
      }

      function updateCartCount(index) {
          const userFlightCount = myFlights.length;
          if (userFlightCount >= 0) {
              flightItems.removeChild( document.querySelector(`#card${index}`));
              if(userFlightCount == 0){
                alert("You havn't any flight ticket");
                location.href  = "dashboard.html";
              }
          } 
      }
      
      displayUserFlight(); 