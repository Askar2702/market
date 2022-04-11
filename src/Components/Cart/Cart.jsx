import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import Item from "./Item/Item";
import "../../Styles/Cart.css";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cartConatiner">
      <div className="cartItem">
        {cart.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className="totalBlock">
        <h4 className="h1">Cart Summary:</h4>
        <div className="h3">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className="btn">Proceed To Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
