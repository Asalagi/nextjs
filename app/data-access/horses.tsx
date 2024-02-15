import { promises as fs } from 'fs';

export interface Horse {
    id: number;
    name: string;
    breed: string;
    age: number;
    color: string;
    sex: string;
    height: string;
    notes: string;
}

export async function getHorseById (id: number) : Promise<Horse> {
    const file = await fs.readFile(process.cwd() + '/public/horses.json', 'utf8');
    const horsesData = JSON.parse(file);

    const selectedHorse = horsesData.find((horse: Horse) => horse.id === id);

    return selectedHorse;
}