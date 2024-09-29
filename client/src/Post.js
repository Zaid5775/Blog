import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

export default function Post({_id, title, summary, cover, createdAt, author}) {
    const [loading, setLoading] = useState(true);

    // Assuming data is fetched at a higher level, you are passing props down
    // We will stop loading once all data is available
    useEffect(() => {
        if (_id && title && summary && cover && author) {
            setLoading(false); // Stop loading once all props are received
        }
    }, [_id, title, summary, cover, author]);

    // Define a skeleton loader for posts
    const PostSkeleton = () => (
        <ContentLoader 
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100px" />
            <rect x="0" y="110" rx="5" ry="5" width="70%" height="20px" />
            <rect x="0" y="140" rx="5" ry="5" width="50%" height="15px" />
        </ContentLoader>
    );

    if (loading) {
        // Show skeleton while loading
        return <PostSkeleton />;
    }

    // Once the data is ready, display the post
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
