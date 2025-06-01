import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react"; 
import { projects_1, projects_2 } from "./ProjectSet";

export const Projects = () => {

  const [activeTab, setActiveTab] = useState("Page 1");

  const ProjectGrid = ({ proj_set }) => {
    return (
      <Row>
        {proj_set.map((project, index) => {return (<ProjectCard key={index} {...project} />)})}
      </Row>
    );
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I work on projects with 
                <span style={{ color:'rgb(54, 170, 106)', fontWeight: 'bold' }}> passion, curiosity, and peculiarity. </span>
                I do not stop until I've walked 'an extra mile'. <br/><br/>
                These are my undergraduate and personal projects.</p>

                <div className="project-tab-content">
                  {activeTab === "Page 1" && (
                    <ProjectGrid proj_set={projects_1} />
                  )}
                  {activeTab === "Page 2" && (
                    <ProjectGrid proj_set={projects_2} />
                  )}
                </div>
                <div className="project-tabs">
                  <button className={activeTab === "Page 1" ? "active" : ""} onClick={() => setActiveTab("Page 1")}>
                    Page 1
                  </button>
                  <button className={activeTab === "Page 2" ? "active" : ""} onClick={() => setActiveTab("Page 2")}>
                    Page 2
                  </button>
                </div>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
