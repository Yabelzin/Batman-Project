import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './fotos.css'
import Image11 from '../../assets/fotos/the-batman_1zjm.jpg'
import Image21 from '../../assets/fotos/batman-2.jpg'
import Image31 from '../../assets/fotos/thebat.png'

function Fotos() {

    return (
        <>
            <Header/>
            <div id="fotos-dimensioner">
                <div class="fotos">
                    <div class="quadro-1">
                        <img id="image-1-1" src={Image11} alt="Image 1"/>
                    </div>
                    <div class="quadro-2">
                        <img id="image-2-1" src={Image21} alt="Image 2"/>
                    </div>
                    <div class="quadro-3">
                        <img id="image-3-1" src={Image31} alt="Image 3"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
};

export default Fotos;