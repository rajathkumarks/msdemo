import { InView } from "react-intersection-observer";
import { useState } from "react";
import { Footer } from "../components/index";
import ContactForm from "./contact-form/contact-form";
import ContactMain from "./contact-main/contact-main";

export default function ContactUs() {
  const [inViewContactForm, setInViewContactForm] = useState(false);
  const [inViewFooter, setInViewFooter] = useState(false);
  const [inViewContactMain, setInViewContactMain] = useState(false);

  return (
    <>
      <InView onChange={setInViewContactForm} triggerOnce={true}>
        <ContactForm inView={inViewContactForm}></ContactForm>
      </InView>
      <InView onChange={setInViewContactMain} triggerOnce={true}>
        <ContactMain inView={inViewContactMain}></ContactMain>
      </InView>
      <InView onChange={setInViewFooter} triggerOnce={true}>
        <Footer inView={inViewFooter}></Footer>
      </InView>
    </>
  );
}
