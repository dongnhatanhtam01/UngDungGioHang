import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: "1000px" }}
        >
          <div
            className="modal-content"
            style={{ maxWidth: "1000px", width: "1000px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img
                            src={spGH.hinhAnh}
                            alt="hinhANh"
                            style={{ height: "200px", maxWidth: "100%" }}
                          ></img>
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              tangGiamSoLuong(spGH.maSP, false);
                            }}
                          >
                            -
                          </button>
                          {parseInt(spGH.soLuong)}

                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              tangGiamSoLuong(spGH.maSP, true);
                            }}
                          >
                            +
                          </button>
                        </td>

                        <td>{(spGH.giaBan).toLocaleString()}</td>
                        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              xoaGioHang(spGH.maSP);
                            }}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tổng tiền</td>
                    <td>
                      {this.props.gioHang.reduce((tongTien, sp, index) => {
                        return (tongTien += sp.soLuong * sp.giaBan);
                      },0).toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
