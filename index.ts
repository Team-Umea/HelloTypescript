import {Res, Monster} from "./types";


const URL:string = "https://ozzodevmonsterapi.azurewebsites.net/freeMonsters";
let monsters: Monster[];

init();

async function init(){
    await fetchMonsters(URL);
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
            monsterCard.setAttribute('class', 'monsterCard');
            const name = document.createElement('h2');
            name.setAttribute('class', 'name');
            const health = document.createElement('p');
            health.setAttribute('class', 'health');
            const damage = document.createElement('p');
            damage.setAttribute('class', 'damage');
            const specs = document.createElement('p');
            specs.setAttribute('class', 'specs');
            const price = document.createElement('p');
            price.setAttribute('class', 'price');
            const elements = document.createElement('div');
            elements.setAttribute('class', 'elements');

            const statContainer = document.createElement('div');
            statContainer.setAttribute('class','statContainer')


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

            statContainer.append(health, damage,price);
            monsterCard.append(name, elements,specs, statContainer);
            monsterContainer?.append(monsterCard);
        });
    }
}