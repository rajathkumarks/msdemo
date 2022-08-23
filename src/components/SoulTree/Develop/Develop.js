import { Container, Row, Col } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import DevelopImage from "../../../images/SoulTree/Develop/DevelopImage.png";
import "./Develop.scss";

export default function Develop({ inView }) {
  const DevelopData = [
    {
      title: "Is it developing? It is already!",
      desc: "You are investing into a neighbour hood which is the next HSR in the making. Upcoming tech parks, major residential townships from top builders, shopping malls, entertainment and eateries make it an ideal investment for real estate appreciation.",
      image: DevelopImage,
    },
  ];

  return (
    <section
      className={`section ${inView ? "inView" : "outView"}
    `}
    >
      {DevelopData.map((item, idx) => {
        return (
          <Container key={idx} className="Develop">
            <Row className="align-items-center flex-column-reverse flex-md-row">
              <Col xs={12} md={6} lg={6} xl={7} className="px-md-5">
                <Heading
                  variant="h1"
                  classList="Develop__title"
                  text={item.title}
                />
                <Desc classList="Develop__desc my-3 " text={item.desc} />
              </Col>
              <Col xs={12} md={6} lg={6} xl={5} className="pr-md-5">
                <div className="imagePatch">
                  <img
                    src={item.image}
                    className="Develop__image w-100 mb-4 mb-md-5"
                    alt="Develop"
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
