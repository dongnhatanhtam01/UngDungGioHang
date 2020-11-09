import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { dt, handlerXemChiTiet } = this.props;
    return (
      <div className="card col-4 text-dark text-left bg-white">
        <img
          className="card-img-top"
          src={dt.hinhAnh}
          alt={dt.tenSP}
          style={{
            width: "100%",
            maxWidth: "100%",
            margin: "1rem",
            height: "100%",
          }}
        />
        <div className="card-body">
          <h4 className="card-title">{dt.tenSP}</h4>
          <p className="card-text">
            {dt.manHinh.length > 20
              ? dt.manHinh.substr(0, 20) + `...`
              : dt.manHinh}
          </p>
          <div className="btn-group ">
            <button
            data-toggle="modal"
            data-target="#modelId"
              className="m-1 btn btn-success"
              onClick={() => handlerXemChiTiet(dt)}
            >
              Chi Tiết
            </button>
            <button className="m-1 btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
