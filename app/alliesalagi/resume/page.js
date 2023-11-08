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
            <p className="res-title">Summary</p></div>
            <p>{" As a kid I loved using HTML and CSS to build websites for virtual horse games that I was involved in. When I began working full time, website building and those fun games took a backseat. I worked in various animal related jobs (ranch hand, dog groomer), until I was able to finally open my own business grooming dogs. A business I loved. But after 5 awesome years, I realized that the life of a business owner isn’t what I wanted at this point. My brother in law, a software engineer himself, reminded me of how much fun I had making those old sites when I was younger. With the money I made selling my business, I decided to jump back into web development. I've been having a blast rekindling my old passion, and learning the new modern ways of writing code. While my background isn’t full of programming experience, I’d like to say it shows my hard work ethic that has carried over to my love for programming. "}</p>
        <div className="card-title">
            <p className="res-title">Experience</p></div>
            <p className="bold">Owner<br/>Stop N Paws LLC Mobile Grooming<br/>
            Feb 2018 to Feb 2023</p>
            <p>{"Owning Stop N’ Paws was an amazing opportunity. I learned and gained so much experience being an owner of my own company. Being mobile I learned how to time manage drives between clients to make my days more efficient. I learned how to route and manage my schedule and the schedules of 100+ clients."}</p>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Resume;