import React from 'react';

const Header = () => {
    return (
        <div id="inicio" className="header-div">
            <div className="header-information">
                <div className="header-name-div">
                    <h3 className="header-name"> Portfólio </h3>
                </div>
                <div className="header-buttons-div">
                    <a href="#inicio" className="menu-item">Início</a>
                    <a href="#sobre" className="menu-item">Sobre</a>
                    <a href="#projetos" className="menu-item">Projetos</a>
                    <a href='#contato' className="menu-item">Contato</a>
                </div>
            </div>
        </div>
    )
};

export default Header;