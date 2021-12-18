import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

const ButtonAnchor = (up, down) => {
  const ups = `#${up}`;
  const downs = `#${down}`
  return (
    <div className="anchor-div">
      <div className="anchor-btn-div">
        <a href={ups} className="anchor-arrow-btn"><BsFillArrowUpCircleFill className="btn-icon" /></a>
        <a href={downs} className="anchor-arrow-btn"><BsFillArrowDownCircleFill className="btn-icon" /></a>
      </div>
    </div>
  )
}

export default ButtonAnchor;
