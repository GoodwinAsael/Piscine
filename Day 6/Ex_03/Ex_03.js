function addCarToAgent(agent, marque, modele, couleur, puissance) {

    if (typeof (agent) !== 'objet' ||
        typeof (marque) !== 'string' ||
        typeof (modele) !== 'string' ||
        typeof (couleur) !== 'string' ||
        typeof (puissance) !== 'string' ) {
        console.error("Erreur : une ou plusieurs clés sont manquantes ou mal saisies.");
        return null;
    }


    agent.car = {
        marque: marque,
        modele: modele,
        couleur: couleur,
        puissance: puissance
    };


    shareThatBeauty(agent);


    return agent;
}
    let agent = {name: "Mr. Bond"};
let marque = "Aston Martin";
let modele = "DB5";
let couleur = "Silver Birch";
let puissance = "282 HP";
let updatedAgent = addCarToAgent(agent, marque, modele, couleur, puissance);
if (updatedAgent != null) {
    console.log(updatedAgent);
}