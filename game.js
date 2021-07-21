let password = "Practise makes perfect";
password = password.toUpperCase();

let length = password.length;
let password1 = "";

for (i = 0; i < length; i++) {
    if (password.charAt(i) === " ") {
        password1 = password1 + " ";
    } else {
        password1 = password1 + "-";
    }
}

function write_password() {
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

function start() {
    let div_content = "";
    for (i = 0; i <= 34; i++) {
        div_content = div_content + '<div class="letter">A</div>';
        if ((i + 1) % 7 === 0) {
            div_content = div_content + '<div style="clear:both;"></div>';
        }
    }

    document.getElementById("alphabet").innerHTML = div_content;

    write_password();
}