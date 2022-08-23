import { InView } from "react-intersection-observer";
import { useState } from "react";
import {
  Banner,
  ProjectAtGlance,
  MasterPlan,
  Blocks,
  ClubConnect,
  TranquilCourt,
  HealthClub,
  ExcellentConnectivity,
  Campus,
  Schools,
  Blog,
  // OtherProject,
  GalleryTabs,
  Specifications,
} from "../components/Urbanest";
import { ContactUs } from "../components/SoulTree";
import { Footer } from "../components/index";

export default function Urbanest() {
  const [inViewBanner, setInViewBanner] = useState(false);
  const [inViewProjectAtGlance, setInViewProjectAtGlance] = useState(false);
  const [inViewMasterPlan, setInViewMasterPlan] = useState(false);
  const [inViewBlocks, setInViewBlocks] = useState(false);
  const [inViewClubConnect, setInViewClubConnect] = useState(false);
  const [inViewTranquilCourt, setInViewTranquilCourt] = useState(false);
  const [inViewHealthClub, setInViewHealthClub] = useState(false);
  const [inViewExcellentConnectivity, setInViewExcellentConnectivity] =
    useState(false);
  const [inViewCampus, setInViewCampus] = useState(false);
  const [inViewSchools, setInViewSchools] = useState(false);
  const [inViewBlog, setInViewBlog] = useState(false);
  // const [inViewOtherProject, setInViewOtherProject] = useState(false);
  const [inViewContactUs, setInViewContactUs] = useState(false);
  const [inViewGalleryTabs, setInViewGalleryTabs] = useState(false);
  const [inViewSpecifications, setInViewSpecifications] = useState(false);
  const [inViewFooter, setInViewFooter] = useState(false);

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
        className="bgPattern"
        onChange={setInViewClubConnect}
        triggerOnce={true}
        id="club-fig-triggr"
      >
        <ClubConnect inView={inViewClubConnect}></ClubConnect>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewTranquilCourt}
        triggerOnce={true}
      >
        <TranquilCourt inView={inViewTranquilCourt}></TranquilCourt>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewHealthClub}
        triggerOnce={true}
      >
        <HealthClub inView={inViewHealthClub}></HealthClub>
      </InView>

      <InView
        className="bgPattern bgPattern--PatternEdge"
        onChange={setInViewExcellentConnectivity}
        triggerOnce={true}
      >
        <ExcellentConnectivity
          inView={inViewExcellentConnectivity}
        ></ExcellentConnectivity>
      </InView>

      <InView
        className="bgPattern bgPattern--PatternRight"
        onChange={setInViewCampus}
        triggerOnce={true}
      >
        <Campus inView={inViewCampus}></Campus>
      </InView>

      <InView
        className="bgPattern bgPattern--PatternLeft"
        onChange={setInViewSchools}
        triggerOnce={true}
      >
        <Schools inView={inViewSchools}></Schools>
      </InView>

      <InView
        className="bgPattern "
        onChange={setInViewBlog}
        triggerOnce={true}
      >
        <Blog inView={inViewBlog}></Blog>
      </InView>

      <InView
        className="bgPattern bgPattern--black"
        onChange={setInViewGalleryTabs}
        triggerOnce={true}
      >
        <GalleryTabs inView={inViewGalleryTabs}></GalleryTabs>
      </InView>

      <InView
        className="bgPattern bgPattern--black"
        onChange={setInViewSpecifications}
        triggerOnce={true}
      >
        <Specifications inView={inViewSpecifications}></Specifications>
      </InView>
      {/* 
      <InView
        className="bgPattern bgPattern--PatternBottom"
        onChange={setInViewOtherProject}
        triggerOnce={true}
      >
        <OtherProject inView={inViewOtherProject}></OtherProject>
      </InView> */}

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
