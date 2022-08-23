import "./showcase.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import soultree1 from "../../images/home/soultree-1-bg.webp";
import urbanest1 from "../../images/home/urbanest-1-bg.webp";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Showcase({ inView }) {
  const carouselProps = {
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 0,
    selectedItem: 0,
    interval: 3000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: null,
  };

  const projects = [
    {
      name: "Soultree",
      units: "563",
      price: "16 Lakhs",
      sizes: "1, 2 & 3",
      address: "Sompura gate",
      desc: "Come, live the good life in a panorama of greenery. Find the real joy of community living with a myriad of 50+ world-class amenities.",
      slides: [
        <img src={soultree1} className="d-block w-100 h-auto" alt="soultree" />,
      ],
      link: "soultree",
    },
    {
      name: "Urbanest",
      units: "330",
      price: "20 Lakhs",
      sizes: "1, 2 & 3",
      address: "Sompura gate",
      desc: "A delectable community that celebrates light and space. Inspired by the principles of modernism, each detail of the project combines serenity and beauty to achieve a contemporary urban living experience.",
      slides: [
        <img src={urbanest1} className="d-block w-100 h-auto" alt="urbanest" />,
      ],
      link: "urbanest",
    },
    {
      name: "Soulace",
      units: "563",
      price: "16 Lakhs",
      sizes: "1, 2 & 3",
      address: "Sompura gate",
      desc: "Come, live the good life in a panorama of greenery. Find the real joy of community living with a myriad of 50+ world-class amenities.",
      slides: [
        <img src={soultree1} className="d-block w-100 h-auto" alt="soultree" />,
      ],
      link: "soultree",
    },
    {
      name: "Windmere",
      units: "330",
      price: "20 Lakhs",
      sizes: "1, 2 & 3",
      address: "Sompura gate",
      desc: "A delectable community that celebrates light and space. Inspired by the principles of modernism, each detail of the project combines serenity and beauty to achieve a contemporary urban living experience.",
      slides: [
        <img src={urbanest1} className="d-block w-100 h-auto" alt="urbanest" />,
      ],
      link: "urbanest",
    },
    {
      name: "Engrace",
      units: "563",
      price: "16 Lakhs",
      sizes: "1, 2 & 3",
      address: "Sompura gate",
      desc: "Come, live the good life in a panorama of greenery. Find the real joy of community living with a myriad of 50+ world-class amenities.",
      slides: [
        <img src={soultree1} className="d-block w-100 h-auto" alt="soultree" />,
      ],
      link: "soultree",
    },
  ];


  return (
    <section
      className={`section section-showcase bg-white ${
        inView ? "inView" : "outView"
      }
    `}
    >
      <div className="content">
        <h2 className="fc-black sub-heading ml-auto mr-auto text-center">
          <span className="fw-bold">Latest Projects</span>
        </h2>
        {projects.map((item, idx) => {
          return (
            <Row
              className="mt-5 pt-5 align-items-center project-row d-md-flex d-none"
              md={2}
              key={idx}
            >
              <Col>
                <Carousel {...carouselProps}>
                  {item.slides.map((img, j) => (
                    <div key={j}>{img}</div>
                  ))}
                </Carousel>
              </Col>
              <Col className="pl-5">
                <div className="project">
                  <Fade bottom>
                    <h3 className="name fc-black mb-2 fw-bold">{item.name}</h3>
                    <p className="desc pt-3 pb-4 fc-dark-3">{item.desc}</p>
                  </Fade>
                  <Row
                    md={2}
                    className="features mb-4 fc-black d-flex text-left"
                  >
                    <Col>
                      <Fade bottom>
                        <div className="mb-3">
                          <div className="feature-label">{item.sizes}</div>
                          <span className="feature-name">BHK</span>
                        </div>
                        <div className="mb-3">
                          <div className="feature-label">{item.units}</div>
                          <span className="feature-name">Units</span>
                        </div>
                      </Fade>
                    </Col>
                    <Col>
                      <Fade bottom>
                        <div className="mb-3">
                          <div className="feature-label">{item.price}</div>
                          <span className="feature-name">Onwards</span>
                        </div>
                        <div className="mb-3">
                          <div className="feature-label">{item.address}</div>
                          <span className="feature-name">
                            Sarjapur Road, Bengaluru
                          </span>
                        </div>
                      </Fade>
                    </Col>
                  </Row>
                  <Link to={item.link}>
                    <Fade bottom>
                      <button className="app-btn--solid--primary">
                        <span className="app-btn-text">View Full Project</span>
                      </button>
                    </Fade>
                  </Link>
                </div>
              </Col>
            </Row>
          );
        })}
        {/* Mobile View */}
        {projects.map((item, idx) => {
          return (
            <Row
              className="mt-5 pt-5 align-items-center project-row d-md-none"
              xs={1}
              key={idx}
            >
              <Col>
                <h3 className="name fc-black mb-2 fw-bold">{item.name}</h3>
                <p className="desc pt-3 pb-4 fc-dark-3">{item.desc}</p>
              </Col>
              <Col>
                <Carousel {...carouselProps}>
                  {item.slides.map((img, j) => (
                    <div key={j}>{img}</div>
                  ))}
                </Carousel>
              </Col>
              <Col className="pt-5">
                <div className="features m-0 mb-4 fc-black d-flex justify-content-between text-left">
                  <div>
                    <div className="feature-label">{item.sizes}</div>
                    <span className="feature-name">BHK</span>
                  </div>
                  <span className="separator bg-primary-1"></span>
                  <div>
                    <div className="feature-label">{item.units}</div>
                    <span className="feature-name">Units</span>
                  </div>
                  <span className="separator bg-primary-1"></span>
                  <div>
                    <div className="feature-label">{item.price}</div>
                    <span className="feature-name">Onwards</span>
                  </div>
                  <span className="separator bg-primary-1"></span>
                  <div>
                    <div className="feature-label">{item.address}</div>
                    <span className="feature-name">
                      Sarjapur Road, Bengaluru
                    </span>
                  </div>
                </div>
                <Link to={item.link}>
                  <button className="app-btn--solid--primary">
                    <span className="app-btn-text">View Full Project</span>
                  </button>
                </Link>
              </Col>
            </Row>
          );
        })}
      </div>
    </section>
  );
}
