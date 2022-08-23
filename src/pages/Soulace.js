import { InView } from "react-intersection-observer";
import { useState } from "react";
import {
  Banner,
  ArchitecturalSlider,
  ProjectAtGlance,
  MasterPlan,
  Blocks,
  TheHeartAndSoul,
  ClubConnect,
  TranquilCourt,
  OutdoorSeating,
  SmartGreenMinimal,
  ExcellentConnectivity,
  Campus,
  Schools,
  Develop,
  ContactUs,
  // OtherProject,
  Specifications,
  GalleryTabs,
} from "../components/Soulace";
import GetInTouch from "./getintouch/getintouch";
// import { Banner, ContactUs } from "../components/SoulTree";
import { Footer } from "../components/index";

export default function Soulace() {
  const [inViewBanner, setInViewBanner] = useState(false);
  const [inViewArchitecturalSlider, setInViewArchitecturalSlider] =
    useState(false);
  const [inViewProjectAtGlance, setInViewProjectAtGlance] = useState(false);
  const [inViewMasterPlan, setInViewMasterPlan] = useState(false);
  const [inViewBlocks, setInViewBlocks] = useState(false);

  const [inViewTheHeartAndSoul, setInViewTheHeartAndSoul] = useState(false);
  const [inViewClubConnect, setInViewClubConnect] = useState(false);
  const [inViewTranquilCourt, setInViewTranquilCourt] = useState(false);
  const [inViewOutdoorSeating, setInViewOutdoorSeating] = useState(false);
  const [inViewSmartGreenMinimal, setInViewSmartGreenMinimal] = useState(false);
  const [inViewExcellentConnectivity, setInViewExcellentConnectivity] =
    useState(false);
  const [inViewCampus, setInViewCampus] = useState(false);
  const [inViewSchools, setInViewSchools] = useState(false);
  const [inViewDevelop, setInViewDevelop] = useState(false);
  const [inViewGalleryTabs, setInViewGalleryTabs] = useState(false);
  const [inViewSpecifications, setInViewSpecifications] = useState(false);
  // const [inViewOtherProject, setInViewOtherProject] = useState(false);
  const [inViewContactUs, setInViewContactUs] = useState(false);
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
        onChange={setInViewArchitecturalSlider}
        triggerOnce={true}
      >
        <ArchitecturalSlider
          inView={inViewArchitecturalSlider}
        ></ArchitecturalSlider>
      </InView>

      <InView onChange={setInViewContactUs} triggerOnce={true}></InView>
      <InView
        className="bgPattern bgPattern--right"
        onChange={setInViewProjectAtGlance}
        triggerOnce={true}
      >
        <ProjectAtGlance inView={inViewProjectAtGlance}></ProjectAtGlance>
      </InView>

      <InView
        className="bgPattern bgPattern--left"
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
        onChange={setInViewTheHeartAndSoul}
        triggerOnce={true}
      >
        <TheHeartAndSoul inView={inViewTheHeartAndSoul}></TheHeartAndSoul>
      </InView>

      <InView
        className="bgPattern mdOverflowHidden"
        id="club-trigger"
        onChange={setInViewClubConnect}
        triggerOnce={true}
      >
        <ClubConnect inView={inViewClubConnect}></ClubConnect>
      </InView>

      <InView
        className="bgPattern mt-md-5 pt-md-5"
        onChange={setInViewTranquilCourt}
        triggerOnce={true}
      >
        <TranquilCourt inView={inViewTranquilCourt}></TranquilCourt>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewOutdoorSeating}
        triggerOnce={true}
      >
        <OutdoorSeating inView={inViewOutdoorSeating}></OutdoorSeating>
      </InView>

      <InView
        className="bgPattern"
        onChange={setInViewSmartGreenMinimal}
        triggerOnce={true}
      >
        <SmartGreenMinimal inView={inViewSmartGreenMinimal}></SmartGreenMinimal>
      </InView>

      <InView
        className="bgPattern bgPattern--bottom"
        onChange={setInViewExcellentConnectivity}
        triggerOnce={true}
      >
        <ExcellentConnectivity
          inView={inViewExcellentConnectivity}
        ></ExcellentConnectivity>
      </InView>

      <InView
        className="bgPattern bgPattern--rightSquare"
        onChange={setInViewCampus}
        triggerOnce={true}
      >
        <Campus inView={inViewCampus}></Campus>
      </InView>

      <InView
        className="bgPattern bgPattern--leftSquare"
        onChange={setInViewSchools}
        triggerOnce={true}
      >
        <Schools inView={inViewSchools}></Schools>
      </InView>

      <InView
        className="bgPattern bgPattern--rightSquare"
        onChange={setInViewDevelop}
        triggerOnce={true}
      >
        <Develop inView={inViewDevelop}></Develop>
      </InView>

      <InView
        className="bgPattern bgPattern--leftSquareFull"
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

      {/* <InView
        className="bgPattern "
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

      <GetInTouch />

      
    </>
  );
}
