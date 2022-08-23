import "./footer.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function Footer({ inView }) {
  return (
    <footer
      className={`section section-footer bg-dark-1 pb-0 ${
        inView ? "inView" : "outView"
      }`}
    >
      <div className="content pt-4 pb-4">
        <Row>
          <div className="col-md-4 pr-4 mb-4">
            <div className="logo mb-4" alt="Modern Spaaces"></div>
            <Fade bottom>
              <p className="copy fc-light-3">
                Real estate developers and promoters advocating the adaptability
                and evolution of buildings, creativity, and innovation. We build
                ecological homes and follow efficient sustainable practices to
                promote green living. We strive to provide the best yet
                affordable urban community living experience to our occupants.
              </p>
            </Fade>
          </div>
          <div className="col-md-8 pl-4">
            <div className="heading fc-white">Menu</div>
            <Row className="mb-5 pb-4 items" xs={2} sm={3} md={6}>
              <Fade bottom>
                <a href="javascript;" className="list-item fc-light-3 col">
                  Projects
                </a>
                <a href="javascript;" className="list-item fc-light-3 col">
                  Careers
                </a>
                <a href="javascript;" className="list-item fc-light-3 col">
                  About us
                </a>
                <a href="javascript;" className="list-item fc-light-3 col">
                  Investment Opportunities
                </a>
                <a href="javascript;" className="list-item fc-light-3 col">
                  Blog
                </a>
                <Link to="contact-us" className="list-item fc-light-3 col">
                  Contact
                </Link>
              </Fade>
            </Row>
            <Row>
              <div className="col-xs-12 col-md-6 mb-5">
                <div className="heading fc-white">Follow Us</div>
                <div className="social">
                  <Fade bottom>
                    <i className="icon-social linkedin"></i>
                    <i className="icon-social facebook"></i>
                    <i className="icon-social instagram"></i>
                  </Fade>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 mb-5">
                <div className="heading fc-white">
                  Get all the latest updates
                </div>
                <div className="d-flex">
                  <input
                    type="text"
                    className="input mr-3 pl-2 pr-2 fc-white"
                    placeholder="Email Id"
                  />
                  <button className="app-btn--small app-btn--hollow--white">
                    <span className="app-btn-text">Subscribe</span>
                  </button>
                </div>
              </div>
            </Row>
          </div>
        </Row>
        <Row className="copyright fc-light-3" xs={1} sm={2} md={2}>
          <Col className="col-xs-12 col-md-8 mt-4">
            <Fade bottom>© 2021 modernspaaces.com. All rights reserved.</Fade>
          </Col>
          <Col className="col-xs-12 col-md-4 mt-4">
            <Fade bottom>
              <span>
                <Link to="disclaimer" className="mr-5 fc-light-3">
                  Disclaimer
                </Link>
              </span>
              <span>
                <Link to="privacy-policy" className="mr-5 fc-light-3">
                  Privacy Policy
                </Link>
              </span>
            </Fade>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
