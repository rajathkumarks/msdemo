import "./contact-form.scss";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal";

export default function ContactForm({ inView }) {
  return (
    <section
      className={`section section-contact-form ${
        inView ? "inView" : "outView"
      }`}
    >
      <div className="content d-flex position-relative align-items-center">
        <div className="form-bg d-md-flex d-none"></div>
        <div className="form-container p-5 d-inline-block bg-white">
          <Fade bottom>
            <div className="heading fc-black mb-2">
              We’d love to hear from you!
            </div>
            <p className="fc-black mb-4 d-inline-block msg-text fw-bold">
              Send us a message!
            </p>
          </Fade>
          <Row xs={1} sm={1} md={2}>
            <Col>
              <Fade bottom>
                <div className="mb-4">
                  <label className="mb-2 fc-dark-4 d-block">Name*</label>
                  <input type="text" />
                </div>
                <div className="mb-4">
                  <label className="mb-2 fc-dark-4 d-block">Email ID*</label>
                  <input type="text" />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade bottom>
                <div className="mb-4">
                  <label className="mb-2 fc-dark-4 d-block">
                    Phone Number*
                  </label>
                  <input type="text" />
                </div>
                <div className="mb-4">
                  <label className="mb-2 fc-dark-4 d-block">
                    What would you like to discuss?
                  </label>
                  <input type="text" />
                </div>
              </Fade>
            </Col>
          </Row>
          <button className="app-btn--solid--primary mt-4">
            <span className="app-btn-text">Submit</span>
          </button>
          <Row className="mt-5" xs={1} sm={1} md={2}>
            <Col className="pb-4">
              <p className="mb-2 menu-head fc-black fw-bold">Address</p>
              <Fade bottom>
                <address className="menu-item fc-black">
                  73/2, Chambenahalli
                  <br />
                  Near Asset serene apartments,
                  <br />
                  Sarjapur Main Road,
                  <br />
                  Bangalore - 562125
                </address>
              </Fade>
            </Col>
            <Col>
              <p className="mb-2 menu-head fc-black fw-bold">Contact</p>
              <Fade bottom>
                <p className="mb-1 menu-item fc-black">+91 9008 288 288</p>
                <p className="mb-3 menu-item fc-black">
                  sales@modernspaaces.com
                </p>
                <button className="app-btn--hollow--dark app-btn--small">
                  <span className="app-btn-text">
                    <svg
                      width="12"
                      height="18"
                      viewBox="0 0 12 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.5 14C5.5 14 10.5 7.55895 10.5 4.86957C10.5 2.18018 8.26142 0 5.5 0C2.73858 0 0.5 2.18018 0.5 4.86957C0.5 7.55895 5.5 14 5.5 14ZM5.5 8C7.15685 8 8.5 6.65685 8.5 5C8.5 3.34315 7.15685 2 5.5 2C3.84315 2 2.5 3.34315 2.5 5C2.5 6.65685 3.84315 8 5.5 8Z"
                        fill="black"
                      />
                    </svg>{" "}
                    View on map
                  </span>
                </button>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
