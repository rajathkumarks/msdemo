import { Desc, Heading } from "../../Global/Typography";

export default function ClubCard({ item }) {
  return (
    <div className="-club-card-block m-0 p-0">
      <div className="-image-block">
        <img
          src={item.image}
          className="SmartGreenMinimal__image"
          alt="SmartGreenMinimal"
        />
        <div className="-content-block">
          <ul className="-club-block">
            <li className="-club-block__list">
              <Heading variant="h5" classList="-title" text={item.title} />
            </li>
            <li className="-club-block__list">
              <Desc classList="-desc mt-3 mb-0" text={item.label} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
