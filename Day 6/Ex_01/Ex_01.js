function displayAgentInfo(agent) {
    var info = "<p>Mon nom est " + agent.nom + ", " + agent.prenom + " " + agent.code + "! Je suis l'agent " + agent.code + " et j'ai " + agent.age + " ans.</p>";
    document.getElementById("agentInfo").innerHTML = info;
}


var agent = {
    age: 57,
    code: "007",
    prenom: "James",
    nom: "Bond"
};

displayAgentInfo(agent);

<p id="agentInfo"></p>
