import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import ShowItem from "./Components/ShowItem/ShowItem"
import { connect } from "react-redux";
function App({ current }) {
  return (
    <div className="App bg-primary">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        {!current ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route exact path="/Showitem/:id" element={<ShowItem />} />
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
