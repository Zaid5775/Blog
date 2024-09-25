import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Footer from "./pages/Footer";

export default function Header() {
  const location = useLocation();
  const { setUserInfo, userInfo } = useContext(UserContext);
  
  // State to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
  }, []);

  function logout() {
    fetch('https://blog-backa.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  const isActive = (path) => location.pathname === path;

  return (
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
      <nav>
        {username && (
          <>

            <Link  
            className={`mm ${isActive('/create')?'active': ''}`}
            to="/create">Create new post 
            </Link>

            <a className ="logout mm" onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link  
                  className={`mm ${isActive('/login')?'active': ''}`} 
                  to="/login">Login
            </Link>


            <Link 
                 className={`mm ${isActive('/register')?'active': ''}`} 
                 to="/register">Register
            </Link>

          </>
        )}
      </nav>
    </header>
   
  </>
   

  );
}
