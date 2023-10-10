class Voiture {
    constructor(couleur, marque, modele) {
        this.couleur = couleur;
        this.marque = marque;
        this.modele = modele;
    }

    logInfo() {
        console.log(`Informations sur la voiture : ${this.couleur}, ${this.marque}, ${this.modele}`);
    }
}class Agent {
    constructor(nom, code, age, voiture) {
        this.nom = nom;
        this.code = code;
        this.age = age;
        this.voiture = voiture;
    }

    logInfo() {
        console.log(`Informations sur l'agent : ${this.nom}, ${this.code}, ${this.age}`);
        this.voiture.logInfo();
    }
}

let voiture = new Voiture("gris", "Aston Martin", "DB5");
let agent = new Agent("James Bond", "007", 57, voiture);

agent.logInfo();
agent.voiture.logInfo();