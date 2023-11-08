import Link from 'next/link';
import '../styles.css';

function Resume () {
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
            <p className="res-title">Summary</p>
        </div>
        </div>
            </div>
        </div>
    </div>
    )
}

export default Resume;