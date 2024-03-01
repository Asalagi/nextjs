import Link from 'next/link';
import './horse-styles.css';
import horsesData from '../../../public/horses.json';

export default function HorseListPage() {
    // add in collapsable section for horses info instead of dynamic routing maybe

    return (
        <div className="main-container">
            <div className="top-container">top</div>
            <div className="center-container">
                <div className="side-content">
            <h1>Horse List</h1>
                    {horsesData.map((horse) => (
                    <div key={horse.id}>
                        {horse.id}
                        <Link href={`/horse-page/horse-test/${horse.id}`}> {horse.name} </Link>
                        {horse.breed}
                    </div>
                ))}
                </div>
            <div className="display-content">display content</div>
            </div>
        </div>
    );
};
