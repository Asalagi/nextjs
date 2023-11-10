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
                 <ul className="nav-link">
                    <li><Link href="/alliesalagi" className="link nav-btn">Home</Link></li>
                    <li><Link href="/alliesalagi/about" className="link nav-btn">About</Link></li>
                    <li><Link href="/alliesalagi/resume" className="link nav-btn">Resume</Link></li>
                    <li><Link href="/alliesalagi/blog" className="link nav-btn">Blog</Link></li>
                    <li><Link href="/alliesalagi/contact" className="link nav-btn">Contact</Link></li>
                 </ul>
        </div>
            <div className="card-title">
                <p className="res-title">Summary</p></div>
                <p>{" As a kid I loved using HTML and CSS to build websites for virtual horse games that I was involved in. When I began working full time, website building and those fun games took a backseat. I worked in various animal related jobs (ranch hand, dog groomer), until I was able to finally open my own business grooming dogs. A business I loved. But after 5 awesome years, I realized that the life of a business owner isn’t what I wanted at this point. My brother in law, a software engineer himself, reminded me of how much fun I had making those old sites when I was younger. With the money I made selling my business, I decided to jump back into web development. I've been having a blast rekindling my old passion, and learning the new modern ways of writing code. While my background isn’t full of programming experience, I’d like to say it shows my hard work ethic that has carried over to my love for programming. "}</p>
                <div className="card-title">
                <p className="res-title">Education/Skills</p></div>
                <p><Link href="https://github.com/Asalagi" className="link">Github Commits</Link></p>
                <p>{"2023 Web Development BootCamp Oline"}<br/>
                {"By Dr. Angela Yu"}</p>
                <p className="bold">{"Skills"}</p>
                    <ul>
                        <li>{"HTML"}</li>
                        <li>{"CSS"}</li>
                        <li>{"Javascript"}</li>
                        <li>{"React"}</li>
                        <li>{"SQL Database (PostgreSQL) Express"}</li>
                    </ul>
            <div className="card-title">
                <p className="res-title">Experience</p></div>
                <p className="bold">{"Owner"}<br/>
                {"Stop N' Paws LLC Mobile Grooming"}<br/>
                {"Feb 2018 - Feb 2023"}</p>
                <p>{"Owning Stop N’ Paws was an amazing opportunity. I learned and gained so much experience being an owner of my own company. Being mobile I learned how to time manage drives between clients to make my days more efficient. I learned how to route and manage my schedule and the schedules of 100+ clients."}</p>
                <p className="bold">{"Duties included"}</p>
                    <ul>
                        <li>{"Routing and scheduling appointments"}</li>
                        <li>{"Keeping track of inventory"}</li>
                        <li>{"Keeping track of financials, incoming and outgoing"}</li>
                        <li>{"Tallying up monthly income for sale tax and annual taxes"}</li>
                        <li>{"Keeping track on annual vehicle maintenance schedules"}</li>
                        <li>{"Administering maintenance and repairs to equipment and work vehicles"}</li>
                        <li>{"Bathing and grooming, assessing dogs coat and skin condition"}</li>
                        <li>{"Taking instruction from client for their desired style for their dog"}</li>
                        <li>{"Taking clients calls and booking appointments"}</li>
                    </ul>
                    <hr/>
                <p className="bold">{"Dog Groomer"}<br/>
                {"Freelance Work"}<br/>
                {"Sep 2017 - Mar 2018"}</p>
                <p>{"During this time I was working with a vet office 2 days a week as well as with a local groom shop as a fill in. Both these opportunities helped me be able to learn how to be my own boss and manage my time and my schedule of clients."}</p>
                <p className="bold">{"Duties included"}</p>
                    <ul>
                        <li>{"Bathing and grooming at a vets off for special needs/handling and elderly dogs"}</li>
                        <li>{"Being a fill in for overbooked days or if a groomer called out at the groom shop"}</li>
                    </ul>
                    <hr/>
                <p className="bold">{"Dog Groomer"}<br/>
                {"Grubby Dogs"}<br/>
                {"Nov 2016 - Jul 2017"}</p>
                <p>{"Working for Grubby Dogs taught me how to be a better groomer and learn different skills with grooming methods. I was able to work their second location alone and learn how to manage a small grooming operation on my own. I believe this prepared me to be able to be my own boss and open my own grooming business."}</p>
                <p className="bold">{"Duties included"}</p>
                    <ul>
                        <li>{"Check in and out clients by taking instructions for desire grooming style"}</li>
                        <li>{"Bathing and grooming dogs"}</li>
                        <li>{"Salon maintenance and inventory"}</li>
                    </ul>
                    <hr/>
                <p className="bold">{"Dog Groomer"}<br/>
                {"Temecula Pet Salon"}<br/>
                {"Apr 2016 - Oct 2016"}</p>
                <p className="bold">{"Duties included"}</p>
                    <ul>
                        <li>{"Bathing and grooming dogs"}</li>
                        <li>{"Checking in and out clients for myself as well as other groomers"}</li>
                        <li>{"Training bathers and new groomers"}</li>
                    </ul>
                    <hr/>
                <p className="bold">{"Dog Groomer"}<br/>
                {"Country Kennels"}<br/>
                {"Jul 2011 - Apr 2016"}</p>
                <p>{"Working at Country Kennels taught me how to bathe a dog properly, assessing coat type and skin condition. I was taught how to groom and take direction from the client on what their desired style they want for their dog. I was taught time management in a high stress enviroment."}</p>
                <p className="bold">{"Duties included"}</p>
                    <ul>
                        <li>{"Bathing and grooming dogs to owners request"}</li>
                        <li>{"Booking appointments for clients"}</li>
                        <li>{"Checking in clients and taking instructions on their grooming request"}</li>
                        <li>{"Helping train bathers and beginner groomers"}</li>
                    </ul>
                    <hr/>
                <p className="bold">{"Ranch Hand/Assistant"}<br/>
                {"Various horse ranches"}<br/>
                {"Mar 2004 - May 2011"}</p>
                <p>{"Working at different horse ranches gave me the knowledge of various horse disciplines, advanced my skills in reading horses body language, care and management of horses, time management and keeping horses on a realistic and set schedule for training, and care such as farrier and vet visits"}</p>
                <p className="bold">{"Duties included"}</p>
                    <ul>
                        <li>{"Keeping horses waters full, feeding, cleaning stalls"}</li>
                        <li>{"Getting horses ready for training sessions"}</li>
                        <li>{"Walking, lunging and getting horses back from being laid up"}</li>
                        <li>{"Traveling to shows as an assistant to care for and get horses ready for classes"}</li>
                    </ul>
            </div>
       </div>
     </div>
    </div>
    )
}

export default Resume;