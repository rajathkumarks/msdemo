import { Container, Row, Col } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import TranquilCourtImage from "../../../images/Urbanest/RecreationZone/TranquilCourtImage.png";
import TranquilCourtImageLarge from "../../../images/Urbanest/RecreationZone/TranquilCourtImageLarge.png";
import TranquilCourtImageSmall from "../../../images/Urbanest/RecreationZone/TranquilCourtImageSmall.png";
import patternVideo from "../../../images/Urbanest/RecreationZone/patternVideo.mp4";
import "./TranquilCourt.scss";

export default function TranquilCourt({ inView }) {
  const TranquilCourtData = [
    {
      title: "Recreation zone",
      desc: "In every walk with nature, one receives far more than he seeks. At Soul Tree, thoughtfully designed open spaces provide the perfect environment to meet, greet, and grow.",
      imageLarge: TranquilCourtImageLarge,
      imageSmall: TranquilCourtImageSmall,

      patternVideo: patternVideo,
      image: TranquilCourtImage,
      listItems: [
        "Chit Chat Corner",
        "Outdoor seating",
        "Outdoor excercise station",
        "Fun along your path",
        "Reflexology path to satisfy your ",
        "Walking path",
        "Feature wall adding to the acupuncture points",
      ],
    },
  ];

  return (
    <section
      className={`section bg-white ${inView ? "inView" : "outView"}
    `}
    >
      {TranquilCourtData.map((item, idx) => {
        return (
          <Container key={idx} className="TranquilCourt">
            <Row>
              <Col xs={12} md={5} lg={5} xl={4} className="pr-md-5 pr-xl-4">
                <Heading
                  variant="h1"
                  classList="TranquilCourt__title my-3"
                  text={item.title}
                />
                <Desc classList="TranquilCourt__desc my-3 " text={item.desc} />
                <ul className="TranquilCourtList">
                  {item.listItems.map((i, j) => (
                    <li key={j}>
                      <Desc classList="my-3" text={i} />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <div className="TranquilCourtImage -RecreationZone">
              {/* <img
                src={item.image}
                className="TranquilCourt__image"
                alt="TranquilCourt"
              /> */}
              {/* SEPARATE */}
              <img
                src={item.imageLarge}
                className="TranquilCourt__imageLarge"
                alt="TranquilCourt"
              />

              <video
                controls={false}
                className="TranquilCourt__imageSmall"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source src={item.patternVideo} type="video/mp4" />
              </video>
            </div>
          </Container>
        );
      })}
    </section>
  );
}
