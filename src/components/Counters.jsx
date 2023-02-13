import React, { Component } from "react";
import Counter from "./Counter";
import Cart from "./Cart";
import { Divider } from "antd";

export default class Counters extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      onDelete,
      products,
      cartProducts,
      addToCart,
      onReset,
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <button onClick={onReset} className="btn btn-primary mt-2">
            Reset
          </button>
        </div>
        {products.map((product) => (
          <div className="col-md-4 p-3" key={product.id}>
            <Counter
              // onDelete={onDelete}
              product={product}
              addToCart={addToCart}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        ))}
        <div className="col-md-12 mb-3">
          <Divider orientation="left">Cart</Divider>
        </div>
        {cartProducts.map((cartProduct) => (
          <div className="col-md-4" key={cartProduct.id}>
            <Cart
              cartProduct={cartProduct}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    );
  }
}
