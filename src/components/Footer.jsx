import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/jake-logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm />*/}
          <Col sx={12} sm={6}>
            {/*<img src={logo} alt="Logo" />*/}
            <h3 style={{ fontFamily: 'Centra', color: 'white', fontWeight: '500' }}>JAKE PORTFOLIO </h3>
          </Col>
          <Col sx={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
