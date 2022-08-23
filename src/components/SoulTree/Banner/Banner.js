import { Col, Container, Row } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import GrassPattern from "../GrassPattern";
import SoulTreeLogo from "../../../images/SoulTree/SoulTreeLogo.svg";
import BannerImage from "../../../images/SoulTree/Banner.png";
import "./Banner.scss";

export default function Banner({ inView }) {
  return (
    <section
      className={`section overflow-hidden pb-0 ${
        inView ? "inView" : "outView"
      }`}
    >
      <GrassPattern />
      <Container>
        <Row>
          <Col xs={11} md={10} lg={7} className="pr-5 pt-5 mt-4">
            <img src={SoulTreeLogo} alt="logo" className="SoulTreeLogo" />
            <Heading
              classList="my-4 pr-5 pr-md-3"
              variant="h1"
              text="Soultree: Come, live the good life in a panorama of greenery"
            />
            <Desc
              classList="pr-5 pr-md-3"
              text="Find the real joy of community living with a myriad of 50+
              world-class amenities. It’s an emotion, a belief - ‘Life happens
              Outside."
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="p-0">
            <div className="md-container-wrap">
              <img src={BannerImage} alt="logo" className="-banner-image" />
            </div>
          </Col>
        </Row>
      </Container>
      <GrassPattern />
    </section>
  );
}
