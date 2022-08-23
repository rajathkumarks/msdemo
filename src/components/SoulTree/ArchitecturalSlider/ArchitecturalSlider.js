import React from "react";
import { Row } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import GrassPattern from "../GrassPattern";
import ArchitecturalImage from "../../../images/SoulTree/Architectural/ArchitecturalImage.png";
import PrevArrow from "../../../images/Common/PrevArrow.svg";
import NextArrow from "../../../images/Common/NextArrow.svg";
import "./ArchitecturalSlider.scss";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);

export default function ArchitecturalSlider({ inView }) {
  const ArchitecturalSliderData = [
    {
      title:
        "Wholesome architectural enhancements to encourage meaningful interactions",
      desc: "At Soul Tree, thoughtfully designed open spaces provide the perfect environment to meet, greet, and grow.",
      image: ArchitecturalImage,
    },
    {
      title:
        "Wholesome architectural enhancements to encourage meaningful interactions",
      desc: "At Soul Tree, thoughtfully designed open spaces provide the perfect environment to meet, greet, and grow.",
      image: ArchitecturalImage,
    },
    {
      title:
        "Wholesome architectural enhancements to encourage meaningful interactions",
      desc: "At Soul Tree, thoughtfully designed open spaces provide the perfect environment to meet, greet, and grow.",
      image: ArchitecturalImage,
    },
  ];

  return (
    <section
      className={`section bg-white ArchitecturalSlider ${
        inView ? "inView" : "outView"
      }
    `}
    >
      <GrassPattern />
      <Row className="ArchitecturalSlider__Row">
        <Swiper
          wrapperTag="ul"
          className="ArchitecturalSliderLists"
          slidesPerView={1}
          speed={1800}
          spaceBetween={0}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          // observeParents={true}
          // observer={true}
          loop={true}
          direction="horizontal"
          pagination={{ clickable: true, el: ".swiper-pagination-Architech" }}
          navigation={{
            prevEl: ".ArrowButtonBlock__ArrowPrevArchitech",
            nextEl: ".ArrowButtonBlock__ArrowNextArchitech",
          }}
        >
          {ArchitecturalSliderData.map(({ image, title, desc }, index) => (
            <SwiperSlide tag="li" key={index} className="-block-list">
              <div className="-image-block">
                <img src={image} className="-image" alt="ArchitecturalSlider" />
              </div>
              <div className="-architech-co-block">
                <div className="-architech-co-block__inner">
                  <Heading variant="h1" classList="-title" text={title} />
                  <Desc classList="-desc my-3 " text={desc} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
      <Row className="ArrowButtons">
        <div className="ArrowButtonBlock">
          <div className="swiper-pagination swiper-pagination-Architech"></div>
          <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowPrevArchitech">
            <img src={PrevArrow} className="-image" alt="ArchitecturalSlider" />
          </div>
          <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowNextArchitech">
            <img src={NextArrow} className="-image" alt="ArchitecturalSlider" />
          </div>
        </div>
      </Row>
    </section>
  );
}
