import "./desktop-menu.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal";

export default function DesktopMenu({ isShowDesktopMenu, toggleDesktopMenu }) {
  return (
    <div
      className={`desktop-menu bg-white d-flex ${
        isShowDesktopMenu ? "show" : "hide"
      }`}
    >
      <i className="icon-close-nav ml-5" onClick={toggleDesktopMenu}></i>
      <Row className="v-menu">
        <Col className="col-5 col-left p-5">
          <div className="menu-label mb-3 mt-4 fc-dark-3">MENU</div>
          <div className="d-flex">
            <ul>
              <Fade bottom>
                <li className="pt-3 pb-3">
                  <a href="javascript;" className="menu-item fc-black">
                    Careers
                  </a>
                </li>
                <li className="pt-3 pb-3">
                  <a href="javascript;" className="menu-item fc-black">
                    About Us
                  </a>
                </li>
                <li className="pt-3 pb-3">
                  <a href="javascript;" className="menu-item fc-black">
                    Investment Opportunities
                  </a>
                </li>
                <li className="pt-3 pb-3">
                  <a href="javascript;" className="menu-item fc-black">
                    Blogs
                  </a>
                </li>
              </Fade>
            </ul>
          </div>
          <div className="menu-label mb-3 mt-5 fc-dark-3">FOLLOW US</div>
          <div>
            <span className="social">
              <Fade bottom>
                <i className="icon-social linkedin"></i>
                <i className="icon-social facebook"></i>
                <i className="icon-social instagram"></i>
              </Fade>
            </span>
          </div>
        </Col>
        <Col className="col-7 p-5">
          <div className="menu-label mb-3 mt-4 fc-dark-3">PROJECTS</div>
          <ul>
            <Fade bottom>
              <li className="pt-3 pb-3">
                <Link
                  to="soultree"
                  className="menu-item poject-item fc-black"
                  onClick={toggleDesktopMenu}
                >
                  Soultree
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <Link
                  to="urbanest"
                  className="menu-item poject-item fc-black"
                  onClick={toggleDesktopMenu}
                >
                  Urbanest
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <Link
                  to="urbanest"
                  className="menu-item poject-item fc-black"
                  onClick={toggleDesktopMenu}
                >
                  Soulace
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <Link
                  to="urbanest"
                  className="menu-item poject-item fc-black"
                  onClick={toggleDesktopMenu}
                >
                  Engrace
                </Link>
              </li>
              <li className="pt-3 pb-3">
                <Link
                  to="urbanest"
                  className="menu-item poject-item fc-black"
                  onClick={toggleDesktopMenu}
                >
                  Windmere
                </Link>
              </li>
            </Fade>
          </ul>
          <div className="menu-label mb-3 mt-5 fc-dark-3">CONTACT</div>
          <ul>
            <Fade bottom>
              <li className="pt-3 pb-3">
                <a
                  href="javascript;"
                  className="menu-item contact-item fc-black"
                >
                  +91 99800 62323
                </a>
              </li>
              <li className="pt-3 pb-3">
                <a
                  href="javascript;"
                  className="menu-item contact-item fc-black"
                >
                  sales@modernspaaces.com
                </a>
              </li>
              <li className="pt-5 pb-3 d-flex align-items-center">
                <Link to="contact-us" onClick={toggleDesktopMenu}>
                  <button className="app-btn--hollow--dark app-btn--small">
                    <span className="app-btn-text">Get in touch</span>
                  </button>
                </Link>
              </li>
            </Fade>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
