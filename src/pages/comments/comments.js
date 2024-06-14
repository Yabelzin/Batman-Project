import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './comments.css'
import NotaCritica from "../../assets/image-removebg-preview.png"

function Comments() {

        const [comment, setComment] = useState('');
      
        const handleInput = (event) => {
          setComment(event.target.value);
          event.target.style.height = 'auto';
          event.target.style.height = `${event.target.scrollHeight}px`;
        }

    return (
        <>
            <Header/>
            <div id="commentary-page-align">
                <div className='commentary-page'>
                        <div className="the-movie">
                            <div className="movie-rate-session">
                                <h1 id="movie-name">THE BATMAN</h1>
                                <h2 id="critic-rate">Nota crítica:</h2>
                                <div>
                                    <img id='pontuacao-critica' src={NotaCritica}/>
                                </div>
                            </div>
                        </div>
                        <div className="commentaries">
                            <div className="users-commentaries">
                                <div id="commentary">
                                    <h3 id="user-name">Anonymous 1</h3>
                                    <text id="rate">5.0 ⭐⭐⭐⭐⭐</text>
                                    <p/>
                                    <text id="user-commentary">Excelente roteiro, ator principal e coadjuvantes. Pattinson manda bem, embora eu mesmo não esperasse, sombrio, rústico, refém de Alfred e Gordon como figuras paternas e morais. O filme o mostra evoluindo da vingança para a esperança, uma Mulher Gato muito determinada e um vilão de pimeira, o Charada e a expectativa de ascenção do Pinguim. Não perca! Nada cansativo. Boas recordações do Batman grande detetive furtivo dos anos 60 que aprisionava e embolava os capangas dos vilões, mas desta vez nada pop.</text>
                                </div>
                                <div id="commentary">
                                    <h3 id="user-name">Anonymous 2</h3>
                                    <text id="rate">5.0 ⭐⭐⭐⭐⭐</text>
                                    <p/>
                                    <text id="user-commentary">Filme sensacional. Foi um dos melhores filmes de heróis que já assisti. Robert Pattinson ficou incrível e combina muito bem com o personagem. Parabéns Matt Reeves!!</text>
                                </div>
                                <div id="commentary">
                                    <h3 id="user-name">Anonymous 3</h3>
                                    <text id="rate">5.0 ⭐⭐⭐⭐⭐</text>
                                    <p/>
                                    <text id="user-commentary">O Batman de Matt Reeves sem dúvidas é uma obra prima do gênero de super herói. A atmosfera criada é algo impressionante, as atuações são sensacionais, Robert Pattinson é a melhor interpretação do Batman, Zoe Kravitz é a melhor Mulher-Gato, Paul Dano faz um Charada fenomenal. Em diversos momentos o filme lhe arrepia, ou no meu caso, fiquei com um sorriso bobo de satisfação estampado no rosto. <p/> A trilha sonora e a fotografia são excelentes, filme denso, sombrio na medida certa e muito, mas muito bem realizado, era o filme do Batman que queriamos e que precisávamos, excelente.</text>
                                </div>
                            </div>
                        </div>
                        <div className="own-commentary">
                            <h3 className="declaration">
                            E você, concorda? Assistiu o filme? Deixe o seu comentário abaixo. 🤩
                            </h3>
                            <form className="own-commentary-form">
                                <textarea
                                    id="commentary-block"
                                    value={comment}
                                    onChange={handleInput}
                                    rows={1}
                                ></textarea>
                                <div id="button-div">
                                    <button id="commentary-buttom">Enviar</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Comments;