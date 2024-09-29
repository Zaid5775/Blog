import React from 'react'
import { Link } from 'react-router-dom';
import IG from './ig.png'
import X from './x.png'
import LinkedIn from './link.png'
import git from './git.png'


export default function AboutPage() {
 
  return (
    <>
    
    <div className='container3'>
      
    <div className='main1'>
    <img  className = 'main-img'src={require('./Blog.png')}alt = "headimg"/>

    <div className='main-text'>

    <div className='main-text-right'>
    <p>Welcome to MyBlog, a platform where I share the detailed journey behind every project I develop. From coding challenges to hackathon experiences, MyBlog is a place where I document my learning process, whether it's mastering new programming languages or exploring cutting-edge tech frameworks. But it's not just about me—MyBlog is also a space for you! Users can log in and share their own insights, experiences, or blogs, creating a collaborative community of developers eager to learn and grow together. Join MyBlog, and let's build and learn together!</p>
    </div>
    <div
      className = 'social-acc'>

<Link target="_blank" className="social1" to='https://www.instagram.com/knoxzaid'>
                <img src= {IG}/>
                </Link>
                <Link target="_blank"  className="social1" to='https://github.com/zaid5775'>
                <img src= {git}/>
                </Link>
                <Link target="_blank"  className="social1" to='https://x.com/knoxzaid1'>
                <img src= {X}/>
                </Link>
                <Link target="_blank"  className="social1" to='https://www.linkedin.com/in/zaid-shaikh-a59aa9215/'>
                <img src= {LinkedIn}/>
                </Link>
              
    </div>
    

    </div>
    </div>
    </div>
    </>
  )
}