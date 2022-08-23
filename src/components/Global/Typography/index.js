import style from "./Typography.module.scss";
import MapIcon from "./MapIcon";
import RightArrowIcon from "./RightArrowIcon";
import Fade from "react-reveal/Fade";

export const Desc = ({ text, classList = "" }) => (
  <Fade bottom>
    <p className={`${style.desc} ${classList}`}>{text}</p>
  </Fade>
);

export const HashTagTitle = ({ text, classList = "" }) => (
  <Fade bottom>
    <h1 className={`${style.HashTagTitle} ${classList}`}>{text}</h1>
  </Fade>
);

export const AnchorTag = ({ text, classList = "", href }) => (
  <Fade bottom>
    <a className={`${style.AnchorTag} ${classList}`} href={href}>
      <span className="mr-3">{text}</span>
      <RightArrowIcon />
    </a>
  </Fade>
);

export const AnchorButton = ({ text, classList = "", href }) => (
  <Fade bottom>
    <a className={`${style.AnchorButton} ${classList}`} href={href} download>
      {text}
    </a>
  </Fade>
);

export const AnchorGradientButton = ({ text, classList = "", href }) => (
  <Fade bottom>
    <a className={`${style.AnchorGradientButton} ${classList}`} href={href}>
      {text}
    </a>
  </Fade>
);

export const AnchorButtonIcon = ({
  text,
  classList = "",
  icon,
  href,
  target,
}) => (
  <Fade bottom>
    <a
      className={`${style.AnchorButtonIcon} ${classList}`}
      href={href}
      target={target}
    >
      {icon ? <MapIcon /> : ""}
      <span className={icon ? "ml-3" : ""}>{text}</span>
    </a>
  </Fade>
);

export const Heading = ({ text, desc, classList = "", variant = "h1" }) => {
  if (variant === "h1") {
    return (
      <Fade bottom>
        <h1 className={`${style.heading} ${classList}`}>{text}</h1>{" "}
      </Fade>
    );
  }

  if (variant === "h2") {
    return (
      <Fade bottom>
        <h2 className={`${style.h2Heading} ${classList}`}>{text}</h2>{" "}
      </Fade>
    );
  }

  if (variant === "h3") {
    return (
      <Fade bottom>
        <h3 className={`${style.h3heading} ${classList}`}>{text}</h3>{" "}
      </Fade>
    );
  }

  if (variant === "h4") {
    return (
      <Fade bottom>
        <h4 className={`${style.h4heading} ${classList}`}>{text}</h4>{" "}
      </Fade>
    );
  }

  if (variant === "h5") {
    return (
      <Fade bottom>
        <h5 className={`${style.h5heading} ${classList}`}>{text}</h5>{" "}
      </Fade>
    );
  }

  if (variant === "h6") {
    return (
      <Fade bottom>
        <h6 className={`${style.h6heading} ${classList}`}>{text}</h6>{" "}
      </Fade>
    );
  }

  if (variant === "h7") {
    return (
      <Fade bottom>
        <h6 className={`${style.h7heading} ${classList}`}>{text}</h6>{" "}
      </Fade>
    );
  }

  if (variant === "h1Lg") {
    return (
      <Fade bottom>
        <h1 className={`${style.h1Lg} ${classList}`}>{text}</h1>{" "}
      </Fade>
    );
  }

  return (
    <Fade bottom>
      <h1 className={`${style.h1heading} ${classList}`}>{text}</h1>{" "}
    </Fade>
  );
};
