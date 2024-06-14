import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import './contato.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loc from '../../assets/myplace.png'

function Contato() {

    return (
        <div>
            <Header/>
            <div className="contact-page">
                <div id='contact-div'>
                    <h1 id='contact-declaration'>Mande-nos uma mensagem!</h1>
                    <div className='contact-form-div'>
                        <form className='contact-form'>
                                <input required className="input-contact" type="email" name="email" id="email" placeholder="Your Email"/>

                                <input required className="input-contact" type="text" name="name" id="name" placeholder="Your Name"/>

                                <input required className="input-contact" type="tel" name="telefone" id="telefone" placeholder="Phone Number"/>

                                <input required className="input-contact" type="text" name="needs" id="needs" placeholder="Your message to Us"/> 
                                <button id="contact-button">
                                    Enviar
                                </button>
                        </form>
                    </div>
                    <a href='https://maps.app.goo.gl/BXQKii8Apddjajq57' target='blank'>
                        <img src={Loc} id='loc-contact' />
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    
    )
};

export default Contato;