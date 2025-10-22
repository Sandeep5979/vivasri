import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function AddCoupon(){
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
      <h3>Add Plan</h3>
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
      <h2>Entry</h2>
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
          {/* filter start */}
          <div className="filtercont">
            <div className="row">
              <div className="col-12 col-sm-3 mb-3">
                <label>Coupon Name</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col-12 col-sm-3 mb-3">
                <label>Coupon Type</label>
                <select className="form-select">
                  <option value="">Select</option>
                  <option value="">Discount</option>
                  <option value="">Percentage</option>
                </select>
              </div>
              <div className="col-12 col-sm-3 mb-3">
                <label>Discount</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col-12" />
              <div className="col-12 col-sm-4 mb-3">
                <label>Start Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-sm-5 mb-3">
                <label>End Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12" />
              <div className="col-12 col-sm-9 mb-3">
                <label>Coupon Details</label>
                <textarea className="form-control" defaultValue={""} />
              </div>
              <div className="col-12" />
              <div className="col-12 col-sm-9 text-right">
                <a href="#" className="btn sitebtn d-inline-block">
                  Submit
                </a>
              </div>
            </div>
          </div>
          {/* filter end */}
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