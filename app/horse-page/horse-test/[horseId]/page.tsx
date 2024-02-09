import { getHorseById, Horse } from '@/app/data-access/horses';

export default async function getHorse({ params }: {params: {horseId: string}}) {
  
  const horseId = parseInt(params.horseId, 10);

  try {
    const selectedHorse: Horse = await getHorseById(horseId);
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
