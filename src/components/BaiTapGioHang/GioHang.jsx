import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className="card text-white text-left bg-dark">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.manHinh} style={{width:'100%', maxWidth:'100%', height:"300px"}}/>
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button className="btn btn-danger"  onClick={()=>themGioHang(sanPham)}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
