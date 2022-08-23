import { Col, Container, Row } from "react-bootstrap";
import { AnchorGradientButton, Heading } from "../../Global/Typography";
import PatternWhiteSmall from "../../../images/Urbanest/PatternWhiteSmall.svg";
import "./Blog.scss";

export default function Blog({ inView }) {
  return (
    <section
      className={`section overflow-hidden ${inView ? "inView" : "outView"}`}
    >
      <Container className="bg-BdarkBlack position-relative p-4 p-md-5">
        <Row className="p-2 p-md-4">
          <Col xs={11} md={10} lg={6} className="">
            <Heading
              classList="my-4 text-white"
              variant="h1"
              text="Sarjapur Road: Bengaluru’s best area for buying a home"
            />
            <AnchorGradientButton
              href="#"
              classList="-btn my-3"
              text="Read Blog"
            />
          </Col>
        </Row>
        <img
          src={PatternWhiteSmall}
          alt="PatternWhiteSmall"
          className="PatternWhiteSmall"
        />
        <img
          src={PatternWhiteSmall}
          alt="PatternWhiteSmall"
          className="PatternWhiteLarge"
        />
      </Container>
    </section>
  );
}
