import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { Desc, Heading, AnchorTag } from "../../Global/Typography";
import TheHeartAndSoulImage from "../../../images/SoulTree/TheHeartAndSoulImage.png";
import VideoIconImage from "../../../images/SoulTree/VideoIconImage.svg";
import "./TheHeartAndSoul.scss";

export default function TheHeartAndSoul({ inView }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className={`section mt-md-5  pb-0 pb-md-5 mb-md-5${inView ? "inView" : "outView"}`}>
      <Container className="text-left TheHeartAndSoul">
        <Row>
          <Col xs={12} md={5} lg={5} xl={4}>
            <div className="TheHeartAndSoul__content-block">
              <Heading
                variant="h1"
                classList="TheHeartAndSoul__title"
                text="The heart and Soul"
              />
              <Desc
                classList="TheHeartAndSoul__desc my-3 "
                text="Area designed to satisfy your outdoor needs and keep you motivated to work and socialize. With the various facilities available at your fingertips, you can enjoy a calm space to work or inspire yourself to break a sweat."
              />
              <AnchorTag
                href="#"
                classList="TheHeartAndSoul__link mt-4"
                text="View the walkthrough"
              />
            </div>
          </Col>
        </Row>
        <div className="TheHeartAndSoul__image-block">
          <ModalVideo
            channel="youtube"
            autoPlay
            isOpen={isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => setOpen(false)}
          />
          <img
            src={TheHeartAndSoulImage}
            className="TheHeartAndSoul__image"
            alt="TheHeartAndSoul"
          />
          <div className="videoIconImage" onClick={() => setOpen(true)}>
            <img
              src={VideoIconImage}
              className="TheHeartAndSoul__videoIcon"
              alt="TheHeartAndSoul"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
