import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import "../../Styles/Navbar.css";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav className="Navbar">
      <div className="logo">
        <Link to="/" className="link">
          <h1 className="text">Market</h1>
        </Link>
      </div>
      <div className="cart ">
        <Link to="/cart" className="link">
          <div className="cartBlock">
            <div className="imgBlock "></div>
            <div className="cartCount">{cartCount}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
