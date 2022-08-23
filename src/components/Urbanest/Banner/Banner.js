import { Col, Container, Row } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import UrbanestLogo from "../../../images/Urbanest/UrbanestLogo.svg";
import BannerImage from "../../../images/Urbanest/Banner.png";
import "./Banner.scss";

export default function Banner({ inView }) {
  return (
    <section
      className={`section overflow-hidden pb-0 ${
        inView ? "inView" : "outView"
      }`}
    >
      <Container>
        <Row className="mt-5">
          <Col xs={11} md={10} lg={7} className="pr-5 pt-5 mt-5">
            <img src={UrbanestLogo} alt="logo" className="UrbanestLogo" />
            <Heading
              classList="my-4 pr-5 pr-md-3"
              variant="h1"
              text="One Community. Many Blocks."
            />
            <Desc
              classList="max-width-380"
              text="Building quality Urban lifestyles, creating stronger communities"
            />
          </Col>
        </Row>
      </Container>
      <Row className="d-block">
        <div className="md-container-wrap">
          <img
            src={BannerImage}
            alt="logo"
            className="-banner-image-urbanest pb-0"
          />
        </div>
      </Row>
    </section>
  );
}
