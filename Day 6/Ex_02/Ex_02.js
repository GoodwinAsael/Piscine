function addCar(agentString, car) {

    let agent = JSON.parse(agentString);


    agent.car = car;


    return agent;
}
let agentString = '{"name":"John Doe","age":30}';
let car = "Tesla";
let updatedAgent = addCar(agentString, car);
console.log(updatedAgent);