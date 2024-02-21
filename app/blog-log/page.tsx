import './blog-styling.css';
import Image from 'next/image';
import topImage from './top.jpg';

export default function BlogLog () {
    const blogData = {
        title: "A New Day",
        date: "21st February 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        };
    return (
        <div>
            <div className="main-container">
                <Image src={topImage} className="flexImage" alt="top image"/>
                <h1 className="title">Welcome to the Blog Log</h1>
                <div className="post-container">
                    <h2 className="post-title">{blogData.title}</h2>
                    <p className="post-date">{blogData.date}</p><br/>
                    <p className="post-content">{blogData.content}</p>
                </div>
            </div>
        </div>
    );
}