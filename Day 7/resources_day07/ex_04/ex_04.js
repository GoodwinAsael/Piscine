document.addEventListener("DOMContentLoaded", function() {
    const plusButtons = document.getElementsByClassName("plus-btn");
    const minusButtons = document.getElementsByClassName("minus-btn");
    const deleteButtons = document.getElementsByClassName("delete-btn");
    const likeButtons = document.getElementsByClassName("like-btn");

    // Ajouter un gestionnaire d'événements pour les boutons +
    Array.from(plusButtons).forEach(function(button) {
        button.addEventListener("click", function() {
            const quantityInput = button.nextElementSibling;
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
        });
    });

    // Ajouter un gestionnaire d'événements pour les boutons -
    Array.from(minusButtons).forEach(function(button) {
        button.addEventListener("click", function() {
            const quantityInput = button.previousElementSibling;
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
            }
        });
    });

    // Ajouter un gestionnaire d'événements pour les boutons x
    Array.from(deleteButtons).forEach(function(button) {
        button.addEventListener("click", function() {
            const item = button.parentElement.parentElement;
            item.remove();
        });
    });

    // Ajouter un gestionnaire d'événements pour les boutons heart
    Array.from(likeButtons).forEach(function(button) {
        button.addEventListener("click", function() {
            const item = button.parentElement.parentElement;
            item.classList.toggle("is-active");
        });
    });
});
