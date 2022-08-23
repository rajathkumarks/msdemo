import { Col, Container, Row } from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import MasterPlanImage from "../../../images/SoulTree/MasterPlan.png";
import Download from "../../../images/SoulTree/MasterPlan/Download.svg";
import Brochure from "../../../images/SoulTree/MasterPlan/Brochure.svg";
import FloorPlan from "../../../images/SoulTree/MasterPlan/FloorPlan.svg";
import MasterPlaImage from "../../../images/SoulTree/MasterPlan/MasterPlan.svg";
// import PlanPdf from "../../../images/SoulTree/MasterPlan/PlanPdf.pdf";
import "./MasterPlan.scss";

import Fade from "react-reveal/Fade";
import DownloadBrochure from "../../Global/DownloadBrochure";
import { useState } from "react";

export default function MasterPlan({ inView }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // MasterPlanList
  const MasterPlanListitems = [
    {
      info: "5.5 Acres",
      label: "Land",
    },
    {
      info: "30,000 sqft",
      label: "Clubhouse",
    },
  ];
  // MasterPlanDOwnloadItems
  const MasterPlanDOwnloadItems = [
    {
      image: FloorPlan,
      label: "Floor Plan",
    },
    {
      image: MasterPlaImage,
      label: "Master Plan",
    },
    {
      image: Brochure,
      label: "Brochure",
    },
  ];
  return (
    <section className={`section ${inView ? "inView" : "outView"}`}>
      <Container className="text-center">
        <Row>
          <Col xs={12} lg={10} className="mx-auto">
            <Heading classList="my-3" variant="h1" text="Master Plan" />
            <ul className="ulDivider d-flex align-items-center justify-content-center">
              {MasterPlanListitems.map(({ info, label }, idx) => {
                return (
                  <li
                    className="m-3 p-3 m-md-4 p-md-4 text-left"
                    xs={12}
                    md={6}
                    lg={4}
                    key={idx}
                  >
                    <Heading
                      variant="h6"
                      classList="MasterPlan__label"
                      text={label}
                    />
                    <Heading
                      classList="MasterPlan__info"
                      variant="h1"
                      text={info}
                    />
                  </li>
                );
              })}
            </ul>
            <Desc
              classList="MasterPlan__desc"
              text="1, 2 & 3 BHK - 567 Units"
            />
          </Col>
          <Col xs={12} lg={8} className="mx-auto my-4">
            <img src={MasterPlanImage} className="w-100" alt="MasterPlan" />
          </Col>
          <Col xs={12} lg={10} className="mx-auto">
            <ul className=" MasterPlanDOwnloadItems d-flex align-items-center justify-content-center flex-md-row flex-column">
              {MasterPlanDOwnloadItems.map(({ image, label }, idx) => {
                return (
                  <li className="m-4 py-2 pb-md-0 my-md-0 mx-3" key={idx}>
                    <Fade bottom>
                      <div
                        className="w-100 cursor-pointer text-center d-flex align-items-center"
                        onClick={handleShow}
                      >
                        <img
                          src={image}
                          className=" MasterPlanDOwnloadItems__icon"
                          alt={label}
                        />
                        <Heading
                          variant="h7"
                          classList="px-4 -only-sm"
                          text={label}
                        />
                        <img
                          className=" MasterPlanDOwnloadItems__downloadIcon"
                          src={Download}
                          alt="MasterPlan"
                        />
                      </div>
                    </Fade>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* DownloadBrochure */}
      <DownloadBrochure show={show} handleClose={handleClose} />
    </section>
  );
}
