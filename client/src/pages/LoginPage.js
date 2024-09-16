import { useState } from "react"
import {Navigate} from 'react-router-dom'

export default function LoginPage(){

    const[username, setUser] = useState('');
    const[password, setPass] = useState('');
    const[redirect, setRedirect] = useState(false)
    

    async function login(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch');
            }
    
            const result = await response.json();
            console.log('Login response:', result);
            setRedirect(true);
    
        } catch (error) {
            console.error('Login error:', error);
            alert('Error: ' + error.message);
        }
    }
        if(redirect){
        return <Navigate to = {'/'}/>
    }


    return(

        <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input 
            type="text" 
            placeholder="Username"
            value = {username}
            onChange={ev => setUser(ev.target.value)}
        />


        <input 
            type="password" 
            placeholder="password"
            value = {password}
            onChange={ev => setPass(ev.target.value)}
        />


        <button>Login</button>


        </form>

    )
}