// OLD CODE TO BE USED WITH DATA ACCESS
import { getHorseById, Horse } from '@/app/data-access/horses';

export default async function getHorse({ params }: {params: {horseId: string}}) {
  
  const horseId = parseInt(params.horseId, 10);
  console.log(horseId, params);

  try {
    const selectedHorse: Horse = await getHorseById(horseId);
    console.log(selectedHorse);

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
    console.log(error);

    return <div>Error loading data</div>;
  }
}


// NEW CODE LETS TRY
// import { promises as fs } from 'fs';

// export interface Horse {
//     id: number;
//     name: string;
//     breed: string;
//     age: number;
//     color: string;
//     sex: string;
//     height: string;
//     notes: string;
// }

// export default async function getHorse({ params }: {params: {horseId: string}}) {
//     const file = await fs.readFile(process.cwd() + '/public/horses.json', 'utf8');
//     const horsesData = JSON.parse(file);
//     const horseId = parseInt(params.horseId, 10);

//     const selectedHorse = horsesData.find((horse: Horse) => horse.id === horseId);
//       console.log(horseId, params);
//       console.log(selectedHorse);

//   try {
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
//     console.log('Error reading or parsing JSON file:', error);

//     return <div>Error loading data</div>;
//   }
// }