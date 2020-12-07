import React, { Component } from "react";
import CartProducts from "./CartProducts";
export default class CartProductList extends Component {
  render() {
    const { mangSanPham, addProduct } = this.props;
    return (
      <div>
        <div className="row">
          {mangSanPham.map((products, index) => {
            return (
              <div className="col-4" key={index}>
                <CartProducts  addProduct={addProduct} products={products} ></CartProducts>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
