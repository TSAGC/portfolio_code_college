let numberOfGuesses = 5;
let displayWord = [];
let randomWord = "";
let yourword = "";
let duplicates = [];
let add = 0;
let dup = false

function generate_word() {
    let randomWordsObject = {
        1: ['apple'],
        2: ['banana'],
        3: ['cherry'],
        4: ['orange'],
        5: ['grape'],
        6: ['watermelon'],
        7: ['pineapple'],
        8: ['strawberry'],
        9: ['blueberry'],
        10: ['kiwi'],
        11: ['peach'],
        12: ['mango'],
        13: ['pear'],
        14: ['plum'],
        15: ['apricot'],
        16: ['lemon'],
        17: ['lime'],
        18: ['coconut'],
        19: ['papaya'],
        20: ['fig'],
        21: ['date'],
        22: ['avocado'],
        23: ['blackberry'],
        24: ['raspberry'],
        25: ['cranberry'],
        26: ['boysenberry'],
        27: ['elderberry'],
        28: ['gooseberry'],
        29: ['dragonfruit'],
        30: ['guava'],
        31: ['lychee'],
        32: ['passionfruit'],
        33: ['starfruit'],
        34: ['persimmon'],
        35: ['pomegranate'],
        36: ['quince'],
        37: ['tangerine'],
        38: ['nectarine'],
        39: ['cantaloupe'],
        40: ['honeydew'],
        41: ['jackfruit'],
        42: ['kumquat'],
        43: ['mulberry'],
        44: ['rhubarb'],
        45: ['soursop'],
        46: ['kiwifruit'],
        47: ['acai'],
        48: ['plantain'],
        49: ['breadfruit'],
        50: ['ackee']
    };

    let randomIndex = Math.floor(Math.random() * 50) + 1;
    randomWord = randomWordsObject[randomIndex][0];
    console.log(randomWord);
    alert("new word generated");
    for (let index = 0; index < randomWord.length; index++) {
        displayWord[index] = " " + "_";
    }
    console.log(displayWord);
}

function check() {
    let word = document.getElementById("letterInput").value.toLowerCase();
    for (let index = 0; index < duplicates.length; index++) {

        if (duplicates[index] == word) {
            dup = true;
        }
    }

    if (dup == false) {

        let correctGuess = false;
        dup = false;
        for (let letterIndex = 0; letterIndex < randomWord.length; letterIndex++) {
            if (word === randomWord[letterIndex]) {
                displayWord[letterIndex] = word;
                correctGuess = true;
            }
        }

        if (displayWord.join("") === randomWord) {
            alert("You won!");
            endgame();
        }

        if (!correctGuess) {
            numberOfGuesses--;
            alert("Incorrect guess. " + numberOfGuesses + " guesses left.");
        }

        console.log(displayWord);
        console.log("Number of guesses left: " + numberOfGuesses);
        document.getElementById("letterInput").value = "";
        display_answer();

        if (numberOfGuesses < 1) {
            endgame();
        }

        duplicates.push(word);
        add++;

    } else {
        alert("you have already guessed that letter");
        dup = false;
    }
}

function endgame() {
    randomWord = "";
    displayWord = [];
    numberOfGuesses = 5;
    document.getElementById("words").innerHTML = '';
    let yourword = "";
}

function display_answer() {
    let yourword = "";
    for (let q = 0; q < displayWord.length; q++) {
        yourword += displayWord[q] + " ";
    }
    document.getElementById("words").innerHTML = ":" + yourword;
}