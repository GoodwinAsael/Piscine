function reduireOpacite() {
    let square = document.getElementById('square');
    square.style.opacity = "0.5";
}

function reinitialiserOpacite() {
    let square = document.getElementById('square');
    square.style.opacity = "1";
}

document.getElementById('square').addEventListener("mouseover", reduireOpacite);
document.getElementById('square').addEventListener("mouseout", reinitialiserOpacite);