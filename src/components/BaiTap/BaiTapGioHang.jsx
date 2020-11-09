import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
export default class BaiTapGioHang extends Component {
    handlerXemChiTiet = (sanPham) => {
        this.setState({
          sanPhamChiTiet: sanPham,
        });
      };
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success">Danh sách sản phẩm</h3>
        <DanhSachSanPham></DanhSachSanPham>
      </div>
    );
  }
}
