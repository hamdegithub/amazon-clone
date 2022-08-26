import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlacesOrder.css";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
const PlaceOrder = ({
  id,
  title,
  price,
  image,
  rating,
  review,
  emi,
  delivery,
  soldby,
  about,
}) => {
  const [basketaa, setbasketa] = useState([]);
  const { ida } = useParams();
  const [{ basket }, dispatch] = useStateValue();
  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: basketaa.id,
        image: basketaa.image,
        price: basketaa.price,
        rating: basketaa.rating,
        review: basketaa.review,
        emi: basketaa.emi,
        delivery: basketaa.delivery,
      },
    });
  };

  useEffect(() => {
    let list = [
      {
        id: 123456543,
        name: "Amazon Essential",
        rating: "34565",
        review: "1000",
        image:
          "https://m.media-amazon.com/images/I/71UlX1U7dML._MCnd_AC_UL320_.jpg",
        dis: "Making the Cut Season 3 Episode 1 Winning Look Sienna's Ruffle High-Low Dress",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "50999",
        status: "In stock",
        soldby: "Darshita Electronics",

        about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 54342265,
        name: "New Apple iPhone 11",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "50999",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
        about: [
          "Desription for iphone 11 -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 123453456543,
        name: "Amazon Essential",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "76543",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
        about: [
          "Desription for iphone 12 -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 12344545456543,
        name: "Amazon Essential",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "637357",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
        about: [
          "Desription for iphone 13 -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 123465656543,
        name: "Amazon Essential",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "76543",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
        about: [
          "Desription for iphone 12 pro pmax -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 2356346363,
        name: "Amazon Essential",
        rating: "637357",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "50999",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://www.amazon.com/s/ref=s9_acss_bw_cg_purimil_2a1_w?k=nintendo&i=videogames-intl-ship&ref=nb_sb_noss&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=XXT6E20JMAF1J76BXCF4&pf_rd_t=101&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_i=23508887011",
        about: [
          "Desription for iphone 13 -bla mini bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
    ];
    // fake API

    // const singleProduct = list.filter((x) => x.id == ida);
    // setbasketa(singleProduct);
    // console.log(singleProduct);
    let itemfilter = list.filter((item) => {
      if (item.id == ida) return item;
    });

    console.log(itemfilter);
    setbasketa(itemfilter[0]);
  }, [ida]);
  return (
    <div>
      <Grid container>
        <Grid item xs={5}>
          <img className="placeorder__image" src={basketaa.image} />
        </Grid>
        <Grid item xs={4}>
          <div className="placeholder__description">
            <div
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: 500,
              }}
            >
              {" "}
              {basketaa.name}{" "}
            </div>
            <div>
              <Rating
                name="read-only"
                value="3"
                readOnly
                style={{ fontSize: "20px" }}
              />
              {basketaa.ratings} ratings |{review}+ answered questions
            </div>
            <hr></hr>
            <div>
              <div className="textgap">
                Price: <span className="pricetag">₹ {basketaa.price}</span>
              </div>
              <div className="textgap">
                <span className="pricetag">₹ {basketaa.dis}</span>
              </div>
              <div className="textgap">
                FREE delivery: <strong>{basketaa.delivery}</strong>
              </div>
              <div className="textgap">
                EMI starts at ₹ {basketaa.emi}. No Cost EMI available
              </div>
              <div
                style={{ color: "#007600", fontSize: "20px" }}
                className="textgap"
              >
                {basketaa.status}
              </div>
              <div className="textgap">
                Sold by <strong>{basketaa.soldby}</strong> and Fulfilled by
                Amazon.
              </div>
            </div>
            <div>
              <br></br>
              <div style={{ fontSize: "24px" }} className="textgap">
                About this item
              </div>
              <div>
                <ul>
                  {about != undefined ? (
                    about.map((item) => <li>{item}</li>)
                  ) : (
                    <span></span>
                  )}
                </ul>
                {/* <ul> */}
                {/* <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>
                                </ul> */}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper variant="outlined" className="placeorder__order">
            <div>
              <div>
                <strong>Without Exchange</strong>
              </div>
              <div>50,999</div>
              <div style={{ marginTop: "10px" }}>
                <strong>Add an Accessory</strong>
              </div>
              <div>
                <label>
                  <input type="checkbox"></input>Apple Airpods
                </label>
                <br></br>
                <label>
                  <input type="checkbox"></input>Apple 20W USB Power Adapter
                </label>
              </div>
              <div>
                <button
                  className="placeorder__button buynow"
                  onClick={addTobasket}
                >
                  Add to basketaa
                </button>

                {/* <Link to="/checkout">
                  <button
                    onClick={addTobasket}
                    className="placeorder__button buynow"
                  >
                    Buy Now
                  </button>
                </Link> */}
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceOrder;
