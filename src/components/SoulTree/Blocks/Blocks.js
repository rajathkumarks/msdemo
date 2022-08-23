import { Container, Row, Col } from "react-bootstrap";
import { Heading } from "../../Global/Typography";
import BlockCard from "../../Global/BlockCard";
import BlocksImage from "../../../images/Urbanest/Blocks/BlocksImage.png";
import PrevArrow from "../../../images/Common/PrevArrow.svg";
import NextArrow from "../../../images/Common/NextArrow.svg";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Blocks.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Blocks({ inView }) {
  const BlocksData = [
    {
      image: BlocksImage,
      title: "312 West",
      phases: "Phase 1",
      type: "3 BHK",
      SqFt: "1415 - 1410 Sq. ft.",
      price: "56 Lakhs",
      label: "Onwards",
      isAvailable: true,
    },
    {
      image: BlocksImage,
      title: "312 West",
      phases: "Phase 1",
      type: "3 BHK",
      SqFt: "1415 - 1410 Sq. ft.",
      price: "56 Lakhs",
      label: "Onwards",
      isAvailable: true,
    },
    {
      image: BlocksImage,
      title: "312 West",
      phases: "Phase 1",
      type: "3 BHK",
      SqFt: "1415 - 1410 Sq. ft.",
      price: "56 Lakhs",
      label: "Onwards",
      isAvailable: true,
    },
    {
      image: BlocksImage,
      title: "312 West",
      phases: "Phase 1",
      type: "3 BHK",
      SqFt: "1415 - 1410 Sq. ft.",
      price: "56 Lakhs",
      label: "Onwards",
      isAvailable: false,
    },
    {
      image: BlocksImage,
      title: "312 West",
      phases: "Phase 1",
      type: "3 BHK",
      SqFt: "1415 - 1410 Sq. ft.",
      price: "56 Lakhs",
      label: "Onwards",
      isAvailable: false,
    },
    {
      image: BlocksImage,
      title: "312 West",
      phases: "Phase 1",
      type: "3 BHK",
      SqFt: "1415 - 1410 Sq. ft.",
      price: "56 Lakhs",
      label: "Onwards",
      isAvailable: true,
    },
  ];

  return (
    <section
      className={`section bg-white Blocks pt-md-0 ${
        inView ? "inView" : "outView"
      }
    `}
    >
      <Container className="Blocks-Container position-relative">
        <Row className=" ">
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={12}
            className="pb-4 pb-md-5 text-center"
          >
            <Heading variant="h1" classList="Blocks__title" text="Blocks" />
          </Col>
          <Col xs={12} className="px-md-4">
            <div className="Blocks__Slider">
              <Swiper
                className="BlocksSlider"
                id="BlocksSlider"
                tag="section"
                wrapperTag="ul"
                spaceBetween={10}
                loop={false}
                keyboard={{
                  enabled: true,
                }}
                navigation={{
                  prevEl: ".ArrowButtonBlock__ArrowPrevBlocks",
                  nextEl: ".ArrowButtonBlock__ArrowNextBlocks",
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) =>
                  console.log("slide index changed to: ", swiper.activeIndex)
                }
                onInit={(swiper) => console.log("Swiper initialized", swiper)}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  450: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },

                  768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                }}
              >
                {BlocksData.map((item, index) => (
                  <SwiperSlide tag="li" key={index}>
                    <BlockCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
        <Row className="ArrowButtons">
          <div className="ArrowButtonBlock">
            <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowPrevBlocks">
              <img src={PrevArrow} className="-image" alt="Blocks" />
            </div>
            <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowNextBlocks">
              <img src={NextArrow} className="-image" alt="Blocks" />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
