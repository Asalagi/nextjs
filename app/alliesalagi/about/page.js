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
                    <Link href="/alliesalagi" className="link"><button className="nav-btn">Home</button></Link>
                    <Link href="/alliesalagi/about" className="link"><button className="nav-btn">About</button></Link>
                    <Link href="/alliesalagi/resume" className="link"><button className="nav-btn">Resume</button></Link>
                    <Link href="/alliesalagi/blog" className="link"><button className="nav-btn">Blog</button></Link>
                    <Link href="/alliesalagi/contact" className="link"><button className="nav-btn">Contact</button></Link>
        </div>
        <div className="card-title">
                <p className="res-title">About Me</p></div>
                <p className="top"><Image src={profile} width={150} height={308} alt="Picture of the me"/></p>
                    <p>{"Hi! My name is Allie."}</p>
             </div>
            </div>
        </div>
    </div>
    )
}

export default About;