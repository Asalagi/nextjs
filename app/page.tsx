import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allie Salagi',
}

export default function Home() {
  const dayDate = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  });

  const dayTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    hour: '2-digit',
    minute: '2-digit',
  });

  const time = new Date().getHours();
  let greeting;
  if (time < 11) {
    greeting = 'Good Morning!';
  } else if (time < 18) {
    greeting = 'Good Day!';
  } else {
    greeting = 'Good Evening!';
  };

  return (
    <main>
      <div>
        <div className="main-container">
           <div className="inner-content">
            <div className="main-text">
            <Link href="/alliesalagi"><Image src={logo} className="image" fill={true} alt="logo"/></Link>
            {"Click logo to enter"}
            <p className="small">{"logo made on "}<Link href="https://www.canva.com/">Canva</Link></p>
            </div>
           </div>
        </div>
      </div>
    </main>
  )
}
