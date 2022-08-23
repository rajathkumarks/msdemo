import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Desc, Heading } from "../../Global/Typography";
import "./ContactUs.scss";

import Fade from "react-reveal/Fade";

export default function ContactUs({ inView }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section
      id="RequestExposeNow"
      className={`section ${inView ? "inView" : "outView"}`}
    >
      <Container>
        <Row className="py-5">
          <Col xs={12} md={4} lg={3} className="pr-md-5 pl-md-0">
            <Heading
              variant="h1"
              classList="-title"
              text={"Meet us in person"}
            />
            <Desc
              classList="-desc"
              text="We’re here answer queries and to guide and provide you with information you need in choosing the perfect"
            />
          </Col>
          <Col xs={12} md={8} lg={8} className="pl-md-5 pr-md-0 offset-lg-1">
            <Fade bottom>
              <Form
                className="ContactUsForm"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    xs={12}
                    md="6"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      // placeholder="Enter Name"
                      placeholder=""
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xs={12}
                    md="6"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="PhoneNumber"> +91 </InputGroup.Text>
                      <Form.Control
                        required
                        type="number"
                        // placeholder="Enter Phone Number"
                        placeholder=""
                        aria-label="PhoneNumber"
                        aria-describedby="PhoneNumber"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    xs={12}
                    md="6"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      // placeholder="Enter Email"
                      placeholder=""
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xs={12}
                    md="6"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      // placeholder="Enter Message"
                      placeholder=""
                      defaultValue=""
                    />
                  </Form.Group>
                </Row>
                <Button className="btn btn--submit" type="submit">
                  Submit
                </Button>
              </Form>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
