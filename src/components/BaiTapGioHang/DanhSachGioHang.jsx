import React, { Component } from "react";
import GioHang from "./GioHang";

export default class DanhSachGioHang extends Component {
  render() {
    const { mangSanPham, themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-4" key={index}>
                <GioHang sanPham={sanPham} themGioHang={themGioHang}></GioHang>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
