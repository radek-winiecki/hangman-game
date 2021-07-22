let password = "Practise makes perfect";
password = password.toUpperCase();

let length = password.length;
let password1 = "";

let missed_letters = 0;

let yes = new Audio("resources/yes.wav");
let no = new Audio("resources/no.wav");

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
        let element = "letter" + i;

        div_content = div_content + '<div class="letter" onclick="checkLetter(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 7 === 0) {
            div_content = div_content + '<div style="clear:both;"></div>';
        }
    }

    document.getElementById("alphabet").innerHTML = div_content;

    write_password();
}

String.prototype.setChar = function (place, character) {
    if (place > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0, place) + character + this.substr(place + 1);
    }
}

function checkLetter(number) {

    let hit_letter = false;
    // alert(number);
    for (i = 0; i < length; i++) {
        if (password.charAt(i) === letters[number]) {
            // alert(i);
            password1 = password1.setChar(i, letters[number]);
            hit_letter = true;
        }
    }
    if (hit_letter === true) {
        yes.play();
        let element = "letter" + number;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00c000";
        document.getElementById(element).style.border = "3px solid #00c000";
        document.getElementById(element).style.cursor = "default";

        write_password();
    } else {
        no.play();
        let element = "letter" + number;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#c00000";
        document.getElementById(element).style.border = "3px solid #c00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        // missed letters
        missed_letters++;
        let image = "img/s" + missed_letters + ".jpg";

        document.getElementById("hangman").innerHTML = '<img src="' + image + '" alt="" />';
    }
    // win
    if (password === password1) {
        document.getElementById("alphabet").innerHTML = "Congratulations! You guessed the password :) " + '<br/> <br/> <span class="reset" onclick="location.reload()">AGAIN?</span>';
    }

    // defeat
    if (missed_letters >= 9) {
        document.getElementById("alphabet").innerHTML = "You lost! The correct password: " + password + '<br/> <br/> <span class="reset" onclick="location.reload()">AGAIN?</span>';
    }
}