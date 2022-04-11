import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../Redux/Shop/action";
import "../../Styles/ShowItem.css";

const ShowItem = ({ current, addToCart }) => {
  return (
    <div className="showItem-container">
      <div className="container">
        <img src={current.image} alt={current.title} />
        <div className="singleItem__details w-50 m-3 text-center">
          <p className="h1">{current.title}</p>
          <p className="h4">{current.description}</p>
          <p className="h2"> ${current.price}</p>

          <button onClick={() => addToCart(current.id)} className="btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);
