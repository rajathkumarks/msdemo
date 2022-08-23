import OtherProjectImage from "../../../images/Urbanest/OtherProject/OtherProjectImage.png";
import { Row, Col, Container } from "react-bootstrap";
import { AnchorGradientButton, Heading } from "../../Global/Typography";
import UrbanestLogo from "../../../images/Urbanest/UrbanestLogo.svg";
import "./OtherProject.scss";

export default function OtherProject({ inView }) {
  const title = "Other Project";
  const ProjectImage = OtherProjectImage;
  const UrbanestImage = UrbanestLogo;
  const desc = "One Community. Many Blocks.";
  const btnText = "View Project";

  return (
    <section
      className={`section  ${inView ? "inView" : "outView"}
  `}
    >
      <Container>
        <Row>
          <Col xs={12} lg={12} className="">
            <Heading
              variant="h1"
              classList="-title mb-3 mb-md-5"
              text={title}
            />
          </Col>
          <Col xs={12} lg={12} className="OtherProject">
            <div className="otherProject__Image">
              <img
                src={ProjectImage}
                alt="logo"
                className="-image img-responsive"
              />
            </div>
            <div className="OtherProject__Content">
              <img src={UrbanestImage} alt={title} className="-imageLogo" />
              <Heading variant="h4" classList="-title my-3" text={desc} />
              <AnchorGradientButton
                href="#"
                classList="-btn my-3"
                text={btnText}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
