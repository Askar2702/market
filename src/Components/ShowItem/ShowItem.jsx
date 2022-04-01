import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../Redux/Shop/action";

const ShowItem = ({ current, addToCart }) => {
  return (
    <div className="d-flex w-100 text-secondary my-5">
      <img className="w-50 ml-2" src={current.image} alt={current.title} />
      <div className="singleItem__details w-50 m-3 text-center">
        <p className="h1">{current.title}</p>
        <p className="h4">{current.description}</p>
        <p className="h2"> ${current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="btn btn-primary"
        >
          Add To Cart
        </button>
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
