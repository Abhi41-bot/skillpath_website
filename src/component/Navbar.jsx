// ============================================================
// FILE: src/components/Navbar.jsx
// ============================================================
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    Skill<span>Path</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;