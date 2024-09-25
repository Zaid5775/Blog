
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router';


export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [redirect,setRedirect] = useState(false);
    const [files, setFiles] = useState(null)

   async function createNewPost(ev){
    ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]); 
       const response = await fetch('https://blog-backa.onrender.com/post', {
            method: "POST",
            body: data,
            credentials: 'include'})
        if(response.ok){setRedirect(true)}else alert("Post cant be created, Try again!")}
        if(redirect){return <Navigate to = {'/Blog'}/>}



    return(


        <form onSubmit={createNewPost}>
        <input 
            required
            type="text" 
            placeholder= {"Title"} 
            value={title} 
            onChange={ev => setTitle(ev.target.value)}/>
        <input 
            required
            type="summary" 
            placeholder= {"Summary"}
            value={summary}
            onChange={ev => setSummary(ev.target.value)}/>
            <input 
            required
            className='file-input'
            type="file"
            onChange={ev => setFiles(ev.target.files)}  />
        <ReactQuill 
            required
            value={content}
            onChange={newValue => setContent(newValue)} />
        <button style={{ marginTop:' 5px'}}>Create post</button>
        </form>

       
    )
}