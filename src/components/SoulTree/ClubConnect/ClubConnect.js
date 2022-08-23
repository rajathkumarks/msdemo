import React from "react";
import { useRef, useEffect, useState } from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

import styled from "styled-components";
import gsap from "gsap";
import TextMaskImage from "../../../images/SoulTree/ClubconnectTextMask.svg";
import Clubs from "./Clubs";
import "./ClubConnect.scss";

const TweenStyled = styled.div``;

export default function ClubConnect() {
  const boxRef = useRef();
  const [activeKey, setActiveKey] = useState(false);

  useEffect(() => {
    gsap.to(boxRef.current, {
      onComplete: justOnCompleteCall,
    });
  });

  const justOnCompleteCall = () => {
    setActiveKey(true);
  };
  return (
    <div className="bg-linearGradient1">
      <TweenStyled>
        <div className="ClubconnectScroll">
          <Controller>
            <Scene
              triggerElement="#club-trigger"
              duration={300}
              pin={false}
              offset={200}
            >
              {(progress) => (
                <Tween
                  from={{
                    ease: "power4.out",
                    scale: 1,
                    x: 0,
                    y: 0,
                  }}
                  to={{
                    ease: "power2.in",
                    scale: 300,
                    y: 25,
                    left: "0",
                  }}
                  totalProgress={progress}
                  paused
                >
                  <div className="ExpTextBackground" ref={boxRef}>
                    <img src={TextMaskImage} alt="mask" />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
      </TweenStyled>

      {activeKey ? (
        <div>
          <Clubs />
        </div>
      ) : null}
    </div>
  );
}

// import { Container, Row, Col } from "react-bootstrap";
// import { HashTagTitle } from "../../Global/Typography";
// import "./ClubConnect.scss";

// export default function ClubConnect({ inView }) {
//   return (
//     <section
//       className={`section ${inView ? "inView" : "outView"}
//     `}
//     >
//       <Container className="ClubConnect my-md-5 py-md-5">
//         <Row className="align-items-center text-center">
//           <Col xs={12} className="my-5 py-5">
//             <HashTagTitle classList="Campus__title" text="#ClubConnect" />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// import { Row, Col } from "react-bootstrap";
// Container
// import { HashTagTitle } from "../../Global/Typography";

// export default function ClubConnect({ inView }) {
//   return (
//     <section className="section">
//       <div className="ClubConnect my-md-5 py-md-5">
//         <Row className="align-items-center text-center">
//           <Col xs={12} className="my-5 py-5">
//             <div className="mask-bg">
//               <div className={`mask h-100 ${inView ? "" : ""}`}></div>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </section>
//   );
// }
