import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function ViewStaff(){
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
      <h3>View Staff</h3>
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
                  <div className="col-12 col-sm-3 pr-lg-0">
                    <label>Filter By Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-3 pr-lg-0">
                    <label>Email ID</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-3 pr-lg-0">
                    <label>Mobile</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-3 pr-lg-0">
                    <label>Status</label>
                    <select className="form-control">
                      <option>All</option>
                      <option>Active</option>
                      <option>Deactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <label>&nbsp;</label>
                <a className="btn btn-default submit sitebtn" href="#">
                  Submit
                </a>
              </div>
            </div>
          </div>
          {/* filter end */}
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
                  <th style={{ width: 100 }}>Staff Details</th>
                  <th style={{ width: "" }}>Username</th>
                  <th style={{ width: "" }}>Password</th>
                  <th style={{ width: "" }}>Commission</th>
                  <th style={{ width: 200 }}>About The Staff</th>
                  <th style={{ width: 100 }}>Leads</th>
                  <th style={{ width: 70 }}>Status</th>
                  <th style={{ width: 70 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
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
                    </div>
                  </td>
                  <td>9875984589</td>
                  <td>123456</td>
                  <td>2%</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet officiis itaque corrupti, veritatis, at temporibus.
                  </td>
                  <td>
                    <a
                      href="view-lead.html"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      <i className="fa fa-eye" /> View Leads
                    </a>
                  </td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-10"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-10"
                      />
                    </div>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="View Profile">
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
                    </div>
                  </td>
                  <td>9875984589</td>
                  <td>123456</td>
                  <td>2%</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet officiis itaque corrupti, veritatis, at temporibus.
                  </td>
                  <td>
                    <a
                      href="view-lead.html"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      <i className="fa fa-eye" /> View Leads
                    </a>
                  </td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-10"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-10"
                      />
                    </div>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="View Profile">
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
                    </div>
                  </td>
                  <td>9875984589</td>
                  <td>123456</td>
                  <td>2%</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet officiis itaque corrupti, veritatis, at temporibus.
                  </td>
                  <td>
                    <a
                      href="view-lead.html"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      <i className="fa fa-eye" /> View Leads
                    </a>
                  </td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-10"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-10"
                      />
                    </div>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="View Profile">
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
                  <td>4</td>
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
                    </div>
                  </td>
                  <td>9875984589</td>
                  <td>123456</td>
                  <td>2%</td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet officiis itaque corrupti, veritatis, at temporibus.
                  </td>
                  <td>
                    <a
                      href="view-lead.html"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      <i className="fa fa-eye" /> View Leads
                    </a>
                  </td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-10"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-10"
                      />
                    </div>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        <a href="#" className="" title="View Profile">
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