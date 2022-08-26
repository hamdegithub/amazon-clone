import React, { Component } from "react";
import AdvertisementOne from "./AdvertisementOne";
import "./MainPage.css";
import AdvertisementFour from "./AdvertisementFour";
import { Link } from "react-router-dom";
import AdvertisementThree from "./AdvertisementThree";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    let arr = [
      {
        type: "four",
        header: "Gaming accessories",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
        ],
        link1: "Headsets",
        link2: "Keyboards",
        link3: "Computer mice",
        link4: "Chiars",
      },
      {
        type: "four",
        header: "Shop by Category",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
        ],
        link1: "Computers ",
        link2: "Video Games",
        link3: "Baby",
        link4: "Toys & Games",
      },
      {
        type: "one",
        header: "Dresses",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg",
        ],
      },
      {
        type: "link",
        header: "Sign in for the best experience",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg",
        ],
      },

      {
        type: "one",
        header: "Easy returns",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg",
        ],
      },
      {
        type: "one",
        header: "Health & Personal Care",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
        ],
      },
      {
        type: "one",
        header: "Electronics",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
        ],
      },
      {
        type: "one",
        header: "Computers & Accessories",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
        ],
      },
      {
        type: "one",
        header: "Shop Laptops & Tablets",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
        ],
      },
      {
        type: "one",
        header: "Home & kitchen essentials",
        definition: [
          "https://m.media-amazon.com/images/I/41wjYZ4VYJL._SY160_.jpg",
        ],
      },
      {
        type: "one",
        header: "Create with strip lights",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
        ],
      },
      {
        type: "one",
        header: "For your Fitness Needs",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
        ],
      },
      {
        type: "one",
        header: "Shop activity trackers and smartwatches",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
        ],
      },
      {
        type: "one",
        header: "Kindle E readers",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg",
        ],
      },
      {
        type: "one",
        header: "New arrivals in Toys",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg",
        ],
      },
      {
        type: "four",
        header: "Gaming merchandise",
        definition: [
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg",
        ],
        link1: "Apparel",
        link2: "Hats",
        link3: "Action figures",
        link4: "Mugs",
      },
    ];
    this.setState({ list: arr });
  }
  render() {
    return (
      <div className="mainpage">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.list.map((value) =>
            value.type === "one" ? (
              <Link to="/display">
                <AdvertisementOne definition={value} />
              </Link>
            ) : value.type === "four" ? (
              <Link to="/display">
                <AdvertisementFour definition={value} />
              </Link>
            ) : (
              <AdvertisementThree definition={value} />
            )
          )}
          {/* <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementFour />
                    <AdvertisementOne /> */}
        </div>
      </div>
    );
  }
}

export default MainPage;
