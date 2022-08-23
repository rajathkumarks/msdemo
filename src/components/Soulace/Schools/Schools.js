import { Container, Row, Col } from "react-bootstrap";
// AnchorButtonIcon
import { Desc, Heading } from "../../Global/Typography";
import SchoolsImage from "../../../images/SoulTree/Schools/SchoolsImage.png";
import "./Schools.scss";

export default function Schools({ inView }) {
  const SchoolsData = [
    {
      title: "You ask about the schools?",
      desc: "Hey! The best of the best are just 5 to 15 mins away. You are investing into a neighbour hood which is the next HSR in the making. Upcoming tech parks, major residential townships from top builders, shopping malls, entertainment and eateries make it an ideal investment for real estate appreciation.",
      // button: "View on map",
      image: SchoolsImage,
    },
  ];

  return (
    <section
      className={`section ${inView ? "inView" : "outView"}
    `}
    >
      {SchoolsData.map((item, idx) => {
        return (
          <Container key={idx} className="Schools">
            <Row className="align-items-center">
              <Col xs={12} md={6} lg={6} xl={5} className="pr-md-5">
                <div className="imagePatch">
                  <img
                    src={item.image}
                    className="Schools__image w-100 mb-4 mb-md-5"
                    alt="Schools"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} xl={7} className="px-md-5">
                <Heading
                  variant="h1"
                  classList="Schools__title"
                  text={item.title}
                />
                <Desc classList="Schools__desc my-3 " text={item.desc} />
                {/* <AnchorButtonIcon
                  // RECORD AUDIO BASED CHANGE
                  target="_blank"
                  href="https://www.google.com/maps/place/Soul+Tree+by+Modern+Spaaces/@12.86056,77.7643898,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae738c023db8b3:0x1c0e1c2d5d103375!8m2!3d12.8605548!4d77.7665785"
                  // RECORD AUDIO BASED CHANGE
                  classList="Schools__btn my-3"
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
