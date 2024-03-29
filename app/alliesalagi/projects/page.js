import Link from 'next/link';
import Image from 'next/image';
import '../styles.css';
import horseshop1 from '../horseshop1.jpg';
import horseshop2 from '../horseshop2.jpg';
import hbmain from '../hbmain.jpg';
import hbsaddles from '../hbsaddles.jpg';
import hbinfo from '../hbinfo.jpg';
import hbadd from '../hbadd.jpg';

export const metadata = {
  title: 'Allie Salagi',
}

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
                    <li><Link href="/alliesalagi/projects" className="link nav-btn">Projects</Link></li>
                    <li><Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link></li>
                 </ul>
        </div>
             <div className="card-title">
                <p className="res-title">Projects</p>
              </div>
              <h2>{"Dice Game Project"}</h2>
              <p>{"Check it out"} <Link href="../dice" target="_blank" className="link">Here</Link><br/>
              {"This was a fun and challenging porject. I first started this project with a JavaScript web course. It was initially built with using JavaScript and HTML with traditional DOM manipulation. I took it and rebuilt it with React to make it a fun and interactive game up on the web for all to enjoy!"}</p>
              <p>{"Thank you Jonas Schmedtmann for showing this cool and fun project in your JavaScript Zero to Expert Course."}</p>
              <hr/>
              <h2>{"Adventurer Project"}</h2>
              <p>{"Check it out"} <Link href="../adventure" target="_blank" className="link">Here</Link><br/>
              {"This is a fun adventure game that gives several randomized scenerios. I had a lot of fun building this and hope you have as much fun playing it as I had building it. Happy hiking!"}</p>
              <hr/>
              <h2>{"Calculator Project"}</h2>
              <p>{"Check it out"} <Link href="../calculator" target="_blank" className="link">Here</Link><br/>
              {"This is a simple calulator. This porject was original constructed with JavaScript and HTML, and later revamped using React."}</p>
              <hr/>
              <h2>{"Calendar Project"}</h2>
              <p>{"Check it out"} <Link href="../calendar" target="_blank" className="link">Here</Link><br/>
              {"This calendar project is a blank slate calendar. Featuring a title with the month's name and a previous month and next month button."}</p>
              <hr/>
              <h2>{"Horse Shop Project"}</h2>
              <p>{"I had a lot of fun with this project combiding my love for horses and love of learning programming. This project features a list of horses, stored in an array and mapped over, holding each horses information in it's own card styled with flexbox. When add cart is clicked below a horses card it is then added to the shopping cart (upper right corner)."}</p>
              <div className="image-container"><Image src={horseshop1} className="image" alt="horseshop1"/></div>
              <p>{"When the cart link from the image above is clicked it will take you to a screen that has the horses you added to the cart as well as you total stored in the cart summary on the right hand side."}</p>
              <div className="image-container"><Image src={horseshop2} className="image" alt="horseshop2"/></div>
              <hr/>
              <h2>{"Saddlery Project"}</h2>
              <p>{"This was a fun project. This was one of the first projects I did using PostgreSQL. Saddles are stored in a datebase and I used axios.get to retrieve the saddles info and map over eachone displaying them in their own card. Each card has a 'More Details' button which takes you to a page with that saddle's information, this was done by using axios.get and express get by id. I also add a page to add saddles into the database using post request."}</p>
              <div className="image-container"><Image src={hbmain} className="image" alt="hbmainn"/></div>
              <div className="image-container"><Image src={hbsaddles} className="image" alt="hbsaddles"/></div>
              <div className="image-container"><Image src={hbinfo} className="image" alt="hbinfo"/></div>
              <div className="image-container"><Image src={hbadd} className="image" alt="hbadd"/></div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Blog;