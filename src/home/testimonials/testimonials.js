import "./testimonials.scss";
import { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { Row, Col } from "react-bootstrap";

export default function Testimonials({ inView }) {
  const [slideState, setSlideState] = useState({
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: false,
    config: config.gentle,
  });

  const [activeIdx, setActiveIdx] = useState(0);

  const slides = [
    {
      tagline: "No second thoughts after the first visit",
      text: "Booked an apartment at 312 West. I have to say the experience is been good so far. Team patiently answered all our questions, understood our financial status and agreed for flexible payment structure.",
      name: "Palani Kasinathan",
      designation: "Software engineer",
    },
    {
      tagline: "Great quality and value for the money",
      text: "Visited many other properties in and around the area. one visit to modern spaaces I had no second thought. Great quality and value for the money.",
      name: "Saket More",
      designation: "Sales Director",
    },
    {
      tagline: "Team patiently answered all our question",
      text: "They understood our financial status and agreed for flexible payment structure. Young and energetic team who seem to know to get the basic things right.",
      name: "Priya Krishnan",
      designation: "Design Lead",
    },
  ];

  const carousel = slides.map((item, idx) => {
    return {
      key: uuidv4(),
      content: (
        <div
          key={idx}
          className={`tile bg-white justify-content-start d-flex flex-column ${
            activeIdx === idx ? "active" : ""
          }`}
        >
          <i className="quotes"></i>
          <div className="tagline mb-2 fc-black">{item.tagline}</div>
          <div className="text fc-black mb-5">{item.text}</div>
          <div className="name fc-black mt-auto">{item.name}</div>
        </div>
      ),
    };
  });

  const selectItem = (idx) => {
    setActiveIdx(idx);
    setSlideState({
      ...slideState,
      goToSlide: idx,
    });
  };

  const nextItem = () => {
    let idx = activeIdx;
    if (activeIdx < slides.length - 1) {
      setActiveIdx(++idx);
      setSlideState({
        ...slideState,
        goToSlide: idx,
      });
    } else {
      setActiveIdx(0);
      setSlideState({
        ...slideState,
        goToSlide: 0,
      });
    }
  };

  return (
    <section
      className={`section section-testimonials bg-white ${
        inView ? "inView" : "outView"
      }
      `}
    >
      <div className="content pt-5">
        <Row className="items" xs={1} md={2}>
          <Col className="col-xs-12 col-md-5 test-col-1">
            <h2 className="sub-heading fc-black">
              <span className="fw-bold">Encouraging words </span>
              from customers that keep us going
            </h2>
            <span className="desc fc-black mb-3">
              We are happy because we have happy customers.
            </span>
          </Col>
          <Col className="col-md-7 d-md-block d-none">
            <Carousel
              slides={carousel}
              goToSlide={slideState.goToSlide}
              offsetRadius={slideState.offsetRadius}
              showNavigation={slideState.showNavigation}
              animationConfig={slideState.config}
            />
          </Col>
          <Col className="col-xs-12 d-md-none test-col-2">
            {slides.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="tile bg-white mr-2 justify-content-start d-flex flex-column"
                >
                  <i className="quotes"></i>
                  <div className="tagline mb-2 fc-black">
                    {item.tagline}
                  </div>
                  <div className="text fc-black mb-5">{item.text}</div>
                  <div className="name fc-black mt-auto">{item.name}</div>
                </div>
              );
            })}
          </Col>
        </Row>
        <div className="mt-3 justify-content-end d-none d-md-flex">
          {slides.map((item, idx) => {
            return (
              <i
                onClick={() => selectItem(idx)}
                key={idx}
                className={`${activeIdx === idx ? "active-dot" : ""} dot`}
              ></i>
            );
          })}
        </div>
        <div className="m-3 justify-content-end d-none d-md-flex">
          <span className="arrow-next" onClick={() => nextItem()}></span>
        </div>
      </div>
    </section>
  );
}
