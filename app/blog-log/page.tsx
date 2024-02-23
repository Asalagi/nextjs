'use client';
import { useState } from 'react';
import './blog-styling.css';
import Image from 'next/image';
import topImage from './top.jpg';
import blogPost from '../../public/post.json';

export default function BlogLog () {
    const [fullPost, setFullPost] = useState(false);

    const showContent = () => {
        setFullPost(true)
    };

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
                {blogPost.map((post) => (
                    <div className="post-container" key={post.id}>
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