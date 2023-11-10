import Link from 'next/link';
import '../styles.css';

function Blog () {
    return (
    <div>
      <div className="main-content">
        <h1 className="title">Allie Salagi</h1> 
        <div className="outer-box">
            <div className="content-box">
            <div className="nav-bar">
                 <ul className="nav-link">
                    <li><Link href="/alliesalagi" className="link nav-btn">Home</Link></li>
                    <li><Link href="/alliesalagi/about" className="link nav-btn">About</Link></li>
                    <li><Link href="/alliesalagi/resume" className="link nav-btn">Resume</Link></li>
                    <li><Link href="/alliesalagi/blog" className="link nav-btn">Blog</Link></li>
                    <li><Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link></li>
                 </ul>
        </div>
          <p>{"Put blog posts here"}</p></div>
        </div>
      </div>
    </div>
    )
}

export default Blog;