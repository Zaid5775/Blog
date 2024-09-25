import { useState } from 'react';

export default function RegisterPage() {
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');

    async function register(e) {
        e.preventDefault();
        

        const response =  await fetch('https://blog-backa.onrender.com/register', {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            
        if(response.status === 200){
            alert("Registered Successfully!")
        }else alert("Registered Failed!")
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={ev => setUser(ev.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={ev => setPass(ev.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
}
