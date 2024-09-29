import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer>
            <div className="line"></div> {/* Line above the footer */}
            <nav2>
                <Link className="footer1" to='/about'>About</Link>
                <Link className="footer1" to='/contact-us'>Contact Us</Link>
                <Link className="footer1" to='/terms-n-condition'>Terms & Condition</Link>
            </nav2>
            <nav1>
                <Link className="footer1" to='/about'>About</Link>
                <Link className="footer1" to='/contact-us'>Contact Us</Link>
                <Link className="footer1" to='/terms-n-condition'>Terms & Condition</Link>
            </nav1>
        </footer>
    );
}
