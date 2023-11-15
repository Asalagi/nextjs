import Link from 'next/link';
import '../styles.css';
import Image from 'next/image';
import profile from './profile.jpg';

function About () {
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
                    <li><Link href="/alliesalagi/blog" className="link nav-btn">Blog</Link></li>
                    <li><Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link></li>
                 </ul>
        </div>
        <div className="card-title">
                <p className="res-title">About Me</p></div>
                <p><Image src={profile} className="top" fill={true} alt="Picture of the me"/></p>
                    <p>{"Hi! My name is Allie."}</p>
             </div>
            </div>
        </div>
    </div>
    )
}

export default About;