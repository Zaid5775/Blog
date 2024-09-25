import Post from "../Post";
import {useEffect, useState} from "react";
import Footer from "./Footer";
export default function IndexPage(){
    const[posts, setPosts] = useState([]);
    


    useEffect(() => {

        fetch('https://blog-backa.onrender.com/post').then(response =>{
            response.json().then(posts =>{
                setPosts(posts)
            })
        })
    }, [])

    return(
    
        <>
 <div class="shape shape-one"></div>
    
    <div class="shape shape-three"></div>
    

        {posts.length >0 && posts.map(post => (
            <Post {...post}/>
        ))}
        
        </>

    );
}