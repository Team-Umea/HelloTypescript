export type Res = {
    ok: boolean,
    freeMonsters: Monster[]
};

export type Monster = {
    id: number,
    name: string,
    specs: string,
    health: number,
    damage: number,
    price: number,
    elements: string[],
}
