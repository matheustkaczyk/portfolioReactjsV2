import React from 'react';
import ButtonAnchor from '../components/ButtonAnchor';
import { IoBulbOutline } from 'react-icons/io5'
import { IoLogoGameControllerB, IoMdHeadset, IoIosBook, IoIosCafe } from "react-icons/io";

const About = () => {
    return (
        <div id="sobre" className="about-section">
            {/* {ButtonAnchor('inicio', 'projetos')} */}
            <div className="about-hero-session">
                <IoBulbOutline className="about-light-icon"/>
                <h1 className="about-hero-title">Sobre</h1>
            </div>
                <hr />
            <div className="about-text-session">
                <h3 className="about-hello-text">Olá! Meu nome é Matheus</h3>
                <p className="about-text">
                    Tenho 23 anos e estou estudando desenvolvimento de software,
                    busco grandes oportunidades para mostrar o meu valor na área e me desenvolver
                    cada vez mais, tanto nas hard-skills quanto nas soft-skills.
                </p>
            </div>
                <hr />
            <div className="about-more-info">
                    <h2>Meus interesses e hobbies</h2>
                <div className="about-interest">
                        <div className="interest-item"><IoLogoGameControllerB /> Games</div>
                        <div className="interest-item"><IoMdHeadset /> Música</div>
                        <div className="interest-item"><IoIosBook /> Livros</div>
                        <div className="interest-item"><IoIosCafe /> Café</div>
                </div>
            </div>
        </div>
    )
};

export default About;
