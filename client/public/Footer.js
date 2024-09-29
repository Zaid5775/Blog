import { Link } from "react-router-dom";
import IG from './ig.png'
import X from './x.png'
import LinkedIn from './link.png'
import git from './git.png'

export default function Footer() {
    return (
        <footer>
            <div className="line"></div> {/* Line above the footer */}
            <nav2>
                <Link target="_blank" className="footer1" to='https://www.instagram.com/knoxzaid'>
                <img src= {IG}/>
                </Link>
                <Link target="_blank"  className="footer1" to='https://github.com/zaid5775'>
                <img src= {git}/>
                </Link>
                <Link target="_blank"  className="footer1" to='https://x.com/knoxzaid1'>
                <img src= {X}/>
                </Link>
                <Link target="_blank"  className="footer1" to='https://www.linkedin.com/in/zaid-shaikh-a59aa9215/'>
                <img src= {LinkedIn}/>
                </Link>
            </nav2>
            <nav1>
                <Link className="footer1" to='/about'>About</Link>
                <Link className="footer1" to='/contact-us'>Contact Us</Link>
                <Link className="footer1" to='/terms-n-condition'>Terms & Condition</Link>
            </nav1>
        </footer>
    );
}
