import { useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function Header(){

  useEffect(() => {
    fetch('http://localhost:4000/profile' )
  })

    return(
        <header>
        <Link to = " " className = "logo">My Blog</Link>
      <nav>
        <Link to = "/login">Login</Link>
        <Link to = "/register">Register</Link>
      </nav>
      </header>
    )
}