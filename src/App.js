import { Switch, Route } from "react-router-dom";
import Home from "./home";
import ContactUs from "./contact-us";
import Disclaimer from "./disclaimer";
import PrivacyPolicy from "./privacy-policy";
import SoulTree from "./pages/SoulTree";
import Urbanest from "./pages/Urbanest";
import Project from "./pages/Project";
import Soulace from "./pages/Soulace";
// useRef
import { useState, useEffect } from "react";
import { Header } from "./components/index";
import { useLocation } from "react-router-dom";

export default function App() {
  const [isShowLinks, setIsShowLinks] = useState(false);
  let location = useLocation();

  const handleScroll = (event) => {
    let offsetTop = document.documentElement.scrollTop;
    if (offsetTop > 80) {
      setIsShowLinks(true);
    } else {
      setIsShowLinks(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location]);

  return (
    <article className="app-container p-0 container-fluid">
      <Header isShowLinks={isShowLinks}></Header>
      <Switch>
        <Route path="/project" component={Project}></Route>
        <Route path="/soultree" component={SoulTree}></Route>
        <Route path="/urbanest" component={Urbanest}></Route>
        <Route path="/soulace" component={Soulace}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path="/disclaimer" component={Disclaimer}></Route>
        <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </article>
  );
}
