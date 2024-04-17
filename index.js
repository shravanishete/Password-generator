const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&|";

const lengthE1 = document.getElementById("length");
const lowercaseE1 = document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numbersE1 = document.getElementById("number");
const generatorE1 = document.getElementById("generator");
const symbolsE1 = document.getElementById("symbols");
const passE1 = document.getElementById("pass");

generatorE1.addEventListener("click", function () {
    const length = lengthE1.value;
    let character = "";
    let pass = "";

    if (lowercaseE1.checked) {
        character += lower;
    }
    if (uppercaseE1.checked) {
        character += upper;
    }
    if (numbersE1.checked) {
        character += number;
    }
    if (symbolsE1.checked) {
        character += symbol;
    }
    for (let i = 0; i < length; i++) {
        pass += character.charAt(Math.floor(Math.random() * character.length));
    }
    passE1.value = pass;
});

