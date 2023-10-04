fruitName = ["Blackberry", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitIndex(banana) {
    const fruits = ["Blackberry", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
    return fruits.indexOf(banana);
}
function displayResult(result) {
    console.log(result);
}
displayResult(getFruitIndex("banane"))