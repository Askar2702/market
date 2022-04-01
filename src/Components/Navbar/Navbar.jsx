import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

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
    <nav className="bg-dark d-flex justify-content-between">
      <div className="m-2">
        <Link to="/" className="text-decoration-none">
          <h2 className="navbar__logo text-white">Market</h2>
        </Link>
      </div>
      <div className="bg-light rounded-pill m-2">
        <Link to="/cart" className="text-decoration-none">
          <div className="d-flex justify-content-center">
            <div className="w-25 h-25 mx-3">
              <img
                className="cart__image img-fluid"
                src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
                alt="shopping cart"
              />
            </div>
            <div className="w-25 h-25">
              <h2 className="text-dark">{cartCount}</h2>
            </div>
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
