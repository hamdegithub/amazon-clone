import React from "react";
import "./AdvertisementThree.css";
function AdvertisementThree(props) {
  return (
    <div>
      <div className="AdvertisementThree__header">
        {props.definition.header}

        <div className="AdvertisementThree__link">
          <a href="">Sign in securely</a>
        </div>
      </div>
      <div className="AdvertisementThree__body">
        <img
          src={props.definition.definition[0]}
          width="300px"
          height="250px"
        />
      </div>
    </div>
  );
}

export default AdvertisementThree;
