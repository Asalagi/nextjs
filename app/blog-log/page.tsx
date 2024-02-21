'use client';
import { useState } from 'react';
import './blog-styling.css';
import Image from 'next/image';
import topImage from './top.jpg';

export default function BlogLog () {
    const [fullPost, setFullPost] = useState(false);

    const showContent = () => {
        setFullPost(true)
    }

    const blogData = [
        {
            id: 5,
            title: "A New Day",
            date: "21st February 2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    const contentWords = (content: string, maxLength: number) => {
        if (content.length <= maxLength) return content;

        const lastSpaceIndex = content.lastIndexOf(' ', maxLength);
        return content.slice(0, lastSpaceIndex) + '...';
    };

    return (
        <div>
            <div className="main-container">
                <Image src={topImage} className="flexImage" alt="top image"/>
                <h1 className="title">Welcome to the Blog Log</h1>
                {blogData.map((post, id) => (
                    <div className="post-container" key={id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-date">{post.date}</p><br/>
                        <p className="post-content">{fullPost ? post.content : contentWords(post.content, 130)}</p>
                        {!fullPost && (
                            <p onClick={showContent} className="see-more">See more</p>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}