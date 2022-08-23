import { Container, Row, Col } from "react-bootstrap";
import { AnchorButton, Desc, Heading } from "../../Global/Typography";
import OutdoorSeatingImage from "../../../images/SoulTree/OutdoorSeating/OutdoorSeatingImage.png";

import PrevArrowWhite from "../../../images/Common/PrevArrowWhite.svg";
import NextArrowWhite from "../../../images/Common/NextArrowWhite.svg";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./OutdoorSeating.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function OutdoorSeating({ inView }) {
  const OutdoorSeatingData = [
    {
      title: "There is a little something for each member of your family",
      desc: "Area designed to satisfy your outdoor needs and keep you motivated to work and socialize. With the various facilities available at your fingertips, you can enjoy a calm space to work or inspire yourself to break a sweat.",
      button: "Download Clubhouse Brochure",
      imageList: [
        {
          image: OutdoorSeatingImage,
          label: "Outdoor seating",
        },
        {
          image: OutdoorSeatingImage,
          label: "Outdoor seating",
        },
        {
          image: OutdoorSeatingImage,
          label: "Outdoor seating",
        },
      ],
      image: OutdoorSeatingImage,
      label: "Outdoor seating",
    },
  ];

  return (
    <section
      className={`section bg-white ${inView ? "inView" : "outView"}
    `}
    >
      {OutdoorSeatingData.map((item, idx) => {
        return (
          <Container key={idx} className="OutdoorSeating">
            <Row className="align-items-center">
              <Col xs={12} md={6} lg={6} xl={5} className="px-0 pr-md-5">
                {/* 
                SINGLE IMAGE PACTH
                <div className="imagePatch">
                  <img
                    src={item.image}
                    className="OutdoorSeating__image w-100 mb-0"
                    alt="OutdoorSeating"
                  />
                  <span className="-label">{item.label}</span>
                </div> 
                */}
                <div className="OutdoorSeating__Slider">
                  <Swiper
                    className="OutdoorSeatingSlider"
                    id="OutdoorSeatingSlider"
                    tag="section"
                    wrapperTag="ul"
                    spaceBetween={0}
                    loop={false}
                    keyboard={{
                      enabled: true,
                    }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination-OutdoorSeating",
                    }}
                    navigation={{
                      prevEl: ".ArrowButtonBlock__ArrowPrevWhite",
                      nextEl: ".ArrowButtonBlock__ArrowNextWhite",
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(swiper) =>
                      console.log(
                        "slide index changed to: ",
                        swiper.activeIndex
                      )
                    }
                    onInit={(swiper) =>
                      console.log("Swiper initialized", swiper)
                    }
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {item.imageList.map((item, index) => (
                      <SwiperSlide tag="li" key={index}>
                        <div className="imagePatch">
                          <img
                            src={item.image}
                            className="OutdoorSeating__image w-100 mb-0"
                            alt="OutdoorSeating"
                          />
                          <span className="-label">{item.label}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Row className="ArrowButtons">
                    <div className="swiper-pagination swiper-pagination-OutdoorSeating bg-trans"></div>
                    <div className="ArrowButtonBlock">
                      <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowPrevWhite">
                        <img
                          src={PrevArrowWhite}
                          className="-image"
                          alt="Blocks"
                        />
                      </div>
                      <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowNextWhite">
                        <img
                          src={NextArrowWhite}
                          className="-image"
                          alt="Blocks"
                        />
                      </div>
                    </div>
                  </Row>
                </div>
                {/* <div className="imagePatch">
                  <img
                    src={item.image}
                    className="OutdoorSeating__image w-100 mb-4 mb-md-5"
                    alt="OutdoorSeating"
                  />
                  <span className="-label">{item.label}</span>
                </div> */}
              </Col>
              <Col xs={12} md={6} lg={6} xl={7} className="pt-5 pt-md-0 px-md-5">
                <Heading
                  variant="h1"
                  classList="OutdoorSeating__title"
                  text={item.title}
                />
                <Desc classList="OutdoorSeating__desc my-3 " text={item.desc} />
                <AnchorButton
                  href="#"
                  classList="OutdoorSeating__btn my-3"
                  text={item.button}
                />
              </Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
}
