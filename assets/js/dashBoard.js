
import { createCards } from '../js/createCards.js';
import { addToCart ,updateCartCount  } from '../js/cart.js';
import { getAllFlight , getUser , updateFlights, updateUser } from "./getterAndSetter.js";


    const cart = JSON.parse(localStorage.getItem('carts'));
    const flights = getAllFlight();
    const user = getUser();
    const flightsList = document.getElementById("list");
  

    export function displayFlights(items) {
        flightsList.innerHTML = "";
        items.forEach((flight, index) => {
            if(cart){
              const findIndex = cart.findIndex(c => c.id == flight.id);
              if(findIndex == -1){
                createCards(false , flight , index);
              }
            }
            else{
              createCards(false , flight , index);
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
      
      document.querySelector("#linkFourthItem")&& document.querySelector("#linkFourthItem").addEventListener('click', function(event) {
        event.preventDefault();
        if(!(JSON.parse(localStorage.getItem('carts')))){
          alert("The cart is Empty");
        }
        else{
         location.href = "cart.html" ;
        }
      });
      
  });

  

  document.addEventListener("DOMContentLoaded", function() {
      const addToCartButtons = document.querySelectorAll(".addToCart");
       addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("clicked");
          addToCart(flights[index]);
          updateCartCount((flights[index].id)-1);
          
          location.href = "cart.html" ;
        });
      });
    });
    
  if(document.querySelector("#showAll")){
    document.querySelector("#showAll").addEventListener('click', function(event) {
      event.preventDefault();
      displayFlights(flights);
    })
    if(user.isAdmin){
      const addButton = document.querySelector("#addButton");
      addButton.style.display = "block";
    }
    document.querySelector("#addButton").addEventListener('click', function(event) {
      event.preventDefault();
      location.href="addFlight.html";
    })

  }

displayFlights(flights); 
    

  

 