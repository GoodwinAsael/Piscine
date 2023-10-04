let peopleAtBusStop = 20;
let busSeats = 0;
function fillBus(peopleAtBusStops, busSeats) {
    let totalPeople = 0;
    for(let i = 0; i < peopleAtBusStops.length; i++) {
        totalPeople += peopleAtBusStops[i];
        if(totalPeople >= busSeats) {
            return i;
        }
    }
    return -1; // Retourne -1 si le bus n'est jamais plein
}

console.log(fillBus([1,3,10,1],12));