import { InView } from "react-intersection-observer";
import { useState } from "react";
import { Footer } from "../components/index";
import TextContent from "./text-content/text-content";

export default function Disclaimer() {
  const [inView, setInView] = useState(false);
  const [inViewFooter, setInViewFooter] = useState(false);

  return (
    <>
      <InView onChange={setInView} triggerOnce={true}>
        <TextContent inView={inView}></TextContent>
      </InView>
      <InView onChange={setInViewFooter} triggerOnce={true}>
        <Footer inView={inViewFooter}></Footer>
      </InView>
    </>
  );
}
