const CardComponent = (img, alt, title, text1, text2) => {
  return (
    <div className='project-card'>
      <div className='project-image-div'>
        <img className="project-image" src={ img } alt={ alt } />
        <h3>{title}</h3>
      </div>
      {/* <div className="project-text-div">
        <p className='project-text'>{text1}</p>
        <p className='project-text'>{text2}</p>
      </div> */}
    </div>
  )
};

export default CardComponent;
