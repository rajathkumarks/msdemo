import { Col, Container, Row } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import UrbanestLogo from "../../../images/Urbanest/UrbanestLogo.svg";
import "./Banner.scss";

export default function Banner({ inView }) {
  return (
    <section
      className={`section ProjectBanner-bg ${inView ? "inView" : "outView"}`}
    >
      <Container className="ProjectBanner">
        <Row className="align-items-center">
          <Col xs={11} md={10} lg={8} className="">
            <img src={UrbanestLogo} alt="logo" className="UrbanestLogo" />
            <Heading
              classList="my-4 pr-5 pr-md-3"
              variant="h1Lg"
              text="77 East"
            />
            <Desc
              classList="pr-md-5 mr-md-5 text-black"
              text="Breathtaking Designs. Priceless Experiences. And a Delectable Community That Celebrates Light and Space. Breathtaking Designs. Priceless Experiences. And Homes That Celebrate Light and Space"
            />
          </Col>
        </Row>
      </Container>
      <div className="-bgShadow"></div>
    </section>
  );
}
