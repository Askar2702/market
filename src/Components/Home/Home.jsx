import React from "react";
import Navbar from "../Navbar/Navbar";
import data from "../../data.json";

import { connect } from "react-redux";

import Product from "./Product/product";

const Home = ({ item }) => {
  return (
    <div>
      <Navbar /> Home
      <div>
        <div className="item">
          {item.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        {/* {data.map((p) => {
          return (
            <>
              <h1>{p.title}</h1>
              <h2>{p.description}</h2>
              <img src={p.image} alt="" />
            </>
          );
        })} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Home);
