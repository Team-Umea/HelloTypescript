const mainBox = document.querySelector(".main");
const pizzaButton = document.getElementById("pizzaButton");
const saladButton = document.getElementById("saladButton");
const drinkButton = document.getElementById("drinkButton");
type Pizza = {
    id: number,
    name:string,
    type:string,
    description:string,
    toppings:string[],
    price:number,
    imgUrl:string,
}
type Salad = {
    id:number,
    name:string,
    type:string,
    description:string,
    ingredients:string[],
    price: number,
    imgUrl:string,
}
type Drink = {
    id:number,
    name:string,
    type:string,
    description:string,
    price:number,
    imgUrl:string,

}















































// const fetchPizzaMenu = async () => {
//     const url = 'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=pizza';
    
//     const options = {
//         method: 'GET',
//         headers: {
//             'accept': 'application/json',
//             'x-zocom': 'sp-7BTxHCyHhzIME5TI'
//         }
//     };
// }

// Salad
// curl -X 'GET' \
//   'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=salad' \
//   -H 'accept: application/json' \
//   -H 'x-zocom: "sp-7BTxHCyHhzIME5TI"'
// Request URL
// https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=salad




// Drinks 
// curl -X 'GET' \
//   'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=drink' \
//   -H 'accept: application/json' \
//   -H 'x-zocom: "sp-7BTxHCyHhzIME5TI"'
// Request URL
// https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=drink