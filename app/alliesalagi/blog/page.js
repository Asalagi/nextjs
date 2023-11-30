import Link from 'next/link';
import Image from 'next/image';
import '../styles.css';
import horseshop1 from '../horseshop1.jpg';
import horseshop2 from '../horseshop2.jpg';

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
              <hr/>
              <h2>{"Horse Shop Project"}</h2>
              <p>{"I had a lot of fun with this project combiding my love for horses and love of learning programming. This project features a list of horses, stored in an array and mapped over, holding each horses information in it's own card styled with flexbox. When add cart is clicked below a horses card it is then added to the shopping cart (upper right corner)."}</p>
              <Image src={horseshop1} className="image" fill={true} alt="horseshop1"/>
              <p>{"When the cart link from the image above is clicked it will take you to a screen that has the horses you added to the cart as well as you total stored in the cart summary on the right hand side."}</p>
              <Image src={horseshop2} className="image" fill={true} alt="horseshop2"/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Blog;