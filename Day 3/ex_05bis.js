let fruits = ["strawberry", "strawberry", "strawberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"]
let nbFruit = 11

function getBasketContent(nbFruit){
    if ( nbFruit > fruits.length){
        console.log("too many fruit selected")
    } else {
        console.log( nbFruit + "fruit selected");
    }
    return fruits.slice(0,nbfruit)
}



if (typeof getBasketContent === "function") {
    const fruits = getBasketContent()
    showMyBasket(fruits)
}