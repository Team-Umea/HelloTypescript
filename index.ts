const menuBox = document.getElementById("MenuBox")
const pizzaButton = document.getElementById("pizzaButton");
const saladButton = document.getElementById("saladButton");
const drinkButton = document.getElementById("drinkButton");

type Pizza = {
    id: number,
    name:string,
    type:string,
    description:string,
    toppings?:string[],
    price:number,
    imgUrl:string,
}

type Salad = {
    id:number,
    name:string,
    type:string,
    description:string,
    ingredients?:string[],
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
    toppings?:string[],
}

const apiMap = {
    pizza: 'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=pizza',
    salad: 'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=salad',
    drink: 'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu?type=drink',
    
}
async function fetchApi<T>(type: keyof typeof apiMap): Promise<T[]> {
    const url = apiMap[type]; 
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-zocom': 'sp-7BTxHCyHhzIME5TI'
            }
        });
        
        if (!response.ok) {
            throw new Error("Error with network");
        }
        
        
        let result =  await response.json();
        return result.items;
        
        
        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}
pizzaButton?.addEventListener("click", function () {
    
    fetchApi<Pizza>("pizza")
    .then ((data)=>{
        renderMenu(data)
        
    })
})
saladButton?.addEventListener("click", function () {
    
    fetchApi<Salad>("salad")
    .then ((data)=>{
        renderMenu(data)
        
    })
})

drinkButton?.addEventListener("click", function () {
    
    fetchApi<Drink>("drink")
    .then ((data)=>{
        renderMenu(data)
        
    })
})
function renderMenu(data: Pizza[]|Salad[]|Drink[]) {
    menuBox.innerHTML= "";

    data.forEach(element => {
        
        const divBox = document.createElement("div");
        const foodId = document.createElement("p");
        const foodName = document.createElement("h2");
        const foodType = document.createElement("p");
        const foodDesc = document.createElement("p");
        const foodTopping = document.createElement("p");
        const foodPrice = document.createElement("h4");
        const foodImg = document.createElement("img");


        foodId.innerText = `👉${String(element.id)}`;
        foodName.innerText = `😋${element.name}😋`;
        foodType.innerText = `Type - ${element.type}`;
        foodDesc.innerHTML = `Description - ${element.description}`;
        foodPrice.innerText = `Price ${String(element.price)}💲`;
        foodImg.src = `${element.imgUrl}`;
        foodImg.style.width = "300px";
        

    
        divBox?.appendChild(foodId);
        divBox?.appendChild(foodName);
        divBox?.appendChild(foodType);
        divBox?.appendChild(foodDesc);
        divBox?.appendChild(foodTopping);
        divBox?.appendChild(foodPrice);
        divBox?.appendChild(foodImg);
        menuBox?.appendChild(divBox);
    });
}

