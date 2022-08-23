import "./getintouch.scss";
import { Link } from "react-router-dom";

export default function GetInTouch({ inView }) {
  return <div className="bg-black getintouch d-none d-md-flex align-items-center justify-content-center fw-bold">
    <Link to="contact-us" className="fc-primary fw-bold">Get In Touch</Link>
  </div>;
}
