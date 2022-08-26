import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className="navbar__component">
        <Link to="/">
          <div className="navbar__logo"></div>
        </Link>
        <div className="navbar__locator">
          <div className="navbar__locatorImage"></div>
          <div className="navbar__location"> Ethiopia</div>
        </div>
        <div className="navbar__searchcomponent">
          <div>
            <select className="nav__dropdown">
              <option value="All">All</option>
              <option value="Alexa">All Document</option>
              <option value="Books">Art & carts</option>
              <option value="Baby">Automotive</option>
              <option value="Beauty">Books</option>
              <option value="Clothes">Beauty and Personal Care</option>
              <option value="Clothes">Boy Fashion</option>
              <option value="Clothes">Computers</option>
              <option value="Clothes">Deals</option>
              <option value="Clothes">Digital Music</option>
              <option value="Clothes">Electronics</option>
              <option value="Clothes">Leggage</option>
            </select>
          </div>
          <div>
            <input type="text" className="navbar__searchbox" />
          </div>
          <div className="navbar__seaarchboxdiv">
            <div className="navbar__searchicon" />
          </div>
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user?.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">&Orders</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="navbar_text navbar__cart">
              <div src="" className="cart__image"></div>
              <div className="cart__item"> {basket.length} </div>
              <div className="navbar_text_cart">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
