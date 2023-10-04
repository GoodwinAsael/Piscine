let housingToFind = "Igloo";
let housingList = ["Flat", "House", "Hut", "House", "Igloo"];

function findHousing(housingToFind, housingList) {
    let i = 0;
    while (i < housingList.length) {
        if (housingList[i] === housingToFind) {
            return "Le logement " + housingToFind + " a été trouvé dans la liste.";
        }
        i++;
    }
    return "Le logement " + housingToFind + " n'a pas été trouvé dans la liste.";
}