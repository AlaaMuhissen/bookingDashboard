import { flights } from '../data/flight.js';
import { createCards } from '../js/createCards.js';
import { addToCart , carts,updateCartCount  } from '../js/cart.js';
    
      
       
        const flightsList = document.getElementById("list");
     
        // Function to display flights
        function displayFlights(items) {
            flightsList.innerHTML = "";
            items.forEach((flight, index) => {
              const findIndex = carts.findIndex(c => c.id == flight.id);
              if(findIndex == -1){
                createCards(false , flight , index);
               
            
              }
             
            });
        }

        displayFlights(flights);
        const addToCartButtons = document.querySelectorAll(".addToCart");

        addToCartButtons.forEach((button, index) => {
          button.addEventListener("click", (e) => {
            e.preventDefault();
            addToCart(flights[index]); // Add the selected flight to the cart
            updateCartCount(index); // Update the cart count display or perform other actions
          });
        });

    

        