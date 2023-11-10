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
                    <Link href="/alliesalagi" className="link nav-btn">Home</Link>
                    <Link href="/alliesalagi/about" className="link nav-btn">About</Link>
                    <Link href="/alliesalagi/resume" className="link nav-btn">Resume</Link>
                    <Link href="/alliesalagi/blog" className="link nav-btn">Blog</Link>
                    <Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link>
        </div>
          <p>{"Put blog posts here"}</p></div>
        </div>
      </div>
    </div>
    )
}

export default Blog;