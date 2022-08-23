import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { Heading } from "./Typography";

import Fade from "react-reveal/Fade";

export default function DownloadBrochure({ show, handleClose }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Heading variant="h3" classList="" text={"Download Brochure"} />
        </Modal.Header>
        <Modal.Body>
          <Fade bottom>
            <Container>
              <Row className="py-0">
                <Col xs={12} md={12} lg={12} className="px-0">
                  <Form
                    className="ContactUsForm"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="my-0">
                      <Form.Group
                        as={Col}
                        xs={12}
                        md={12}
                        controlId="validationCustom01"
                      >
                        <Form.Label>Name *</Form.Label>
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
                        md={12}
                        controlId="validationCustom02"
                      >
                        <Form.Label>Phone Number *</Form.Label>
                        <InputGroup>
                          <InputGroup.Text id="PhoneNumber">
                            +91
                          </InputGroup.Text>
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
                        md={12}
                        controlId="validationCustom01"
                      >
                        <Form.Label>Email *</Form.Label>
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
                        md={12}
                        controlId="validationCustom02"
                        className=""
                      >
                        <Form.Label>What would you like to discuss?</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          // placeholder="Enter Message"
                          placeholder=""
                          defaultValue=""
                        />
                      </Form.Group>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Fade>
        </Modal.Body>
        <Modal.Footer>
          <Fade bottom>
            <Button
              className="btn btn--submit w-100"
              type="submit"
              onClick={handleClose}
            >
              Dowload Now
            </Button>
          </Fade>
        </Modal.Footer>
      </Modal>
    </>
  );
}
