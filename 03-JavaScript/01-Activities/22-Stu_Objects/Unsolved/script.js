//WRITE YOUR CODE BELOW

var customerDrink = {
    name: "coffee",
    sugar: 5,
    isReady: true
}

const userChoice = prompt('What drink do you want.' )

if(!!userChoice){
    customerDrink.name = userChoice;
}

console.log('Drink name is ', customerDrink.name,' the number of sugar ', customerDrink.sugar)

