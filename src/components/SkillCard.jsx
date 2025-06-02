import { Col } from "react-bootstrap";

export const SkillCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      
        <div className="skill-imgbx">
          <img src={imgUrl} />
          <>
            <div className="skill-txtx">
              <h4 className="topTitle">{title}</h4>
              <span className="skillDesc">{description}</span>
            </div>
            <div>
              <h4 className="botTitle">{title}</h4>
            </div>
          </>
        </div>
        
    </Col>

  )
}
