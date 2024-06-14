import React from "react";
import './footer.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/batmanlogo.jpg'

function Footer() {

    const navigate = useNavigate()

    return (
        <footer id="footer"> 
            <div className="div-footer">
                <a onClick={() => navigate('/')}>
                    <img id="logo-footer" src={Logo}></img>
                </a>
            </div>
            <div id="linha-divisoria"/>
            <nav className="nav-footer">
                <ul className="ul-footer">
                    <li className="li-footer" onClick={() => {navigate('/')}}>Home</li>
                    <li className="li-footer" onClick={() => {navigate('/fotos')}}>Fotos</li>
                    <li className="li-footer" onClick={() => {navigate('/contacts')}}>Contacts</li>
                    <li className="li-footer" onClick={() => {navigate('/comments')}}>Commentaries</li>
                </ul>
            </nav>
            <div id="linha-divisoria"/>

            <div className="div-span-footer">
                <span className="span-footer">Todos os direitos reservados ©</span>
                <p/>
                <span className="span-footer">Desenvolvido por José V. Evaristo - 2024</span>
            </div>

        </footer>
    )
}


export default Footer;
