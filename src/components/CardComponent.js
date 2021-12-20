import { AiOutlineGithub } from 'react-icons/ai';


const CardComponent = (img, alt, title, link, github) => {
  return (
    <div className='project-card'>
      <div className='project-image-div'>
        <a href={ link } target='_blank' rel="noreferrer">
          <img className="project-image" src={ img } alt={ alt } />
        </a>
          <h3>{title}</h3>
        <a href={ github } target='_blank' rel='noreferrer'>
          <AiOutlineGithub className='project-github-icon' />
        </a>
      </div>
    </div>
  )
};

export default CardComponent;
