export interface Score {
    id: string;
    name: string;
    score: number;
    rank?: number;
}

export interface Board {
    scores: Array<Score>;
    kind: BoardType;
    id: string;
    name: string;    
}

export enum BoardType {
    ASC,
    DESC
}

export async function getBoard() : Promise<Board> {
    const board = {
        id: "0ab88f8e-5204-4487-96b2-81e0b16eb5c6",
        name: "Super Pinball Deluxe",
        kind: BoardType.ASC,
        scores: [
            { id: "5e1f4969-e40c-484b-9459-0fa617ee8e64", name: "AAA", score: 12000 },
            { id: "37212ccd-d733-4d00-8eab-eb0accbb67f4", name: "Igor", score: 11000 },
            { id: "d131a0ee-5cfc-496c-b497-041cdf708dab", name: "Oggor", score: 13000 },
            { id: "b40c6024-cb8b-4286-8b88-2eee13f5fbc5", name: "Olaf", score: 2000 },
            { id: "7deb75ab-2796-4256-a443-a0de88e27bab", name: "Stylf", score: 10 },
            { id: "f5309013-4007-4667-af3b-a3733d2987eb", name: "Sigmar", score: 12200 },
            { id: "3c48e38a-1c28-4415-983e-f87c3625b119", name: "Poum", score: 2400 },
            { id: "46b6e58c-c8a0-4c11-b4d6-9a6ad0280f4b", name: "Hector", score: 11000 },
            { id: "d744ddca-5085-41fd-bc49-ed8beed457f1", name: "Vlad", score: 9999 },
            { id: "7e965769-a8d1-4fd5-bbdd-0632cc9b8271", name: "Acme", score: (5678) },
            { id: "69a58de1-44ff-4df2-8cdd-5fb9fb2f1187", name: "Bizx", score: 99967 },
        ]
    }
    return Promise.resolve(board);
}
