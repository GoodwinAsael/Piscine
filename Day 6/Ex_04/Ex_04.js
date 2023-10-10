function updateLicensePlates(agent, plate) {
    // Ajoute une nouvelle propriété appelée 'licensePlates' à l'intérieur de la propriété 'car'
    agent.car = { ...agent.car, licensePlates: plate };
    return agent;
}

function showLicensePlates(agent) {
    // Crée une balise <ul> avec des balises <li> pour chaque plaque d'immatriculation
    let ul = document.createElement('ul');
    agent.car.licensePlates.forEach(plate => {
        let li = document.createElement('li');
        li.textContent = plate;
        ul.appendChild(li);
    });
    return ul.outerHTML;
}
