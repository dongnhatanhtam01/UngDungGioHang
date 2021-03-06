import React, { Component } from "react";

export default class CartModal extends Component {
  render() {
    const { gioHang, deleteCard, upDown } = this.props;
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
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "700px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart Array</h5>
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
                      <td>code</td>
                      <td>Image</td>
                      <td>Name</td>
                      <td>Number</td>
                      <td>unit</td>
                      <td>Cost</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGioHang, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{spGioHang.maSP}</td>
                            <td>
                              <img
                                src={spGioHang.hinhAnh}
                                alt="adsd"
                                width={50}
                                height={75}
                              />
                            </td>
                            <td>{spGioHang.tenSP}</td>
                            <td>
                              <button onClick={()=> upDown(spGioHang.maSP, false)}>-</button>
                              {spGioHang.soLuong}
                              <button onClick={()=> upDown(spGioHang.maSP, true)}>+</button>
                            </td>
                            <td>{spGioHang.giaBan}</td>
                            <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
                            <td>
                              <button
                                className="btn-danger"
                                onClick={() => deleteCard(spGioHang)}
                              >
                                XÓa
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td  colSpan="5"></td>
                      <td>Tong Tien: </td>
                      <td>
                        {gioHang.reduce((tongTien, sp, index)=>{
                          return tongTien+=(sp.soLuong*sp.giaBan);
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
      </div>
    );
  }
}
