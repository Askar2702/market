import { Routes, Route, Link } from "react-router-dom";
import './Styles/App.css';
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import ShowItem from "./Components/ShowItem/ShowItem"
import { connect } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
function App({ current }) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {!current ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route exact path="/product/:id" element={<ShowItem />} />
        )}
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
