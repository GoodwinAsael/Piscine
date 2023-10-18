window.onload = function() {
    const form = document.querySelector(".form");
    form.addEventListener("submit", handleSubmit);
}



function handleSubmit(event) {
    event.preventDefault();



    let prenom = document.getElementById("Prénom").value;
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let motDePasse = document.getElementById("mot_de_passe").value;



    if (prenom === "") {
        alert("Le prénom ne doit pas être vide");
        document.getElementById("error").innerHTML = "Le prénom ne doit pas être vide";
        return;
    }
    if (nom === "") {
        alert("Le nom ne doit pas être vide");
        document.getElementById("error").innerHTML = "Le nom ne doit pas être vide";
        return;
    }
    if (!/^[\w.-]+@[\w.-]+\.[\w.-]+$/.test(email)) {
        alert("L'email est mal formaté");
        document.getElementById("error").innerHTML = "L'email est mal formaté";
        return;
    }
    if (motDePasse.length <= 7 || !/[a-zA-Z]/.test(motDePasse) || !/\d/.test(motDePasse)) {
        alert("Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre et un chiffre");
        document.getElementById("error").innerHTML = "Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre et un chiffre";
    }
}