import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css';
import TrackVisibility from 'react-on-screen'
import resume from '../assets/Mangabay - Embedded Software Engineer (2).pdf';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [ "Embedded Software Engineer", "Registered Electrical Engineer"]
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(100)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }
  
  const [showMore, setShowMore] = useState(false)
  const longText = ["Although my degree is Electrical Engineering, ",
    "I pursued my passion in programming and IoT projects as I majored in Computer Engineering."]

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Jake`} </h1>
                 <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Embedded Software Engineer", "Registered Electrical Engineer"]'><span className="wrap">{text}</span></span></h2>
                  <p>Specializing in the development of automated systems through the integration of programming, instrumentation, and engineering. Passionate, willing to learn, and always seeking improvements. </p>
                  <p>
                    {showMore ? longText : longText.slice(0, 0)}
                    <span
                      onClick={() => setShowMore(!showMore)}
                      style={{ color: "gray", cursor: "pointer", marginLeft: "6px" }}
                    >
                      {showMore ? "Show less about me." : "Show more about me."}
                    </span>
                  </p>
                  <button className="resume-button" onClick={() => window.open(resume)}>View Resume</button>
                  {/*<button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>*/}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div style={{ position: "relative", paddingBottom: "85%", height: 0 }}>
                <iframe
                    src="https://www.youtube.com/embed/M5F6JIFi0Y0?si=Iqyc6fc0xDiP8B86?autoplay=1"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    }}
                />
                </div>
                }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
