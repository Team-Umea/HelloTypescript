import {Res, Monster} from "./types";


const url:string = "https://ozzodevmonsterapi.azurewebsites.net";
const freeMonstersEndpoint:string = `${url}/freeMonsters`;
let monsters: Monster[];

init();

async function init(){
    await fetchMonsters(freeMonstersEndpoint);
    console.log(monsters);
    displayMonsters();
}

async function fetchMonsters(url: string): Promise<Res | null>{
    try {
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('HELP!!');
        }

        const res: Res = await response.json();
        monsters = res.freeMonsters;
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function displayMonsters(): void {
    const monsterContainer = document.getElementById('monsterContainer') as HTMLElement | null;

    if(monsterContainer){
        monsters.forEach((monster: Monster)=>{
            const monsterCard = document.createElement('div');
            const name = document.createElement('h2');
            const health = document.createElement('p');
            const damage = document.createElement('p');
            const specs = document.createElement('p');
            const price = document.createElement('p');
            const elements = document.createElement('div');
            const statContainer = document.createElement('div');
            const monsterImg = document.createElement("img"); 

            monsterCard.setAttribute('class', 'monsterCard');
            name.setAttribute('class', 'name');
            health.setAttribute('class', 'health');
            damage.setAttribute('class', 'damage');
            specs.setAttribute('class', 'specs');
            price.setAttribute('class', 'price');
            elements.setAttribute('class', 'elements');
            statContainer.setAttribute('class','statContainer');
            monsterImg.setAttribute("class","monsterImg"); 

            name.innerText = monster.name;
            specs.innerText = monster.specs;
            
            health.innerText = '❤️ ' + monster.health.toString();
            damage.innerText = '⚔️ ' + monster.damage.toString();
            price.innerText = '💎 ' + monster.price.toString();
            monster.elements.forEach(element => {
                const elementTxt = document.createElement('p');
                elementTxt.innerText += element + " ";
                elements.append(elementTxt);
            });

            console.log(monster.img)

            monsterImg.setAttribute("src",`${url}${monster.img}`); 
            monsterImg.setAttribute("alt",monster.name); 

            statContainer.append(health, damage,price);
            monsterCard.append(monsterImg,name, elements,specs, statContainer);
            monsterContainer?.append(monsterCard);
        });
    }
}