import { getAllFlight , getUser , updateFlights, updateUser } from "./getterAndSetter.js";

const allFlight = getAllFlight();
const userData = getUser();


document.querySelector('#loginForm') && document.querySelector('#loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const isAdmin = document.getElementById('isAdmin').checked;
    
  
    const isUser = userData.findIndex((user)=> user.username == email);

  
    
    if((isUser != -1) && (userData[isUser].password == password)){
      updateUser(userData[isUser]);
      updateFlights(allFlight);
      location.href = "dashboard.html";
      alert(`Welcome back ${userData[isUser].name}`);
    }
    else{  alert(`signup first`);
        // alert(`sth wrong, please check ur email&password`);
    }
    
  });





