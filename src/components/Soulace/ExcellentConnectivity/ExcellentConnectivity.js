import { Container, Row, Col } from "react-bootstrap";
// AnchorButtonIcon
import { Desc, Heading } from "../../Global/Typography";
import ExcellentConnectivityImage from "../../../images/SoulTree/ExcellentConnectivity/ExcellentConnectivityImage.png";
import "./ExcellentConnectivity.scss";

export default function ExcellentConnectivity({ inView }) {
  const ExcellentConnectivityData = [
    {
      Headtitle: "A perfect location for a perfect home",
      title: "Excellent connectivity",
      desc: "Soultree is conveniently tucked away from the concrete jungle, yet in close proximity to IT Hubs, schools, hospitals, and entertainment spaces. Being located at Sompura gate, Sarjapur road, you can easily get to the places that matter the most to you in under 30 minutes. ",
      // button: "View on map",
      image: ExcellentConnectivityImage,
    },
  ];

  return (
    <section
      className={`section section--paddingBottom0 ${
        inView ? "inView" : "outView"
      }
    `}
    >
      {ExcellentConnectivityData.map((item, idx) => {
        return (
          <Container key={idx} className="ExcellentConnectivity">
            <Row className="align-items-center">
              <Col
                xs={12}
                md={6}
                lg={6}
                xl={5}
                className="pb-3 pb-md-5 text-center mx-auto"
              >
                <Heading
                  variant="h1"
                  classList="ExcellentConnectivity__title"
                  text={item.Headtitle}
                />
              </Col>
            </Row>
            <Row className="align-items-baseline">
              <Col xs={12} md={6} lg={6} xl={5} className="pr-md-5">
                <div className="imagePatch">
                  <img
                    src={item.image}
                    className="ExcellentConnectivity__image w-100 mb-4 mb-md-5"
                    alt="ExcellentConnectivity"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} xl={7} className="px-md-5">
                <Heading
                  variant="h1"
                  classList="ExcellentConnectivity__title"
                  text={item.title}
                />
                <Desc
                  classList="ExcellentConnectivity__desc my-3 "
                  text={item.desc}
                />
                {/* <AnchorButtonIcon
                  // RECORD AUDIO BASED CHANGE
                  target="_blank"
                  href="https://www.google.com/maps/place/Modern+Spaaces/@12.8775205,77.7620395,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae73049a057571:0x4c0462bc63b1246c!8m2!3d12.8775153!4d77.7642282"
                  // RECORD AUDIO BASED CHANGE
                  classList="ExcellentConnectivity__btn my-3"
                  text={item.button}
                  icon={true}
                /> */}
              </Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
}
