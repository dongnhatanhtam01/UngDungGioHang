import React, { Component } from "react";
import SanPham from "./SanPham";
import data from "../../data/dataPhone.json";
import Modal from "./Modal";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: data[0],
    };
  }
  handlerDanhSachSanPham = () => {
    return data.map((dt, index) => {
      return (
        <SanPham
          key={index}
          dt={dt}
          handlerXemChiTiet={this.handlerXemChiTiet}
        ></SanPham>
      );
    });
  };
  handlerXemChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.handlerDanhSachSanPham()}</div>
        <div className="row m-2">
          <div className="col-4">
            <div className="card text-left">
              <img
                className="card-img-top"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt={this.state.manHinh}
              />
              <div className="card-body">
                <h4 className="card-title">
                  {this.state.sanPhamChiTiet.tenSP}
                </h4>
                <p className="card-text">{this.state.sanPhamChiTiet.manHinh}</p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table text-left">
              <thead>
                <tr>
                  <th>Thông số</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tên sản phẩm</td>
                  <td>{this.state.sanPhamChiTiet.tenSP}</td>
                </tr>
                <tr>
                  <td>Màn Hình</td>
                  <td>{this.state.sanPhamChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>camera trước</td>
                  <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>camera trước</td>
                  <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{this.state.sanPhamChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{this.state.sanPhamChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Modal sanPhamModal={this.state.sanPhamChiTiet}></Modal>
        
      </div>
    );
  }
}
