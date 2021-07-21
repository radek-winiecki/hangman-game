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

let letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start() {
    let div_content = "";
    for (i = 0; i <= 34; i++) {
        div_content = div_content + '<div class="letter">' + letters[i] + '</div>';
        if ((i + 1) % 7 === 0) {
            div_content = div_content + '<div style="clear:both;"></div>';
        }
    }

    document.getElementById("alphabet").innerHTML = div_content;

    write_password();
}