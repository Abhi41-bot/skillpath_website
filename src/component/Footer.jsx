// ============================================================
// FILE: src/components/Footer.jsx
// ============================================================
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <h4>SkillPath</h4>
                    <p>Empowering your learning journey with curated paths and expert guidance.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
                <div className="bottom">
                    &copy; {new Date().getFullYear()} SkillPath. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;