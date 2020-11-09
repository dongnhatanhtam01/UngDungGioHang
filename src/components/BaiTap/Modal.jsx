import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" style={{maxWidth: '1300px'}}>
            <div className="modal-content" style={{width: '1300px'}}>
              <div className="modal-header">
                <h5 className="modal-title">
                  Giỏ hàng - {this.props.sanPhamModal.tenSP}
                </h5>
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
                <table class="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{this.props.sanPhamModal.maSP}</td>
                      <td ><img src={this.props.sanPhamModal.hinhAnh} style={{width:'100px'}} alt="asds"/></td>
                      <td >{this.props.sanPhamModal.tenSP}</td>
                      <td >
                          <button className="btn btn-danger">-</button>1<button className="btn btn-primary">+</button></td>
                      <td >{this.props.sanPhamModal.giaBan}</td>
                      <td > {this.props.sanPhamModal.giaBan}</td>
                      <td > <button className="btn btn-danger">Xóa</button></td>
                    </tr>
                    
                  </tbody>
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
      </div>
    );
  }
}
