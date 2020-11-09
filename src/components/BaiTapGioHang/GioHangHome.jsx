import React, { Component } from "react";
import DanhSachGioHang from "./DanhSachGioHang";
import ModalGioHang from "./ModalGioHang";
import data from "../../data/dataPhone.json";

export default class GioHangHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  themGioHang = (sanPhamChon) => {
    // tạo ra obj được chọn khi click
    // để thêm
    // hoặc so sánh để cộng đồn
    let SanPhamGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (sp) => sp.maSP === SanPhamGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      // trường hợp chưa có masp đó, thêm vào
      gioHangCapNhat.push(SanPhamGioHang);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  xoaGioHang = (maSanPham) => {
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSanPham);
    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }
    var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSanPham);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  tangGiamSoLuong =(maSanPham, tangGiam)=>{
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp=>sp.maSP === maSanPham);
    if(tangGiam) {
      gioHangCapNhat[index].soLuong +=1;
    }else {
      if(gioHangCapNhat[index].soLuong>1){
        gioHangCapNhat[index].soLuong-=1
      }
    }
    this.setState({
      gioHang: gioHangCapNhat
    })
  }
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center text-success">Trang chủ giỏ hàng</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            className="text-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            {" "}
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>

        <DanhSachGioHang
          mangSanPham={data}
          themGioHang={this.themGioHang}
        ></DanhSachGioHang>
        <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></ModalGioHang>
      </div>
    );
  }
}
