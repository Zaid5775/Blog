import { Link } from "react-router-dom";

export default function Footer(){


    return(
        <footer>
            <nav>

            <Link className="footer1" to = '/about'>About</Link>
            <Link className="footer1"to = '/contact-us'>Contact Us</Link>
            <Link className="footer1" to = '/terms-n-condition'>Terms & Condtion</Link>

            
            </nav>
           

        </footer>
    )
}