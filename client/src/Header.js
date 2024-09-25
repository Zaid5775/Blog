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
    fetch('https://blog-backa.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('https://blog-backa.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    }).then(() => setUserInfo(null));
  }

  const username = userInfo?.username;
  const isActive = (path) => location.pathname === path;

  return (
<<<<<<< HEAD
    <header className={isScrolled ? 'shadow' : ''}>
      <Link to="/Blog" className={`logo ${isActive('/Blog') ? 'active' : ''}`}>MyBlog</Link>
=======
    <>

      <header className={isScrolled ? 'shadow' : ''}>
        <Link to="/Blog" className={`logo ${isActive('/Blog') ? 'active' : ''}`}>MyBlog</Link>
        <nav>
          {username && (
            <>
              <Link 
                className={`mm ${isActive('/create') ? 'active' : ''}`} 
                to="/create">Create new post 
              </Link>
              <a className="logout mm" onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link  
                className={`mm ${isActive('/login') ? 'active' : ''}`} 
                to="/login">Login
              </Link>
              <Link 
                className={`mm ${isActive('/register') ? 'active' : ''}`} 
                to="/register">Register
              </Link>
            </>
          )}
        </nav>
     
      </header>
  
    </>

    <header>
      <Link to="/Blog" className={`logo ${isActive('/Blog')?'active': ''}`}>MyBlog</Link>
>>>>>>> origin/main
      <nav>
        {username ? (
          <>
            <Link className={`mm ${isActive('/Blog/create') ? 'active' : ''}`} to="/Blog/create">Create new post</Link>
            <a className="logout mm" onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link className={`mm ${isActive('/Blog/login') ? 'active' : ''}`} to="/Blog/login">Login</Link>
            <Link className={`mm ${isActive('/Blog/register') ? 'active' : ''}`} to="/Blog/register">Register</Link>
          </>
        )}
      </nav>
    </header>
<<<<<<< HEAD
=======
   
  </>
   

>>>>>>> origin/main
  );
}
