import { InView } from "react-intersection-observer";
import { useState } from "react";
import {
  Banner,
  ProjectAtGlance,
  MasterPlan,
  Blocks,
} from "../components/Project";
import { ContactUs } from "../components/SoulTree";
import { Footer } from "../components/index";

export default function Urbanest() {
  const [inViewBanner, setInViewBanner] = useState(false);
  const [inViewProjectAtGlance, setInViewProjectAtGlance] = useState(false);
  const [inViewMasterPlan, setInViewMasterPlan] = useState(false);
  const [inViewBlocks, setInViewBlocks] = useState(false);
  const [inViewFooter, setInViewFooter] = useState(false);
  const [inViewContactUs, setInViewContactUs] = useState(false);
  return (
    <>
      <InView
        className="bgPattern"
        onChange={setInViewBanner}
        triggerOnce={true}
      >
        <Banner inView={inViewBanner}></Banner>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewProjectAtGlance}
        triggerOnce={true}
      >
        <ProjectAtGlance inView={inViewProjectAtGlance}></ProjectAtGlance>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewMasterPlan}
        triggerOnce={true}
      >
        <MasterPlan inView={inViewMasterPlan}></MasterPlan>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewBlocks}
        triggerOnce={true}
      >
        <Blocks inView={inViewBlocks}></Blocks>
      </InView>

      <InView
        className="bgPattern bgPattern--HrGrassPattern"
        onChange={setInViewContactUs}
        triggerOnce={true}
      >
        <ContactUs inView={inViewContactUs}></ContactUs>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewFooter}
        triggerOnce={true}
      >
        <Footer inView={inViewFooter}></Footer>
      </InView>
    </>
  );
}
