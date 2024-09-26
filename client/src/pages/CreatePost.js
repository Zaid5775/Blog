import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [files, setFiles] = useState(null);

    async function createNewPost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files && files.length > 0) {
            data.set('file', files[0]);
        }

        const response = await fetch('http://localhost:4000/post', {
            method: "POST",
            body: data,
            credentials: 'include'
        });

        if (response.ok) {
            setRedirect(true);
        } else {
            alert("Post can't be created, try again!");
        }
    }

    if (redirect) {
        return <Navigate to='/' />;
    }

    return (
        <form  className = 'create'onSubmit={createNewPost}>
            <input 
                required
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={ev => setTitle(ev.target.value)} 
            />
            <input 
                required
                type="text" 
                placeholder="Summary"
                value={summary}
                onChange={ev => setSummary(ev.target.value)} 
            />
            <input 
                required
                className='file-input'
                type="file"
                onChange={ev => setFiles(ev.target.files)}  
            />
            <ReactQuill 
                required
                value={content}
                onChange={newValue => setContent(newValue)} 
            />
            <button style={{ marginTop: '5px' }}>Create post</button>
        </form>
    );
}
