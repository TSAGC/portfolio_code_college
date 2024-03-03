document.getElementById("lefteye").style.backgroundColor = "purple";

function lookRight() {
    document.getElementById("lefteye").style.left = "40%";
    document.getElementById("righteye").style.left = "0%";
}

// lookRight();

function lookStright() {
    document.getElementById("lefteye").style.left = "50%";
    document.getElementById("righteye").style.left = "10%";
}



function lookLeft() {
    document.getElementById("lefteye").style.left = "60%";
    document.getElementById("righteye").style.left = "20%";
}

function smile() {
    document.getElementById("mouth").style.borderBottomLeftRadius = "50px";
    document.getElementById("mouth").style.borderBottomRightRadius = "50px";
}

function dontSmile() {
    document.getElementById("mouth").style.borderBottomLeftRadius = "0";
    document.getElementById("mouth").style.borderBottomRightRadius = "0";
}

function tiltLeft() {
    document.getElementById("head").style.transform = "rotate(15deg)";
}
tiltLeft();

function tiltRight() {
    document.getElementById("head").style.transform = "rotate(-15deg)";
}
tiltRight()

function dontTilt() {
    document.getElementById("head").style.transform = "rotate(0deg)";
}
dontTilt()


var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveLeft);

function moveLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10); 

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 71) {
            clearInterval(id);
        }
    }
}

var rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click", moveRight);

function moveRight(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10); 

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 21) {
            clearInterval(id);
        }
    }
}

// var head = document.getElementById("head");
// head.addEventListener("click", moveHead);

// function moveHead(e) {
//     var head = e.target;
//     var left = 0;
//     var id = setInterval(frame, 10); 

//     function frame() {
//         head.style.left = left + '%';
//         left++;
//         if (left === 33) {
//             clearInterval(id);
//         }
//     }
// }