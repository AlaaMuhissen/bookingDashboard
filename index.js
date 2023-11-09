const signIn = document.querySelector("#signIn");

signIn.addEventListener("click", function(event) {
    event.preventDefault();
    location.href = "login.html";
});