import { Container, Row, Col } from "react-bootstrap";
import ClubCard from "./ClubCard";
import BlocksImage from "../../../images/Urbanest/Blocks/BlocksImage.png";
import OutdoorSeatingImage from "../../../images/SoulTree/OutdoorSeating/OutdoorSeatingImage.png";
import SmartGreenMinimalImage1 from "../../../images/SoulTree/SmartGreenMinimal/SmartGreenMinimalImage1.png";
import TranquilCourtImageLarge from "../../../images/Urbanest/RecreationZone/TranquilCourtImageLarge.png";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Clubs({ inView }) {
  const BlocksData = [
    {
      title: "Smart Locks",
      label:
        "Our homes come with fully automated home automation facility. Now control your entire home with just a mobile app. Unlock the future in our smart",
      image: TranquilCourtImageLarge,
    },
    {
      title: "The light",
      label:
        "Our rooms, terraces & balconies are designed to take advantage of the Bangalore sun and bathe in natural light. The homes are compact.",
      image: OutdoorSeatingImage,
    },
    {
      title: "Water Meters",
      label:
        "We believe in fair & efficient sustainable practices. Being aware of the environment we live in is a decision we’ve made in the design and functionality of the space.",
      image: SmartGreenMinimalImage1,
    },
    {
      title: "Smart Locks",
      label:
        "Our homes come with fully automated home automation facility. Now control your entire home with just a mobile app. Unlock the future in our smart",
      image: BlocksImage,
    },
    {
      title: "The light",
      label:
        "Our rooms, terraces & balconies are designed to take advantage of the Bangalore sun and bathe in natural light. The homes are compact.",
      image: TranquilCourtImageLarge,
    },
    {
      title: "Water Meters",
      label:
        "We believe in fair & efficient sustainable practices. Being aware of the environment we live in is a decision we’ve made in the design and functionality of the space.",
      image: SmartGreenMinimalImage1,
    },
  ];

  return (
    <section
      className={`ClubsSection py-0 ${inView ? "inView" : "outView"}
    `}
    >
      <Container className="Blocks-Container Blocks-Container--ClubsContainter position-relative">
        <Row className=" ">
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
                  prevEl: ".ArrowButtonBlock__ArrowPrevClubs",
                  nextEl: ".ArrowButtonBlock__ArrowNextClubs",
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) =>
                  console.log("slide index changed to: ", swiper.activeIndex)
                }
                onInit={(swiper) => console.log("Swiper initialized", swiper)}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  450: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1300: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {BlocksData.map((item, index) => (
                  <SwiperSlide tag="li" key={index}>
                    <ClubCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
