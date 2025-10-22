import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function ViewCoupon(){
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
      <h3>View Plan</h3>
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
          <div className="table-responsive">
            <table
              id="datatable-checkbox"
              className="table table-striped table-bordered bulk_action mytable"
              style={{ width: "100%" }}
              cellPadding={0}
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th style={{ width: 20 }}>S.No</th>
                  <th style={{ width: 200 }}>Coupon Name</th>
                  <th style={{ width: "" }}>Coupon Type</th>
                  <th style={{ width: "" }}>Discount</th>
                  <th style={{ width: 80 }}>Start Date</th>
                  <th style={{ width: 80 }}>End Date</th>
                  <th style={{ width: 150 }}>Coupon Details</th>
                  <th style={{ width: 70 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Diwali Discount</td>
                  <td>Discount</td>
                  <td>₹0.00</td>
                  <td>24 Oct 25</td>
                  <td>28 Oct 25</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident nemo, ullam vel ex. Ipsam minus cum nemo mollitia
                    in quia quidem corporis cupiditate error aliquid eos commodi
                    earum doloribus, et.
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="Edit">
                          <i className="fa fa-edit" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="" title="Delete">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Diwali Discount</td>
                  <td>Discount</td>
                  <td>₹0.00</td>
                  <td>24 Oct 25</td>
                  <td>28 Oct 25</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident nemo, ullam vel ex. Ipsam minus cum nemo mollitia
                    in quia quidem corporis cupiditate error aliquid eos commodi
                    earum doloribus, et.
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="Edit">
                          <i className="fa fa-edit" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="" title="Delete">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Diwali Discount</td>
                  <td>Discount</td>
                  <td>₹0.00</td>
                  <td>24 Oct 25</td>
                  <td>28 Oct 25</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident nemo, ullam vel ex. Ipsam minus cum nemo mollitia
                    in quia quidem corporis cupiditate error aliquid eos commodi
                    earum doloribus, et.
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="Edit">
                          <i className="fa fa-edit" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="" title="Delete">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                      <li></li>
                    </ul>
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