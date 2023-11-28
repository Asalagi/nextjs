import Link from 'next/link';
import '../styles.css';

function Blog () {
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
                <p className="res-title">Blog</p>
              </div>
              <h2>{"Calendar Project"}</h2>
              <p>{"Check it out"} <Link href="../calendar" target="_blank" className="link">Here</Link><br/>
              {"This calendar project is a blank slate calendar. Featuring a title with the month's name and a previous month and next month button."}</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Blog;