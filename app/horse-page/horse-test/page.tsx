import Link from 'next/link';
import horsesData from '../../../public/horses.json';

export default function HorseListPage() {
    return (
        <div>
            <h1>Horse List</h1>
            <ul>
                {horsesData.map((horse) => (
                    <li key={horse.id}>{horse.id} - 
                        <Link href={`/horse-page/horse-test/${horse.id}`}> {horse.name} </Link>
                            - {horse.breed} - {horse.age} - {horse.sex}
                    </li>
                ))}
            </ul>
        </div>
    );
};
