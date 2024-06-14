import React from 'react';
import Header from '../../components/header/header'
import './styles.css'
import Trailer from '../../assets/video.mp4'
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';


function Home() {
    
    return (
        <div>
            <Header/>
            <div className='home'>
                </div>
                <div className='father-banner'>
                    <div id='banner'/>
                </div>
                <div id='trailer-container'>
                    <div className='content'>
                        <div className='video-div'>
                            <video controls className='trailer'>
                                <source src={Trailer}/>
                                Seu dispositivo não possui suporte para vídeos.
                            </video>
                        </div>
                        <div id='sinopse'>
                            <p className='description'>
                                Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.
                            </p>
                            <button className='button'>Guarantee entry</button>
                        </div>
                    </div>
                </div>

            <Cards/>
            <Footer/>
        </div>
    )
};

export default Home;