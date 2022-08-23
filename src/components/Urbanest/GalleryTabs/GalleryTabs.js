import { Row, Container, Tab, Tabs } from "react-bootstrap";
import { Heading } from "../../Global/Typography";
import GalleryImage1 from "../../../images/SoulTree/Gallery/GalleryImage1.png";
import GalleryImage2 from "../../../images/SoulTree/Gallery/GalleryImage2.png";
import "./GalleryTabs.scss";

export default function GalleryTabs({ inView }) {
  const GalleryTabsItems = [
    { title: "Gallery", image: GalleryImage2 },
    { title: "Walkthrough", image: GalleryImage1 },
  ];

  return (
    <section
      className={`section  ${inView ? "inView" : "outView"}
  `}
    >
      <Container fluid className="GalleryTabs-Container">
        <Row>
          <Tabs
            defaultActiveKey="Gallery"
            className="GalleryTabs GalleryTabs--black container"
          >
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
                  <img
                    src={image}
                    alt={title}
                    className="GalleryImage img-responsive w-100"
                  />
                </Tab>
              );
            })}
          </Tabs>
        </Row>
      </Container>
    </section>
  );
}
