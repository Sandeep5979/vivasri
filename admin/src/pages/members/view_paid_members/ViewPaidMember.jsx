import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function ViewPaidMember(){
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
      <h3>View Paid Members</h3>
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
                </li> */}
        <li>
          <a className="close-link">
            <i className="fa fa-close" />
          </a>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
    <div className="x_content">
      <div className="row">
        <div className="col-sm-12">
          {/* filter start */}
          <div className="filtercont">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-12 col-sm-4 pr-lg-0">
                    <label>Filter By Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>Filter By Gender</label>
                    <select className="form-control">
                      <option>All</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>Status</label>
                    <select className="form-control">
                      <option>All</option>
                      <option>Paid</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>&nbsp;</label>
                    <a className="btn btn-default submit sitebtn" href="#">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
          {/* filter end */}
          <div className="card-box table-responsive nolengthtable">
            <table
              id="datatable-checkbox"
              className="table table-striped table-bordered bulk_action mytable"
              style={{ width: "100%" }}
              cellPadding={0}
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th style={{ width: 80 }}>P ID</th>
                  <th style={{ width: 120 }}>Member Details</th>
                  <th style={{ width: 100 }}>Membership Plan</th>
                  <th style={{ width: 70 }}>Added By</th>
                  <th style={{ width: 50 }}>Status</th>
                  <th style={{ width: 70 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="view-profile.html">V40504</a>
                  </td>
                  <td>
                    <div className="userdet">
                      <div>
                        <strong>
                          <i className="fa fa-user" /> Santosh Kumar
                        </strong>
                      </div>
                      <div>
                        <i className="fa fa-envelope" /> santosh@gmail.com
                      </div>
                      <div>
                        <i className="fa fa-mobile" /> 9875984589
                      </div>
                      <div>
                        <i className="fa fa-calendar mt-1" /> 24 Yrs
                      </div>
                      <div>
                        <i className="fa fa-mars mt-1" aria-hidden="true" />{" "}
                        Male
                      </div>
                      {/* <div>
                                              <i class="fa fa-venus mt-1" aria-hidden="true"></i> Female
                                          </div> */}
                    </div>
                  </td>
                  <td>Gold</td>
                  <td>Admin</td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-11"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-11"
                      />
                    </div>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a
                          href="#"
                          className=""
                          data-toggle="modal"
                          data-target="#basicModal"
                          title="Quick View"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="" title="Delete">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="view-profile.html"
                          className=""
                          title="View Profile"
                        >
                          <i className="fa fa-user" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

                    {/* page end */}
                  <Footer />

                  </div>
             </div>
    );
}