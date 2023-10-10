let currentRotation = 0;
function rotateCircle(step) {
    currentRotation += step;
    let circle = document.getElementById("circle");
    circle.style.transform = `rotate(${currentRotation}deg)`;
}


function reset() {
    let circle = document.getElementById("circle");
    circle.style.transform = "rotate(0deg)";
    currentRotation = 0;
}


let buttons = document.getElementsByClassName('rotate-button');


for (let i = 0; i < buttons.length; i++) {
    // Add event listener to each button
    buttons[i].addEventListener('click', function() {

        if (this.value === '0') {
            reset();
        } else {
            // Else it will follow rotation
            rotateCircle(parseInt(this.value));
        }
    })
}