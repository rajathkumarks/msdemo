import { Row } from "react-bootstrap";
import { AnchorButtonIcon, Desc, Heading } from "../../Global/Typography";
// import SmartGreenMinimalImage3 from "../../../images/SoulTree/SmartGreenMinimal/SmartGreenMinimalImage3.png";
import SmartGreenMinimalImage1 from "../../../images/SoulTree/SmartGreenMinimal/SmartGreenMinimalImage1.png";
import PrevArrow from "../../../images/Common/PrevArrow.svg";
import NextArrow from "../../../images/Common/NextArrow.svg";
import "./SmartGreenMinimal.scss";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SmartGreenMinimal({ inView }) {
  const SmartGreenMinimalData = [
    {
      title: "Smart Locks",
      desc: "Our homes come with fully automated home automation facility. Now control your entire home with just a mobile app. Unlock the future in our smart",
      image: SmartGreenMinimalImage1,
    },
    {
      title: "The light",
      desc: "Our rooms, terraces & balconies are designed to take advantage of the Bangalore sun and bathe in natural light. The homes are compact.",
      image: SmartGreenMinimalImage1,
    },
    {
      title: "Water Meters",
      desc: "We believe in fair & efficient sustainable practices. Being aware of the environment we live in is a decision we’ve made in the design and functionality of the space.",
      image: SmartGreenMinimalImage1,
    },
  ];

  return (
    <section
      className={`section bg-white SmartGreenMinimal ${
        inView ? "inView" : "outView"
      }
    `}
    >
      <div className="SmartGreenMinimal__Container">
        <div className="SmartGreenMinimal__Row">
          <div className="SmartGreenMinimal__Content">
            <Heading
              variant="h1"
              classList="SmartGreenMinimal__title"
              text="Smart. Green. Minimal"
            />
            <Desc
              classList="SmartGreenMinimal__desc my-3 "
              text="Explore Soultree"
            />
            <AnchorButtonIcon
              href="#"
              classList="SmartGreenMinimal__btn mt-3"
              text="Download Brochure"
              icon={false}
            />
          </div>
          <div className="SmartGreenMinimal__Slider">
            <Swiper
              className="SmartGreenMinimalSlider"
              id="SmartGreenMinimalSlider"
              tag="section"
              wrapperTag="ul"
              spaceBetween={10}
              loop="true"
              keyboard={{
                enabled: true,
              }}
              navigation={{
                prevEl: ".ArrowButtonBlock__ArrowPrevSmart",
                nextEl: ".ArrowButtonBlock__ArrowNextSmart",
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) =>
                console.log("slide index changed to: ", swiper.activeIndex)
              }
              onInit={(swiper) => console.log("Swiper initialized", swiper)}
              breakpoints={{
                300: {
                  slidesPerView: 1.2,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 3,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 3,
                },
              }}
            >
              {SmartGreenMinimalData.map(({ title, desc, image }, index) => (
                <SwiperSlide tag="li" key={index}>
                  <div className="-image-block">
                    <img
                      src={image}
                      className="SmartGreenMinimal__image"
                      alt="SmartGreenMinimal"
                    />
                    <div className="-content-block">
                      <Heading variant="h5" classList="-title" text={title} />
                      <Desc classList="-desc mt-3 mb-0" text={desc} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Row className="ArrowButtons">
              <div className="ArrowButtonBlock">
                <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowPrevSmart">
                  <img
                    src={PrevArrow}
                    className="-image"
                    alt="SmartGreenMinimal"
                  />
                </div>
                <div className="ArrowButtonBlock__Arrow ArrowButtonBlock__ArrowNextSmart">
                  <img
                    src={NextArrow}
                    className="-image"
                    alt="SmartGreenMinimal"
                  />
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}
