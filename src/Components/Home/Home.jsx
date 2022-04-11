import React from "react";
import Navbar from "../Navbar/Navbar";

import { connect } from "react-redux";

import Product from "./Product/product";
import "../../Styles/Home.css";

const Home = ({ item }) => {
  return (
    <div className="Home">
      <div className="container">
        {item.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.shop.products,
  };
};

export default connect(mapStateToProps)(Home);
