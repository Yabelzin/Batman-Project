import React from "react";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/batmanlogo.jpg'

function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <div className="header-image-div">
                <img id="logo-header" src={Logo}/>
            </div>
            <nav className="nav-header">
                <ul className="ul-header">
                    <li className="li-header" onClick={() => {navigate('/')}}>Home</li>
                    <li className="li-header" onClick={() => {navigate('/fotos')}}>Fotos</li>
                    <li className="li-header" onClick={() => {navigate('/contacts')}}>Contacts</li>
                    <li className="li-header" onClick={() => {navigate('/comments')}}>Commentaries</li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;
