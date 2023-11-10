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
                <div className="nav-bar">
                    <Link href="/alliesalagi" className="link nav-btn">Home</Link>
                    <Link href="/alliesalagi/about" className="link nav-btn">About</Link>
                    <Link href="/alliesalagi/resume" className="link nav-btn">Resume</Link>
                    <Link href="/alliesalagi/blog" className="link nav-btn">Blog</Link>
                    <Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link>
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