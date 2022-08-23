import { InView } from "react-intersection-observer";
import { useState } from "react";
import { Footer } from "../components/index";
import Hero from "./hero/hero";
import Showcase from "./showcase/showcase";
import Testimonials from "./testimonials/testimonials";
import Visit from "./visit/visit";
import Features from "./features/features";
import Blogs from "./blogs/blogs";
import GetInTouch from "./getintouch/getintouch";

export default function Home() {
  const [inViewShowcase, setInViewShowcase] = useState(false);
  const [inViewTestimonials, setInViewTestimonials] = useState(false);
  const [inViewHero, setInViewHero] = useState(false);
  const [inViewFeatures, setInViewFeatures] = useState(false);
  const [inViewVisit, setInViewVisit] = useState(false);
  const [inViewFooter, setInViewFooter] = useState(false);
  const [inViewBlogs, setInViewBlogs] = useState(false);

  return (
    <>
      <InView onChange={setInViewHero} triggerOnce={true}>
        <Hero inView={inViewHero}></Hero>
      </InView>
      <InView onChange={setInViewShowcase} triggerOnce={true}>
        <Showcase inView={inViewShowcase}></Showcase>
      </InView>
      <InView onChange={setInViewFeatures} triggerOnce={true}>
        <Features inView={inViewFeatures}></Features>
      </InView>
      <InView onChange={setInViewBlogs} triggerOnce={true}>
        <Blogs inView={inViewBlogs}></Blogs>
      </InView>
      <InView onChange={setInViewTestimonials} triggerOnce={true}>
        <Testimonials inView={inViewTestimonials}></Testimonials>
      </InView>
      <InView onChange={setInViewVisit} triggerOnce={true}>
        <Visit inView={inViewVisit}></Visit>
      </InView>
      <InView onChange={setInViewFooter} triggerOnce={true}>
        <Footer inView={inViewFooter}></Footer>
      </InView>
      <GetInTouch />
    </>
  );
}
