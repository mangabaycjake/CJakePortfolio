import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, visitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/><br/>
          <a href={visitUrl} target="_blank" rel="noopener noreferrer" className="visit-button">
            View Project Externally
          </a>
        </div>
      </div>
    </Col>
  )
}
