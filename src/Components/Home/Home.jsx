import React from "react";
import Navbar from "../Navbar/Navbar";

import { connect } from "react-redux";

import Product from "./Product/product";

const Home = ({ item }) => {
  return (
    <div className="bg-light">
      <div className="container-fluid row">
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
