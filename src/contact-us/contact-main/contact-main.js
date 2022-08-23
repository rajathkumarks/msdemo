import "./contact-main.scss";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

export default function ContactMain({ inView }) {
  return (
    <section className={`section section-contact-main pt-4`}>
      <div className="content">
        <Row xs={1} sm={1} md={2}>
          <Col className="mb-5 col-left">
            <div
              className={`white-tile fc-black p-5 justify-content-center d-flex flex-column ${
                inView ? "inView" : "outView"
              }`}
            >
              <Fade bottom>
                <span className="heading fw-bold mb-1">Educate yourself</span>
                <span className="summary mb-3">towards a right decision!</span>
                <span className="desc mb-4">
                  We have got you covered with the right info. Learn everything
                  you need to know before making a decision.
                </span>
                <button className="app-btn--solid--primary align-self-start">
                  <span className="app-btn-text">Read blog</span>
                </button>
              </Fade>
            </div>
          </Col>
          <Col className="col-right">
            <div
              className={`white-tile fc-black p-5 justify-content-center d-flex flex-column ${
                inView ? "inView" : "outView"
              }`}
            >
              <Fade bottom>
                <span className="heading fw-bold mb-1">
                  Investment Opportunities
                </span>
                <span className="summary mb-3">
                  Make your money work for you
                </span>
                <span className="desc mb-4">
                  We have got you covered with the right info. Learn everything
                  you need to know before making a decision.
                </span>
                <button className="app-btn--solid--primary align-self-start">
                  <span className="app-btn-text">Learn more</span>
                </button>
              </Fade>
            </div>
          </Col>
        </Row>
        <div
          className={`dark-tile fc-white mt-5 p-5 justify-content-center d-flex flex-column ${
            inView ? "inView" : "outView"
          }`}
        >
          <Fade bottom>
            <span className="heading fw-bold mb-1">Projects</span>
            <span className="summary mb-3">towards a right decision!</span>
            <span className="desc mb-4">
              We have got you covered with the right info. <br /> Learn
              everything you need to know before making a decision.
            </span>
            <button className="app-btn--hollow--primary align-self-start">
              <span className="app-btn-text">View project</span>
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
}
