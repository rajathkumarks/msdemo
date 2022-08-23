import { Container, Row, Col } from "react-bootstrap";
// AnchorButtonIcon
import { Desc, Heading } from "../../Global/Typography";
import CampusImage from "../../../images/Urbanest/Campus/CampusImage.png";
import "./Campus.scss";

export default function Campus({ inView }) {
  const CampusData = [
    {
      title:
        "15 mins away from Wipro campus and RGA Tech park on Sarjapur Road.",
      desc: "You are only 15 to 45 mins drive away from all the major IT Hubs connecting Sarjapur Road in equidistance to Whitefield, Electronic City and the Outer Ring Road IT SEZ areas.",
      // button: "View on map",
      image: CampusImage,
    },
  ];

  return (
    <section
      className={`section ${inView ? "inView" : "outView"}
    `}
    >
      {CampusData.map((item, idx) => {
        return (
          <Container key={idx} className="Campus">
            <Row className="align-items-center flex-column-reverse flex-md-row">
              <Col xs={12} md={6} lg={6} xl={7} className="px-md-5">
                <Heading
                  variant="h1"
                  classList="Campus__title"
                  text={item.title}
                />
                <Desc classList="Campus__desc my-3 " text={item.desc} />
                {/* <AnchorButtonIcon
                  // RECORD AUDIO BASED CHANGE
                  target="_blank"
                  href="https://www.google.com/maps/place/Urbanest+by+Modern+Spaaces/@12.8589237,77.7673449,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae733eb910e55f:0xbfdf55d58b611f83!8m2!3d12.8589237!4d77.7695336"
                  // RECORD AUDIO BASED CHANGE
                  classList="Campus__btn my-3 text-orange"
                  text={item.button}
                  icon={true}
                /> */}
              </Col>
              <Col xs={12} md={6} lg={6} xl={5} className="pr-md-5">
                <div className="imagePatch">
                  <img
                    src={item.image}
                    className="Campus__image w-100 mb-4 mb-md-5"
                    alt="Campus"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
}
