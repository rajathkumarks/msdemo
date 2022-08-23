import { Container, Row, Col } from "react-bootstrap";
import { AnchorButton, Desc, Heading } from "../../Global/Typography";
import HealthClubImage from "../../../images/Urbanest/HealthClub/HealthClubImage.png";
import "./HealthClub.scss";

export default function HealthClub({ inView }) {
  const HealthClubData = [
    {
      title: "There is a little something for each member of your family",
      desc: "Area designed to satisfy your outdoor needs and keep you motivated to work and socialize. With the various facilities available at your fingertips, you can enjoy a calm space to work or inspire yourself to break a sweat.",
      button: "Download Clubhouse Brochure",
      image: HealthClubImage,
      label: "Health Club",
    },
  ];

  return (
    <section
      className={`section bg-white ${inView ? "inView" : "outView"}
    `}
    >
      {HealthClubData.map((item, idx) => {
        return (
          <Container key={idx} className="OutdoorSeating">
            <Row className="align-items-center">
              <Col xs={12} md={6} lg={6} xl={5} className="px-0 pr-md-5">
                <div className="imagePatch">
                  <img
                    src={item.image}
                    className="OutdoorSeating__image w-100 mb-4 mb-md-5"
                    alt="OutdoorSeating"
                  />
                  <span className="-label">{item.label}</span>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} xl={7} className="px-md-5">
                <Heading
                  variant="h1"
                  classList="OutdoorSeating__title"
                  text={item.title}
                />
                <Desc classList="OutdoorSeating__desc my-3 " text={item.desc} />
                <AnchorButton
                  href="#"
                  classList="-btn my-3 text-orange"
                  text={item.button}
                />
              </Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
}
