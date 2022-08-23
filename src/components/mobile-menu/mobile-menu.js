import "./mobile-menu.scss";
import { Link } from "react-router-dom";

export default function MobileMenu({ isShowMobileMenu, toggleMobileMenu }) {
  return (
    <div
      className={`mobile-menu w-100 bg-white d-flex flex-column ${
        isShowMobileMenu ? "show" : "hide"
      }`}
    >
      <div className="d-flex p-4">
        <span className="logo" alt="Modern Spaaces"></span>
        <i className="icon-close-nav ml-auto" onClick={toggleMobileMenu}></i>
      </div>
      <div className="v-menu p-5">
        <div className="menu-label my-3">
          <span className="bg-white pr-2 fc-dark-3">MENU</span>
          <span className="h-line bg-light-3"></span>
        </div>
        <ul className="p-0 fw-light">
          <li className="pt-3 pb-3">
            <a href="javascript;" className="menu-item fc-black">
              Projects
            </a>
          </li>
          <li className="pt-3 pb-3">
            <a href="javascript;" className="menu-item fc-black">
              Investment Opportunities
            </a>
          </li>
          <li className="pt-3 pb-3">
            <a href="javascript;" className="menu-item fc-black">
              About Us
            </a>
          </li>
          <li className="pt-3 pb-3">
            <a href="javascript;" className="menu-item fc-black">
              Blog
            </a>
          </li>
        </ul>
        <div className="menu-label mb-3 mt-4">
          <span className="bg-white pr-2 fc-dark-3">PROJECTS</span>
          <span className="h-line bg-light-3"></span>
        </div>
        <ul className="p-0 fw-light">
          <li className="pt-3 pb-3">
            <Link to="soultree" className="menu-item fc-black" onClick={toggleMobileMenu}>
              Soultree
            </Link>
          </li>
          <li className="pt-3 pb-3">
            <Link to="urbanest" className="menu-item fc-black" onClick={toggleMobileMenu}>
              Urbanest
            </Link>
          </li>
          <li className="pt-3 pb-3">
            <Link to="urbanest" className="menu-item fc-black" onClick={toggleMobileMenu}>
              Soulace
            </Link>
          </li>
          <li className="pt-3 pb-3">
            <Link to="urbanest" className="menu-item fc-black" onClick={toggleMobileMenu}>
              Engrace
            </Link>
          </li>
          <li className="pt-3 pb-3">
            <Link to="urbanest" className="menu-item fc-black" onClick={toggleMobileMenu}>
              Windmere
            </Link>
          </li>
        </ul>
        <div className="menu-label mb-3 mt-4">
          <span className="bg-white pr-2 fc-dark-3">CONTACT</span>
          <span className="h-line bg-light-3"></span>
        </div>
        <ul className="p-0 fw-light">
          <li className="pt-3 pb-3">
            <a href="javascript;" className="menu-item fc-black">
              +91 99800 62323
            </a>
          </li>
          <li className="pt-3 pb-3">
            <a href="javascript;" className="menu-item fc-black">
              sales@modernspaaces.com
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center mt-auto p-5">
        <Link to="contact-us" onClick={toggleMobileMenu}>
          <button className="app-btn--solid--primary app-btn--big w-100">
            <span className="app-btn-text">Plan a visit</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
