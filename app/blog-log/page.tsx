'use client';
import { useState } from 'react';
import './blog-styling.css';
import Image from 'next/image';
import topImage from './top.jpg';
import blogPost from '../../public/post.json';

export default function BlogLog () {
    const [fullPost, setFullPost] = useState(Array(blogPost.length).fill(false));

    const expandPost = (index: number) => {
        setFullPost((prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        }));
    }

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
                <div className="content-container">
                    {blogPost.map((post, index) => ( // Include the index parameter here
                        <div className="post-container" key={post.id}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-date">{post.date}</p><br/>
                            <p className="post-content">{fullPost[index] ? post.content : contentWords(post.content, 130)}</p>
                            <p onClick={() => expandPost(index)} className="see-more">
                                {fullPost[index] ? 'See less' : 'See more'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
