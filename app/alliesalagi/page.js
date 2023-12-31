import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'Allie Salagi',
}

function Page() {
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
    <div>
      <div className="main-content">
        <h1 className="title">Allie Salagi</h1> 
        <div className="outer-box">
            <div className="content-box">
            <div className="nav-bar dropdown">
              <div className="menu">Menu</div>
                 <ul className="nav-link dropdown-content">
                    <li><Link href="/alliesalagi" className="link nav-btn first">Home</Link></li>
                    <li><Link href="/alliesalagi/about" className="link nav-btn">About</Link></li>
                    <li><Link href="/alliesalagi/resume" className="link nav-btn">Resume</Link></li>
                    <li><Link href="/alliesalagi/projects" className="link nav-btn">Projects</Link></li>
                    <li><Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link></li>
                 </ul>
        </div>
            <div className="card-title">
                <p className="res-title">{greeting}</p></div>
                <p>{"Welcome to my site. I wanted to create this site to show a little of what I can do and also to tell about myself. If you have any questions please feel free to contact me!"}</p>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Page;