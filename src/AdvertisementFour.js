import React from "react";
import "./AdvertisementFour.css";

function AdvertisementFour(props) {
  return (
    <div className="AdvertisementOne__main">
      <div className="AdvertisementOne__header">{props.definition.header}</div>
      <div className="AdvertisementOne__body">
        <div className="AdvertisementOne__link">
          <img src={props.definition.definition[0]} className="ad_fourImage" />
          <div>{props.definition.link1}</div>
        </div>
        <div className="AdvertisementOne__link">
          <img src={props.definition.definition[1]} className="ad_fourImage" />
          <div>{props.definition.link2}</div>
        </div>
        <div className="AdvertisementOne__link">
          <img src={props.definition.definition[2]} className="ad_fourImage" />
          <div>{props.definition.link3}</div>
        </div>
        <div className="AdvertisementOne__link">
          <img src={props.definition.definition[3]} className="ad_fourImage" />{" "}
          <div>{props.definition.link4}</div>
        </div>
      </div>
      <div className="AdvertisementOne__footer">See more</div>
    </div>
  );
}

export default AdvertisementFour;
