import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";

const data = [
  " https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg",
];

// console.log(data);

const Banner = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={false}
        mouseHover={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "none",
            color: "#FFF",
            buttonSize: "40px",
            borderRadius: 0,
            marginTop: -222,
            height: "236px",
            width: "74px",
          },
        }}
      >
        {data.map((imag, i) => {
          return (
            <>
              <img src={imag} alt="img" key={i} className="banner_img" />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;
