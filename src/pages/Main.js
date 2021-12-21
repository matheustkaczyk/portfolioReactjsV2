import React from 'react';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import Me from '../images/matheus-image.jpeg';

const Main = () => {
    return (
        <div className="main-section">
            <div className="main-informations">
                {/* <img className="main-hero-img" src={ Me } alt="Foto Matheus Tkaczyk Ribeiro" /> */}
                <div>
                    <h1 className="main-hero-text">Matheus Tkaczyk Ribeiro</h1>
                    <h3 className="main-hero-subtitle">Desenvolvedor Web Jr.</h3>
                    <div className="social-medias">
                        <a href="https://www.linkedin.com/in/matheustkaczykribeiro/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin className="social-items linkedin" />
                        </a>
                        <a href="https://github.com/matheustkaczyk" target="_blank" rel="noreferrer">
                            <AiOutlineGithub className="social-items" />
                        </a>
                        <a href="https://wa.link/4dkaii" target="_blank" rel="noreferrer">
                            <AiOutlineWhatsApp className="social-items whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
