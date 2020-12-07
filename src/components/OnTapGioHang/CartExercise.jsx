import React, { Component } from "react";
import CartModal from "./CartModal";
import CartProductList from "./CartProductList";

import dataPhone from "../../data/dataPhone.json";

export default class CartExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
    };
  }
  addToCart = (productToAdd) => {
    let cartProduct = {
      maSP: productToAdd.maSP,
      tenSP: productToAdd.tenSP,
      giaBan: productToAdd.giaBan,
      hinhAnh: productToAdd.hinhAnh,
      soLuong: 1,
    };
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (item) => item.maSP === cartProduct.maSP
    );
    if (index !== -1) {
       (gioHangCapNhat[index].soLuong += 1);
    } else {
      gioHangCapNhat.push(cartProduct);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  render() {
    let TongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center text-success bg-dark m-2 p-3">
          Cart Exercise {new Date().toLocaleString()}
        </h3>
        <CartModal gioHang={this.state.gioHang} />
        <div className="text-right">
          <i className="fa fa-shopping-cart"></i>
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ Hàng {TongSoLuong}
          </span>
        </div>
        <CartProductList addProduct={this.addToCart} mangSanPham={dataPhone} />
      </div>
    );
  }
}
