import "./header.scss";
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import MobileMenu from "../mobile-menu/mobile-menu";
import DesktopMenu from "../desktop-menu/desktop-menu";
import { Link } from "react-router-dom";

export default function Header({ isShowLinks }) {
  const [isShowMobileMenu, setisShowMobileMenu] = useState(false);
  const [isShowDesktopMenu, setIsShowDesktopMenu] = useState(false);
  const [isShowProjectMenu, setIsShowProjectMenu] = useState(false);

  const toggleMobileMenu = () => {
    const val = !isShowMobileMenu;
    setisShowMobileMenu(val);
  };

  const toggleDesktopMenu = () => {
    const val = !isShowDesktopMenu;
    setIsShowDesktopMenu(val);
  };

  const toggleProjectMenu = () => {
    const val = !isShowProjectMenu;
    setIsShowProjectMenu(val);
  };

  return (
    <header>
      <Navbar className="section-header bg-black w-100">
        <div className="content d-flex w-100 align-items-center">
          <a href="/" title="Modern Spaaces">
            <h1 className="logo" alt="Modern Spaaces">
              {" "}
            </h1>
          </a>
          <div className="navigation d-none d-md-flex justify-content-end align-items-center bg-black ml-auto">
            <div className="main-links d-flex align-items-center">
              <div className="link-wrapper">
                <a
                  href="javascript;"
                  className="item-link fc-white"
                  onMouseEnter={toggleProjectMenu}
                  onMouseLeave={toggleProjectMenu}
                >
                  <span>Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    className="icon icon-arrow ml-2"
                  >
                    <path d="M12 0.5L6.5 5.5L1 0.5" />
                  </svg>
                </a>
                <div
                  className={`item-link-menu p-2 bg-black d-flex flex-column`}
                >
                  <Link
                    to="soultree"
                    className="item-link fc-white pl-4 pr-4 pt-3 pb-2 m-0"
                  >
                    Engrace
                  </Link>
                  <span className="v-line bg-light-1"></span>
                  <Link
                    to="soultree"
                    className="item-link fc-white pl-4 pr-4 pt-3 pb-2 m-0"
                  >
                    Soultree
                  </Link>
                  <span className="v-line bg-light-1"></span>
                  <Link
                    to="soultree"
                    className="item-link fc-white pl-4 pr-4 pt-2 pb-2 m-0"
                  >
                    Soulace
                  </Link>
                  <span className="v-line bg-light-1"></span>
                  <Link
                    to="urbanest"
                    className="item-link fc-white pl-4 pr-4 pt-2 pb-2 m-0"
                  >
                    Urbanest
                  </Link>
                  <span className="v-line bg-light-1"></span>
                  <Link
                    to="soultree"
                    className="item-link fc-white pl-4 pr-4 pt-2 pb-2 m-0"
                  >
                    Windmere
                  </Link>
                </div>
              </div>
              <span>
                <a href="javascript;" className="item-link fc-white">
                  About Us
                </a>
              </span>
            </div>
            <div
              className={`extra-links d-flex align-items-center ${
                isShowLinks ? "show" : "hide"
              }`}
            >
              <span className="separator-v"></span>
              <a href="javascript;" className="item-link fc-white">
                +91 9008 288 288
              </a>
              <a href="javascript;" className="item-link fc-white">
                info@modernspaaces.com
              </a>
            </div>
            <Link to="contact-us">
              <button className="app-btn--hollow--white app-btn--small">
                <span className="app-btn-text">Plan a visit</span>
              </button>
            </Link>
          </div>
          <i
            className={`d-md-none ml-auto icon-toggle-nav ${
              isShowMobileMenu ? "icon-close" : ""
            }`}
            onClick={toggleMobileMenu}
          ></i>
          <i
            className={`d-none d-md-block icon-toggle-nav ml-5 ${
              isShowDesktopMenu ? "icon-close" : ""
            }`}
            onClick={toggleDesktopMenu}
          ></i>
        </div>
      </Navbar>
      <MobileMenu
        isShowMobileMenu={isShowMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      ></MobileMenu>
      <DesktopMenu
        isShowDesktopMenu={isShowDesktopMenu}
        toggleDesktopMenu={toggleDesktopMenu}
      ></DesktopMenu>
    </header>
  );
}
