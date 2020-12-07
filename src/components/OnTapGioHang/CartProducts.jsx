import React, { Component } from "react";
import SanPham from "../BaiTap/SanPham";

export default class CartProducts extends Component {
  render() {
      const {products, addProduct} = this.props;
    return (
      <div>
        <div className="card text-white bg-dark">
          <img className="card-img-top" src={products.hinhAnh} alt={products.tenSP} width={200} height={300}/>
          <div className="card-body">
            <h4 className="card-title">{products.tenSP}</h4>
            <button className="btn btn-danger" onClick={()=> addProduct(products)}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
