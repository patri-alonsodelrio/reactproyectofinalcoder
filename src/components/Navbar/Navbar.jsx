import './Navbar.css'
import logo from '../../img/frame.svg';
import CartWidget from '../CartWidget/CartWidget';
import {Link } from 'react-router-dom';

function Navbar() {

    return (
        <header>
            <picture className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </picture>
            <nav className="navbar">
                <ul className="menu">
                    <li className="menu-item">
                    <Link to='/categoria/naruto' className="menu-link">Naruto</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/categoria/dragonball' className="menu-link">Dragon Ball</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}

export default Navbar;