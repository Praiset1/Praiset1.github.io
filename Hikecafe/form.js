
function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name.length < 5 ) {
        alert("Invalid name");
        return false;
    } else if (email.length < 5 ) {
        alert("Invalid email");
        return false;
    } else if (password.length < 5 ) {
        alert("Password should be aleast 5 characters");
        return false;
    } else {
        return true;
    }
}
function registrationForm() {
        let userEmail = document.getElementById("email").value;
        let userPassword = document.getElementById("password").value;
        let email = ["jane@gmail.com","naggayi@gmail.com"];
        let paswrd = ["1234", "3456"];
        for(let i = 0; i < email.length; i++) {
            if (userEmail == email[i] && userPassword == paswrd[i]) {
                alert("Successfully logged in");
                return true;
            } else {
                alert("Invalid email or password");
                return false;
            }
        }
    }function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name.length < 5 ) {
        alert("Invalid name");
        return false;
    } else if (email.length < 5 ) {
        alert("Invalid email");
        return false;
    } else if (password.length < 5 ) {
        alert("Password should be aleast 5 characters");
        return false;
    } else {
        return true;
    }
}
function loginForm() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let email = ["jane@gmail.com","naggayi@gmail.com"];
        let paswrd = ["1234", "3456"];
        for(let i = 0; i < email.length; i++) {
            if (email == email[i] && password == paswrd[i]) {
                alert("Successfully logged in");
                return true;
            } else {
                alert("Invalid email or password");
                return false;
            }
        }
    }

    