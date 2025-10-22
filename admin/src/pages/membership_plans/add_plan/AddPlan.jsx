import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function AddPlan(){
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
      <h2>Plan Entry</h2>
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
              <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                <label>Select Plans</label>
                <select name="" className="form-select">
                  <option value="">Select</option>
                  <option value="">Free</option>
                  <option value="">Gold</option>
                  <option value="">Platinum</option>
                </select>
              </div>
              <div className="col-12" />
              <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                <label>Plan Price</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              {/* <div class="col-12 col-sm-6 pr-lg-0 mb-3">
                              <label>Plan Feature Point</label>
                              <div class="d-flex align-items-center">
                                  <input type="text" sclass="form-control" placeholder="" class="col-lg-8 mr-lg-2">
                                  <a href="#" style="color: #17af39;"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add More</a>
                              </div>                                    
                          </div>
                          <div class="col-12"></div>
                          <div class="col-12 col-sm-6 pr-lg-0 mb-3">
                              <label>Plan Feature Point</label>
                              <div class="d-flex align-items-center">
                                  <input type="text" sclass="form-control" placeholder="" class="col-lg-8 mr-lg-2">
                                  <a href="#" style="color: #ff0000;"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>
                              </div>                                    
                          </div> */}
              <div className="col-12" />
              <div className="col-12 col-sm-4 pr-lg-0 text-right">
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