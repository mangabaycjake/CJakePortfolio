import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from "../assets/img/arrow1.svg"
import arrow2 from "../assets/img/arrow2.svg"
import colorSharp from "../assets/img/color-sharp.png"

import { SkillCard } from "./SkillCard";
import React, { useState } from "react";
import { skill_programming, skill_software, skill_other, skill_engineering } from "./SkillSet"

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  }

  const [activeTab, setActiveTab] = useState("programming");

  const SkillCarousel = ({ skills, responsive }) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      arrows={true}
      ssr={true}
      className="skill-slider"
    >
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </Carousel>
  );
};
  
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <h2>Skills</h2>
                      <p>My skills revolve around creativity, problem solving and technicalities.</p>
                        <div>
                          <div className="tabs">
                            <button className={activeTab === "programming" ? "active" : ""} onClick={() => setActiveTab("programming")}>
                              Programming
                            </button>
                            <button className={activeTab === "engineering" ? "active" : ""} onClick={() => setActiveTab("engineering")}>
                              Engineering
                            </button>
                            <button className={activeTab === "software" ? "active" : ""} onClick={() => setActiveTab("software")}>
                              Software
                            </button>
                            <button className={activeTab === "other" ? "active" : ""} onClick={() => setActiveTab("other")} >
                              Other
                            </button>
                          </div>
                          
                          <div className="tab-content">
                            {activeTab === "programming" && (
                              <SkillCarousel skills={skill_programming} responsive={responsive} />
                            )}
                            {activeTab === "engineering" && (
                              <SkillCarousel skills={skill_engineering} responsive={responsive} />
                            )}
                            {activeTab === "software" && (
                              <SkillCarousel skills={skill_software} responsive={responsive} />
                            )}
                            {activeTab === "other" && (
                              <SkillCarousel skills={skill_other} responsive={responsive} />
                            )}
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
