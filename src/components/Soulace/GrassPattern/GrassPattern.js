import React from "react";
import GrassPatternImage from "../../../images/SoulTree/GrassPattern.svg";
import "./GrassPattern.scss";

export default function GrassPattern() {
  return (
    <div className="md-banner-bgspace">
      <div className="md-banner-bgspace__info">
        <img src={GrassPatternImage} alt="logo" className="GrassPattern" />
      </div>
    </div>
  );
}
