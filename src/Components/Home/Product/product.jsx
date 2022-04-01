import React from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../Redux/Shop/action";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="flex-row justify-content-between w-50 my-3 col-6">
      <img className="w-50 img-fluid" src={product.image} alt={product.title} />

      <div className="d-flex flex-column text-secondary my-3 w-75">
        <p className="h1 ">{product.title}</p>
        <p className="h3">{product.description}</p>
        <p className="h2">$ {product.price}</p>
      </div>

      <div className="d-flex justify-content-start mb-5">
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className="mr-2 btn btn-primary"
          >
            View Item
          </button>
        </Link>
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
