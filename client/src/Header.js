import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import Footer from "./pages/Footer";


export default function Header() {
  const location = useLocation();
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  const isActive = (path) => location.pathname === path


  return (
    <>
    <header>
      <Link to="/" className={`logo ${isActive('/')?'active': ''}`}>MyBlog</Link>
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