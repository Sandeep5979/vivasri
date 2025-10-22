import React from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function TransactionHistory(){
    return (
        <div class="container body">
                <div class="main_container">
                 <Sidebar />
                 <Header />
                    {/* page */}
                        <div className="right_col" role="main">
  {/* top tiles */}
  <div className="page-title">
    <div className="title_left">
      <h3>Transaction History</h3>
    </div>
    {/* <div class="title_right">
          <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div> */}
  </div>
  <div className="clearfix" />
  {/* /top tiles */}
  {/* body card start */}
  <div className="x_panel">
    <div className="x_title">
      <h2>List</h2>
      <ul className="nav navbar-right panel_toolbox" style={{ minWidth: 1 }}>
        <li>
          <a className="collapse-link">
            <i className="fa fa-chevron-up" />
          </a>
        </li>
        {/* <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Settings 1</a>
                      <a class="dropdown-item" href="#">Settings 2</a>
                   </div>
                </li>
                <li><a class="close-link"><i class="fa fa-close"></i></a>
                </li> */}
      </ul>
      <div className="clearfix" />
    </div>
    <div className="x_content">
      <div className="row">
        <div className="col-sm-12">
          <div className="filtercont">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>Search By</label>
                    <select className="form-control">
                      <option>Select</option>
                      <option>Member Id</option>
                      <option>Tansaction Id</option>
                      <option>Tansaction Date</option>
                      <option>Invoice Number</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-4 pr-lg-0">
                    <label>Search Text</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>From Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>To Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-2">
                    <label>&nbsp;</label>
                    <a
                      className="btn btn-default submit sitebtn px-0 text-center"
                      href="#"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-right">
                <hr />
              </div>
              <div className="col-lg-12 text-right">
                <div>
                  <a
                    className="btn btn-default submit sitebtn"
                    style={{
                      backgroundColor: "#2e9337",
                      borderColor: "#2e9337",
                      display: "inline-block"
                    }}
                    href="#"
                  >
                    {" "}
                    <i className="fa fa-file-excel-o" />
                    &nbsp;&nbsp; Export To Excel
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* filter end */}
          <div className="table-responsive">
            <table className="table mytable table-bordered table-hover">
              <thead>
                <tr>
                  {/*<th width="5"><input type="checkbox" name=""></th>*/}
                  <th>S.N</th>
                  <th>Member Id</th>
                  <th>Member Name</th>
                  <th>Transaction Id</th>
                  <th>Invoice Number</th>
                  <th>Transaction Date</th>
                  <th>Amount</th>
                  <th>Subscription Expiry Date.</th>
                  <th>Coupon Code</th>
                  <th>Status</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a
                      href="https://devoteematrimony.beelink.bio/admin/member-profile/DM41804"
                      target="_blank"
                    >
                      DM41804
                    </a>
                  </td>
                  <td>
                    <p>Riya Kasaudhan</p>
                  </td>
                  <td></td>
                  <td nowrap="">
                    <p />
                  </td>
                  <td>
                    <p>05/Aug/2025</p>
                  </td>
                  <td>₹0.00</td>
                  <td>03/Nov/2025</td>
                  <td>FREE100</td>
                  <td>
                    <div
                      style={{
                        minWidth: 70,
                        display: "flex",
                        color: "#fff",
                        padding: "5px 10px",
                        justifyContent: "center",
                        borderRadius: 10,
                        background: "#488e48"
                      }}
                    >
                      Success
                    </div>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://devoteematrimony.beelink.bio/admin/invoice/6891f0f63383f/YWRtaW4%3D"
                    >
                      <button style={{ cursor: "pointer" }}> Print</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a
                      href="https://devoteematrimony.beelink.bio/admin/member-profile/DM41807"
                      target="_blank"
                    >
                      DM41807
                    </a>
                  </td>
                  <td>
                    <p>geeta rani</p>
                  </td>
                  <td></td>
                  <td nowrap="">
                    <p />
                  </td>
                  <td>
                    <p>05/Aug/2025</p>
                  </td>
                  <td>₹0.00</td>
                  <td>03/Nov/2025</td>
                  <td>FREE100</td>
                  <td>
                    <div
                      style={{
                        minWidth: 70,
                        display: "flex",
                        color: "#fff",
                        padding: "5px 10px",
                        justifyContent: "center",
                        borderRadius: 10,
                        background: "#488e48"
                      }}
                    >
                      Success
                    </div>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://devoteematrimony.beelink.bio/admin/invoice/6891f0c4cf48d/YWRtaW4%3D"
                    >
                      <button style={{ cursor: "pointer" }}> Print</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <a
                      href="https://devoteematrimony.beelink.bio/admin/member-profile/DM41816"
                      target="_blank"
                    >
                      DM41816
                    </a>
                  </td>
                  <td>
                    <p>monika kumari</p>
                  </td>
                  <td></td>
                  <td nowrap="">
                    <p />
                  </td>
                  <td>
                    <p>05/Aug/2025</p>
                  </td>
                  <td>₹0.00</td>
                  <td>03/Nov/2025</td>
                  <td>FREE100</td>
                  <td>
                    <div
                      style={{
                        minWidth: 70,
                        display: "flex",
                        color: "#fff",
                        padding: "5px 10px",
                        justifyContent: "center",
                        borderRadius: 10,
                        background: "#488e48"
                      }}
                    >
                      Success
                    </div>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://devoteematrimony.beelink.bio/admin/invoice/6891f09ee256d/YWRtaW4%3D"
                    >
                      <button style={{ cursor: "pointer" }}> Print</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <a
                      href="https://devoteematrimony.beelink.bio/admin/member-profile/DM41842"
                      target="_blank"
                    >
                      DM41842
                    </a>
                  </td>
                  <td>
                    <p>JHARNA SAXENA</p>
                  </td>
                  <td></td>
                  <td nowrap="">
                    <p />
                  </td>
                  <td>
                    <p>05/Aug/2025</p>
                  </td>
                  <td>₹0.00</td>
                  <td>03/Nov/2025</td>
                  <td>FREE100</td>
                  <td>
                    <div
                      style={{
                        minWidth: 70,
                        display: "flex",
                        color: "#fff",
                        padding: "5px 10px",
                        justifyContent: "center",
                        borderRadius: 10,
                        background: "#488e48"
                      }}
                    >
                      Success
                    </div>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://devoteematrimony.beelink.bio/admin/invoice/6891f05a3f06f/YWRtaW4%3D"
                    >
                      <button style={{ cursor: "pointer" }}> Print</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <a
                      href="https://devoteematrimony.beelink.bio/admin/member-profile/DM41855"
                      target="_blank"
                    >
                      DM41855
                    </a>
                  </td>
                  <td>
                    <p>Neha Maurya</p>
                  </td>
                  <td></td>
                  <td nowrap="">
                    <p />
                  </td>
                  <td>
                    <p>05/Aug/2025</p>
                  </td>
                  <td>₹0.00</td>
                  <td>03/Nov/2025</td>
                  <td>FREE100</td>
                  <td>
                    <div
                      style={{
                        minWidth: 70,
                        display: "flex",
                        color: "#fff",
                        padding: "5px 10px",
                        justifyContent: "center",
                        borderRadius: 10,
                        background: "#488e48"
                      }}
                    >
                      Success
                    </div>
                  </td>
                  <td>
                    <a
                      target="_blank"
                      href="https://devoteematrimony.beelink.bio/admin/invoice/6891f02d20bb3/YWRtaW4%3D"
                    >
                      <button style={{ cursor: "pointer" }}> Print</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* bod card end */}
</div>

                    {/* page end */}
                  <Footer />

                  </div>
             </div>
    );
}