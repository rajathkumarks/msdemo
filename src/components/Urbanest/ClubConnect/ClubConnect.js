import { Container, Row, Col } from "react-bootstrap";
import ClubTreeMask from "../../../images/Urbanest/ClubTreeMask.png";
import bgPatternTextImage from "../../../images/Urbanest/bgPatternTextImage.svg";
import Fade from "react-reveal/Fade";
import "./ClubConnect.scss";

export default function ClubConnect() {
  return (
    <div className="ClubhouseWrapper">
      <Container>
        <Row>
          <Col xs={12} className="px-0">
            <div className="ClubhouseWrapper__info">
              <div className="order-1 order-md-1 heroImageContent text-left px-3">
                <Fade left>
                  <h3 className="scrollMainHeading mb-0">
                    <span className="d-md-block">The</span>
                    <span>
                      Club <span className="MdWhite">House</span>
                    </span>
                  </h3>
                </Fade>
              </div>

              <div className="order-3 order-md-2 ClubhouseFigureWrap">
                <Fade right>
                  <img className="img-fluid" src={ClubTreeMask} alt="mask" />
                </Fade>
              </div>

              <div className="order-2 order-md-3 mdOverflowHidden px-3 mb-4">
                <Fade top>
                  <img
                    className="img-fluid"
                    src={bgPatternTextImage}
                    alt="mask"
                  />
                </Fade>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
