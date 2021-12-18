import React from 'react';
import ButtonAnchor from '../components/ButtonAnchor';
import { AiFillProject } from 'react-icons/ai';
import CardComponent from '../components/CardComponent';
import trybewalletimg from '../images/trybewallet-project.png';
import recipeappimg from '../images/recipe-app.png';
import triviaimg from '../images/trivia.png';

const Projects = () => {
  const cardTexts = [
    {
      alt: 'trybewallet',
      title: 'TrybeWallet',
      text1: 'Projeto desenvolvido utilizando React e Redux para o gerenciamento de estado.',
      text2: 'A ideia foi fazer um app de gerencimento de gastos com conversão automática para real.',
      img: trybewalletimg,
    },
    {
      alt: 'app de receitas',
      title: 'App de Receitas',
      text1: 'Projeto desenvolvido em equipe, utilizando React e ContextAPI para o gerenciamento do estado.',
      text2: 'A ideia foi consumir APIs de receitas, construindo assim um app mobile para facilitar a confecção das receitas.',
      img: recipeappimg
    },
    {
      alt: 'trivia',
      title: 'Trivia',
      text1: 'Projeto desenvolvido em equipe, utilizando React e Redux para o gerenciemento do estado.',
      text2: 'A ideia foi construir um jogo web de perguntas e respostas, consumindo uma API de trivia.',
      img: triviaimg
    }
  ];

  return (
      <div id="projetos" className="projects-session">
        {ButtonAnchor("sobre", "contato")}
          <div className='projects-proj-div'>
              <AiFillProject className="projects-proj-icon" />
              <h1 className="projects-hero-title">Projetos</h1>
              <hr />
          </div>
          <p className="projects-hero-paragraph">Aqui está uma lista de alguns projetos desenvolvidos durante o meu aprendizado,
              sendo eles feitos sozinho ou em equipe.</p>
          <div className="projects-section">
            <div className='projects-card'>
              {cardTexts.map(({ img, alt, title }) => CardComponent(img, alt, title))}
            </div>
          </div>
      </div>
    )
};

export default Projects;
