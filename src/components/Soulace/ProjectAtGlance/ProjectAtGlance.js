import { Col, Container, Row } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import "./ProjectAtGlance.scss";

export default function ProjectAtGlance({ inView }) {
  // ProjectAtGlanceListitems
  const ProjectAtGlanceListitems = [
    {
      info: "50 Lacs",
      desc: "Onwards",
    },
    {
      info: "1, 2 and 3 BHK",
      desc: "Upto 1010 sq.ft, Apartments",
    },
    {
      info: "50+ Amenities",
      desc: "Indoor & Outdoor",
    },
    {
      info: "Home Loan",
      desc: "5 Preapproved Banks",
    },
    {
      info: "RERA Approved",
      desc: "PRM/KA/RERA/1251/308 /PR/201106/003694",
    },
    {
      info: "Sompura Gate",
      desc: "Sarjapur Road",
    },
  ];
  return (
    <section className={`section ${inView ? "inView" : "outView"}`}>
      <Container>
        {/* className="text-md-center" */}
        <Row>
          {/* lg={10} */}
          <Col xs={12} className="mx-md-auto">
            <Heading
              classList="my-4 my-md-4 pr-5 pr-md-3"
              variant="h1"
              text="Project at glance"
            />
            <Desc
              classList="mb-3 pb-3 mb-md-5 pb-md-5"
              text="Area designed to satisfy your outdoor needs and keep you motivated to work and socialize. With the various facilities available at your fingertips, you can enjoy a calm space to work or inspire yourself to break a sweat."
            />
          </Col>
        </Row>
        <Row>
          {ProjectAtGlanceListitems.map(({ info, desc }, idx) => {
            return (
              <Col
                className="mb-4 pb-4 mb-md-5 pb-md-5 ProjectAtGlanceList"
                xs={12}
                md={6}
                lg={4}
                key={idx}
              >
                <Heading
                  classList="ProjectAtGlance__info"
                  variant="h4"
                  text={info}
                />
                <Desc classList="ProjectAtGlance__desc mb-0" text={desc} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
