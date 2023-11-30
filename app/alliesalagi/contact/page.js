import Link from 'next/link';
import '../styles.css';

function Contact () {
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
                <p className="res-title">Contact Me</p></div>
          <p>{"LinkedIn: "}<Link href="http://www.linkedin.com/in/allie-salagi-7a2794297" className="link">Allie Salagi</Link></p>
        </div>
       </div>
      </div>
    </div>
    )
}

export default Contact;