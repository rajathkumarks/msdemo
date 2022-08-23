import { Container, Row, Col } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import SchoolsImage from "../../../images/Urbanest/Schools/SchoolsImage.png";
import "./Schools.scss";

export default function Schools({ inView }) {
  const SchoolsData = [
    {
      title: "Is it developing? It is already!",
      desc: "You are investing into a neighbour hood which is the next HSR in the making. Upcoming tech parks, major residential townships from top builders, shopping malls, entertainment and eateries make it an ideal investment for real estate appreciation.",
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
              </Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
}
