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
    rank: number,
    remainingHP: number,
    sufferedDamage: number,
    distributedDamage: number,
    points: number,
    wonFights: number,
    drawnFights: number,
    lostFights: number,
    wonRounds: number,
    drawnRounds: number,
    lostRounds: number,
    wonAgainst: string[],
    drawnAgainst: string[],
    lostAgainst: string[],
    price: 0,
    elements:string[]
}