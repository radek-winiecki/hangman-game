let password = "Practise makes perfect";
password = password.toUpperCase();

let length = password.length;
let password1 = "";

for (i = 0; i < length; i++) {
    if (password[i] === " ") {
        password1 = password1 + " ";
    } else {
        password1 = password1 + "-";
    }
}

function write_password() {
    document.getElementById("board").innerHTML = password1;
}

window.onload = write_password;