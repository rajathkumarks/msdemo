import { Row, Container, Tab, Tabs } from "react-bootstrap";
import { Heading } from "../../Global/Typography";
import GalleryImage1 from "../../../images/SoulTree/Gallery/GalleryImage1.png";
import GalleryImage2 from "../../../images/SoulTree/Gallery/GalleryImage2.png";
import "./GalleryTabs.scss";
// import Reveal from "react-reveal/Reveal";

export default function GalleryTabs({ inView }) {
  const GalleryTabsItems = [
    { title: "Gallery", image: GalleryImage2 },
    { title: "Walkthrough", image: GalleryImage1 },
  ];

  return (
    <section
      className={`section pb-0 ${inView ? "inView" : "outView"}
  `}
    >
      <Container fluid className="GalleryTabs-Container">
        <Row>
          <Tabs defaultActiveKey="Gallery" className="GalleryTabs container">
            {GalleryTabsItems.map(({ title, image }, idx) => {
              return (
                <Tab
                  key={idx}
                  eventKey={title}
                  title={
                    <Heading classList="-title" variant="h1" text={title} />
                  }
                  className="event-tab"
                >
                  {/* <Reveal effect="fadeInUp"> */}
                    <img
                      src={image}
                      alt={title}
                      className="GalleryImage img-responsive w-100"
                    />
                  {/* </Reveal> */}
                </Tab>
              );
            })}
          </Tabs>
        </Row>
      </Container>
    </section>
  );
}
