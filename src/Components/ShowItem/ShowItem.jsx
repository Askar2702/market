import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../Redux/Shop/action";

const ShowItem = ({ current, addToCart }) => {
  return (
    <div className="singleItem">
      <img
        className="singleItem__image"
        src={current.image}
        alt={current.title}
      />
      <div className="singleItem__details">
        <p className="details__title">{current.title}</p>
        <p className="details__description">{current.description}</p>
        <p className="details__price"> ${current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="details__addBtn"
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
