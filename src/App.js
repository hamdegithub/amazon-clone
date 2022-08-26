import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import DisplayContent from "./DisplayContent/DisplayContent";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import MainPage from "./MainPage";
import Newnav from "./Newnav";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51IOFapDqGqBsecWeLHztnQJoc4tHB48nlRT5KFidt7wnPEwHTNsVM748YL6zamMNQhAIP80swGsDPUSTEdx7RoDp00Ci6oUs2p"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Newnav />
                <Banner />
                <MainPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/display"
            element={
              <>
                <Header />
                <Newnav />
                <DisplayContent />
                <Footer />
              </>
            }
          />
          <Route
            path="/order/:ida"
            element={
              <>
                <Header />
                <Newnav />
                <PlaceOrder />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Newnav />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Newnav />
                <Orders />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
