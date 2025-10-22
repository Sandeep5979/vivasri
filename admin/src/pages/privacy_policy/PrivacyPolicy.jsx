import React from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function PrivacyPolicy(){
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
      <h3>Privacy Policy</h3>
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
      <h2>Privacy Policy Entry</h2>
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
              <div className="col-12 col-sm-12 pr-lg-0 mb-3">
                <label>Add Privacy Policy</label>
                <textarea
                  className="form-control"
                  style={{ height: 500 }}
                  defaultValue={
                    "FCK Editor\n                                    "
                  }
                />
              </div>
              {/* <div class="col-12"></div>
                          <div class="col-12 col-sm-8 pr-lg-0">
                            <input type="checkbox" id="active">
                               <label for="active" class="form-label">Active/Deactive</label>
                          </div> */}
              <div className="col-12" />
              <div className="col-12 col-sm-12 pr-lg-0 text-right">
                <a href="#" className="btn sitebtn d-inline-block">
                  Update
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
                  <th style={{}}>Privacy Policy</th>
                  <th style={{ width: 70 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td />
                  <td className="p-0">
                    <ul className="actionlist">
                      <li></li>
                      <li></li>
                      <li>
                        <a href="#" className="" title="Delete">
                          <i className="fa fa-edit" />
                        </a>
                      </li>
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