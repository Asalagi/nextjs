import Link from 'next/link';
import horsesData from '../../../public/horses.json'

function HorseListPage() {
    return (
        <div>
            <h1>Horse List</h1>
            <ul>
                {horsesData.map((horse) => (
                    <li key={horse.id}>
                        <Link href={`/horse-page/horse-test/${horse.id}`}>{horse.id} </Link>
                            {horse.name} - {horse.breed}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HorseListPage;
