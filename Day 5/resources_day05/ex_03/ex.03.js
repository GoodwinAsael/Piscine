var paragraphes = document.querySelectorAll('p');

var nouvelElement = document.createElement('p');
nouvelElement.textContent = "Now featuring a head phone jack !";


for (var i = 0; i < paragraphes.length; i++) {
    if (paragraphes[i].parentNode) {
        paragraphes[i].parentNode.insertBefore(nouvelElement, paragraphes[i].nextSibling);
    }
}