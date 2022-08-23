import "./Specifications.scss";
import React, { useState } from "react";
import {
  Row,
  Container,
  Accordion,
  Card,
  Col,
  useAccordionToggle,
} from "react-bootstrap";
import { Desc, Heading } from "../../Global/Typography";
import Minus from "../../../images/Common/MinusWhite.svg";
import Plus from "../../../images/Common/PlusWhite.svg";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div className="cardHeader" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}
export default function Specifications({ inView }) {
  const [activeKey, setActiveKey] = useState(0);

  const SpecificationsItems = [
    {
      title: "Civil",
      list: [
        "Civil - Structure: R.C.C framed structure, designed as per relevant BIS codes for earth quake resistance and structurally efficient systems implemented",
        "External walls with 6’’ solid concrete blocks and internal walls with 4’’ solid concrete blocks Plastering",
        "Plastering: Sponge finish for external walls, smooth",
      ],
    },
    {
      title: "Architechture",
      list: [
        "Architechture - Structure: R.C.C framed structure, designed as per relevant BIS codes for earth quake resistance and structurally efficient systems implemented",
        "External walls with 6’’ solid concrete blocks and internal walls with 4’’ solid concrete blocks Plastering",
        "Plastering: Sponge finish for external walls, smooth",
      ],
    },
    {
      title: "Electrical",
      list: [
        "Electrical - Structure: R.C.C framed structure, designed as per relevant BIS codes for earth quake resistance and structurally efficient systems implemented",
        "External walls with 6’’ solid concrete blocks and internal walls with 4’’ solid concrete blocks Plastering",
        "Plastering: Sponge finish for external walls, smooth",
      ],
    },
    {
      title: "Plumbing, Painting & Services",
      list: [
        "Plumbing - Structure: R.C.C framed structure, designed as per relevant BIS codes for earth quake resistance and structurally efficient systems implemented",
        "External walls with 6’’ solid concrete blocks and internal walls with 4’’ solid concrete blocks Plastering",
        "Plastering: Sponge finish for external walls, smooth",
      ],
    },
  ];

  return (
    <section
      className={`section  ${inView ? "inView" : "outView"}
  `}
    >
      {/* <Container> */}
      <Container className="Specifications Specifications--black">
        <Row>
          <Col xs={12} lg={6} className="VerticalDivider">
            <Heading variant="h1" classList="-title" text="Specifications" />
            <Desc
              classList="-desc my-3 "
              text="How we build the most affordable yet valuable homes in the heart of Bengaluru"
            />
          </Col>
          <Col xs={12}>
            <Accordion className="Accordion" defaultActiveKey={1}>
              {SpecificationsItems.map((item, index) => (
                <Card key={index}>
                  <CustomToggle
                    className="AccordionHeading"
                    as={Card.Header}
                    eventKey={index + 1}
                    handleClick={() => {
                      if (activeKey === index) {
                        setActiveKey(null);
                      } else {
                        setActiveKey(index);
                      }
                    }}
                  >
                    <Heading
                      variant="h4"
                      classList="-title my-0 mr-5 pr-5"
                      text={item.title}
                    />
                    <img
                      className="PlusMinus"
                      src={activeKey === index ? Minus : Plus}
                      alt={"Minus Plus"}
                    />
                  </CustomToggle>
                  <Accordion.Collapse eventKey={index + 1}>
                    <Card.Body className="">
                      <ul className="Accordion__list px-3">
                        {item.list.map((item, i) => {
                          return (
                            <li key={i} className="mb-3">
                              <Heading
                                variant="h7"
                                classList="-desc"
                                text={item}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
