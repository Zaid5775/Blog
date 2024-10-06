import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

export default function Post({ _id, title, summary, cover, createdAt, author }) {
   

 
    return (
        <div className="post">
            <div className="image-post">
                <Link to={`/post/${_id}`}>
                    <img src={`https://blog-backa.onrender.com/${cover}`} alt="Post Cover" />
                </Link>
            </div>
            <div className="content">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a className="author">{author.username}</a>
                    <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}
