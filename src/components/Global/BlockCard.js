import Fade from "react-reveal/Fade";

export default function BlockCard({ item }) {
  return (
    <div className="-blocks-card-block m-2 mmd-3">
      {item.isAvailable ? (
        <img src={item.image} className="-image" alt="Blocks" />
      ) : (
        <div className="-sold-out-block">
          <img src={item.image} className="-image" alt="Blocks" />
          <div className="-sold-out">Sold Out</div>
        </div>
      )}
      <ul className="-blocks-block">
        <li className="-blocks-block__list">
          <Fade bottom>
            <span className="-title">{item.title}</span>
            <span className="-desc">{item.phases}</span>
          </Fade>
        </li>
        <li className="-blocks-block__list">
          {" "}
          <Fade bottom>
            <span className="-desc">{item.type}</span>
            <span className="-desc">{item.SqFt}</span>
          </Fade>
        </li>
        <li className="-blocks-block__list">
          <Fade bottom>
            <span className="-price">{item.price}</span>
            <span className="-label">{item.label}*</span>
          </Fade>
        </li>
      </ul>
    </div>
  );
}
