import "./features.scss";
import { Row, Col } from "react-bootstrap";
import logo1 from "../../images/home/fueb-logo.png";
import logo2 from "../../images/home/elementure-logo.png";
import img1 from "../../images/home/feature-1.webp";
import img2 from "../../images/home/feature-2.webp";
import img3 from "../../images/home/feature-3.webp";
import img4 from "../../images/home/feature-4.webp";
import img5 from "../../images/home/feature-5.webp";
import img6 from "../../images/home/feature-6.webp";
import img7 from "../../images/home/feature-7.webp";

export default function Features({ inView }) {
  const items = [
    {
      name: "Smart Touch Switches",
      logo: logo1,
      img: img1,
      desc: "Fueb provides a range of smart home solutions and products. The doors of our homes are equipped with Fueb’s Wi-Fi-based, cloud-enabled Armour Smart Locks. They’re enabled with advanced biometric and RFID-based access control – now your mobile phone is your smart key!",
    },
    {
      name: "Smart Water Meter",
      logo: logo2,
      img: img2,
      desc: "With Aquesa’s water flow measurement and control system, our communities benefit from reducing over 35% on water consumption and 12% on energy costs.",
    },
    {
      name: "Thoughtfully designed architecture",
      img: img3,
      desc: "Our wholesome architectural enhancements have thoughtfully designed ‘pause points.’ They are built all over the lobbies of the living areas and on various seating clusters in and around the corridor spaces.",
    },
    {
      name: "Lean construction process",
      img: img4,
      desc: "Our passion for design transcends architecture and is reflected in the homes. In all our homes, corridors, and common spaces, the prime focus is on offering an abundance of lighting and ventilation.",
    },
    {
      name: "Quality materials",
      img: img5,
      desc: "We take pride in using top-quality materials and professional-grade supplies for flooring, fittings, and fixtures. These are precisely manufactured to help with a smooth construction process.",
    },
    {
      name: "Value Homes",
      img: img6,
      desc: "We believe in creating sustainable communities with energy-efficient technology. Our designs and functionality of space are built with a focus on conserving water and energy, and thereby, our environment.",
    },
    {
      name: "Timely delivery",
      img: img7,
      desc: "We have a legacy of providing timely deliveries. Through stringent construction and management practices with the in-house construction teams, we always strive to deliver before time.",
    },
  ];

  return (
    <section
      className={`section section-features bg-white ${
        inView ? "inView" : "outView"
      }
    `}
    >
      <div className="content h-100 position-relative pt-5">
        <h2 className="sub-heading fc-black bg-white pb-4">
          <span>
            So, what <span className="fw-bold">makes us special</span>
            <br /> you ask ?
          </span>
        </h2>
        <div className="features d-md-block d-none">
          {items.map((item, idx) => {
            return (
              <Row key={idx} xs={2}>
                <Col className="d-flex justify-content-center flex-column col-summary">
                  {item.logo && (
                    <div>
                      <div className="powered fc-dark-3 mb-2">
                        POWERED BY
                      </div>
                      <div className="logo mb-5">
                        <img src={item.logo} alt="logo" className="logo-img" />
                      </div>
                    </div>
                  )}
                  <div className="name mb-4">{item.name}</div>
                  <div className="desc mb-4 fc-dark-4">{item.desc}</div>
                </Col>
                <Col className="col-img">
                  <img src={item.img} alt="feature" className="w-100" />
                </Col>
              </Row>
            );
          })}
        </div>
        <div className="features d-md-none">
          {items.map((item, idx) => {
            return (
              <Row className="feature" key={idx} xs={1} sm={1} md={2}>
                <Col className="d-flex justify-content-center flex-column col-summary">
                  {item.logo && (
                    <div>
                      <div className="powered fc-dark-3 mb-3">
                        POWERED BY
                      </div>
                      <div className="logo mb-5">
                        <img src={item.logo} alt="logo" className="logo-img" />
                      </div>
                    </div>
                  )}
                  <div className="name mb-4">{item.name}</div>
                  <div className="desc mb-4 fc-dark-4">{item.desc}</div>
                </Col>
                <Col className="col-img">
                  <img src={item.img} alt="feature" className="main-img" />
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </section>
  );
}
