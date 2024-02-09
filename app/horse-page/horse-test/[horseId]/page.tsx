import { promises as fs } from 'fs';

export default async function getHorse({ horseId }: { horseId: number }) {
  interface Horse {
    id: number;
    name: string;
    breed: string;
  }

  try {
    const file = await fs.readFile(process.cwd() + '/public/horses.json', 'utf8');
    const horsesData = JSON.parse(file);
    
    const selectedHorse = horsesData.find((horse: Horse) => horse.id === horseId);

    if (!selectedHorse) {
      return <div>Horse not found</div>;
    }

    return (
      <div>
        <h1>{selectedHorse.name}</h1>
        <p>{selectedHorse.breed}</p>
      </div>
    );
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return <div>Error loading data</div>;
  }
}
