import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../Redux/Shop/action";

import "../../../Styles/Product.css";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`/product/${product.id}`, { replace: true }),
    [navigate]
  );

  const showItem = () => {
    loadCurrentItem(product);
    handleOnClick();
  };

  return (
    <div className="Product">
      <img className="productImg" src={product.image} alt={product.title} />

      <div className="productDescription">
        <p className="title">{product.title}</p>
        <p className="description">{product.description}</p>
        <p className="price">$ {product.price}</p>
      </div>

      <div className="buttonsBlock ">
        <button className="btn" onClick={() => showItem()}>
          View Item
        </button>
        <button
          onClick={() => addToCart(product.id)}
          className="mx-2 btn btn-primary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
