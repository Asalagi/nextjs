// OLD CODE TO BE USED WITH DATA ACCESS
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
        <p>{selectedHorse.age} {selectedHorse.color} {selectedHorse.breed} {selectedHorse.sex}, {selectedHorse.height}</p>
        <p>{selectedHorse.notes}</p>
      </div>
    );
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return <div>Error loading data</div>;
  }
}

// import { promises as fs } from 'fs';

// export interface Horse {
    // id: number;
    // name: string;
    // breed: string;
    // age: number;
    // color: string;
    // sex: string;
    // height: string;
    // notes: string;
// }

// export default async function getHorse({ params }: {params: {horseId: string}}) {
//   const file = await fs.readFile(process.cwd() + '/public/horses.json', 'utf8');
//   const horsesData: Horse[] = JSON.parse(file);
//   const horseId = parseInt(params.horseId, 10);

//   try {
//     const selectedHorse = horsesData.find((horse: Horse) => horse.id === horseId);
//     if (!selectedHorse) {
//       return <div>Horse not found</div>;
//     }

//     return (
//       <div>
//         <h1>{selectedHorse.name}</h1>
//         <p>{selectedHorse.age} {selectedHorse.color} {selectedHorse.breed} {selectedHorse.sex}, {selectedHorse.height}</p>
//         <p>{selectedHorse.notes}</p>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error reading or parsing JSON file:', error);
//     return <div>Error loading data</div>;
//   }
// }