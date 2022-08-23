import "./hero.scss";
import { Fade } from "react-reveal";

export default function Hero({ inView }) {
  return (
    <section
      className={`section section-hero ${inView ? "inView" : "outView"}`}
    >
      <div className="content">
        <div className="heading mb-4">
          <h2 className="sub-heading">
            <Fade bottom>
              <div className="fw-light">We don’t sell dreams.</div>
              <div className="fw-bold">We make homes happen.</div>
            </Fade>
          </h2>
        </div>
        <div className="d-md-none d-flex flex-column align-items-center mb-4">
          <Fade bottom>
            <span className="separator-h"></span>
            <span className="list-item mt-4 fc-black">+91 99800 62323</span>
            <span className="list-item mt-3 fc-black">
              sales@modernspaaces.com
            </span>
          </Fade>
        </div>
        <Fade bottom>
          <button className="app-btn--solid--primary app-btn--big mb-5">
            <span className="app-btn-text">Plan a visit</span>
          </button>
        </Fade>
        <div className="d-none d-md-flex justify-content-left mb-5 pb-5">
          <Fade bottom>
            <span className="separator-v"></span>
            <a href="javascript;" className="list-item ml-4 fc-black">
              +91 99800 62323
            </a>
            <a href="javascript;" className="list-item ml-4 fc-black">
              sales@modernspaaces.com
            </a>
          </Fade>
        </div>
        <div className="d-none d-md-flex justify-content-between mb-4">
          <Fade bottom>
            <div>
              <div className="feature-label">Thoughtfully designed</div>
              <span className="feature">Homes crafted with care</span>
            </div>
            <div>
              <div className="feature-label">Smart technology</div>
              <span className="feature">Homes built for the future</span>
            </div>
            <div>
              <div className="feature-label">Affordable</div>
              <span className="feature">Premium, budget-friendly homes</span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
