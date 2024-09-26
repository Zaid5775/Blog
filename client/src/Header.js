import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const location = useLocation();
  const { setUserInfo, userInfo } = useContext(UserContext);
  
  // State to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // https://blog-backa.onrender.com
    // http://localhost:4000
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    }).then(() => setUserInfo(null));
  }

  const username = userInfo?.username;
  const isActive = (path) => location.pathname === path;

  return (
    <header className={isScrolled ? 'shadow' : ''}>
      <Link to="/" className={`logo ${isActive('/') ? 'active' : ''}`}>MyBlog</Link>
      <nav>
        {username ? (
          <>
            <Link className={`mm ${isActive('/create') ? 'active' : ''}`} to="/create">Create a post</Link>
            <a className="logout mm" onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link className={`mm ${isActive('/login') ? 'active' : ''}`} to="/login">Login</Link>
            <Link className={`mm ${isActive('/register') ? 'active' : ''}`} to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
