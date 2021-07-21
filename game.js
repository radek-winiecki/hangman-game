let password = "Practise makes perfect";
password = password.toUpperCase();

function write_password() {
    document.getElementById("board").innerHTML = password;
}

window.onload = write_password;