const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const name = document.querySelector("#name").value;
    const isAdmin = document.querySelector("#isAdmin").checked;

    const userinfo = {
        email: email,
        name: name,
        isAdmin: isAdmin
    };

    // Store user data in local storage
    localStorage.setItem("userinfo", JSON.stringify(userinfo));

    // Redirect or perform other actions after successful login
    // For now, we'll simply display an alert
    alert("Login successful!");
});