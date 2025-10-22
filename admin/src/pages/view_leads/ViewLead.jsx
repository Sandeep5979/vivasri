import React from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function ViewLead(){
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
      <h3>View Lead</h3>
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
                    <label>From Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-3 pr-lg-0">
                    <label>To Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-2 pr-lg-0">
                    <label>Gender</label>
                    <select className="form-control">
                      <option>All</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
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
              {/* <div class="col-lg-2">
                             <label>&nbsp;</label>
                             <a class="btn btn-default submit sitebtn" href="#">Submit</a>
                         </div> */}
            </div>
          </div>
          {/* filter end */}
          <div className="table-responsive">
            <table
              id="datatable-checkbox"
              className="table table-striped table-bordered bulk_action mytable dataTable no-footer"
              style={{ width: "100%" }}
              cellPadding={0}
              cellSpacing={0}
              role="grid"
              aria-describedby="datatable-checkbox_info"
            >
              <thead>
                <tr role="row">
                  <th style={{ width: 84 }}>Lead ID</th>
                  <th style={{ width: 179 }}>Client</th>
                  <th style={{}}>Staff</th>
                  <th style={{ width: 67 }}>Date</th>
                  <th style={{ width: 144 }}>Follow Up</th>
                  <th style={{ width: 80 }}>Action</th>
                  <th style={{ width: 120 }}>Status</th>
                  {/* <th style="width: 129px;">Add Details</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="">#V40504</a>
                  </td>
                  <td className="sorting_1">
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
                  <td>Suraj</td>
                  <td>20 Jan 2025</td>
                  <td>
                    <a
                      href="#"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                      data-toggle="modal"
                      data-target="#remarkModal"
                      title="View Follow Up"
                    >
                      <i className="fa fa-eye" aria-hidden="true" /> View
                    </a>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        {/* <a href="#" class="" data-toggle="modal" data-target="#basicModal" title="Quick View">
                                                  <i class="fa fa-eye"></i>
                                                </a> */}
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
                  <td>
                    <span className="statusactive">Paid</span>
                  </td>
                  {/* <td>
                                         <a href="add-member.html" class="sitebtn text-white text-center px-1 py-0 mb-2" style="font-size: 12px; text-decoration: none; display: inline-block;">
                                           <i class="fa fa-plus"></i> Add Details
                                        </a>
                                    </td> */}
                </tr>
                <tr>
                  <td>
                    <a href="">#V40504</a>
                  </td>
                  <td className="sorting_1">
                    <div className="userdet">
                      <div>
                        <strong>
                          <i className="fa fa-user" /> Manisha
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
                        <i className="fa fa-venus mt-1" aria-hidden="true" />{" "}
                        Female
                      </div>
                    </div>
                  </td>
                  <td>Suraj</td>
                  <td>20 Jan 2025</td>
                  <td>
                    <a
                      href="#"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                      data-toggle="modal"
                      data-target="#remarkModal"
                      title="View Follow Up"
                    >
                      <i className="fa fa-eye" aria-hidden="true" /> View
                    </a>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        {/* <a href="#" class="" data-toggle="modal" data-target="#basicModal" title="Quick View">
                                                  <i class="fa fa-eye"></i>
                                                </a> */}
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
                  <td>
                    <span className="statusprogress">Pending</span>
                  </td>
                  {/* <td>
                                         <a href="add-member.html" class="sitebtn text-white text-center px-1 py-0 mb-2" style="font-size: 12px; text-decoration: none; display: inline-block;">
                                           <i class="fa fa-plus"></i> Add Details
                                        </a>
                                    </td> */}
                </tr>
                <tr>
                  <td>
                    <a href="">#V40504</a>
                  </td>
                  <td className="sorting_1">
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
                  <td>Suraj</td>
                  <td>20 Jan 2025</td>
                  <td>
                    <a
                      href="#"
                      className="sitebtn text-white text-center px-1 py-0 mb-2"
                      style={{
                        fontSize: 12,
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                      data-toggle="modal"
                      data-target="#remarkModal"
                      title="View Follow Up"
                    >
                      <i className="fa fa-eye" aria-hidden="true" /> View
                    </a>
                  </td>
                  <td className="p-0">
                    <ul className="actionlist">
                      <li>
                        {/* <a href="#" class="" data-toggle="modal" data-target="#basicModal" title="Quick View">
                                                  <i class="fa fa-eye"></i>
                                                </a> */}
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
                  <td>
                    <span className="statuscancel">Not Interested</span>
                  </td>
                  {/* <td>
                                         <a href="add-member.html" class="sitebtn text-white text-center px-1 py-0 mb-2" style="font-size: 12px; text-decoration: none; display: inline-block;">
                                           <i class="fa fa-plus"></i> Add Details
                                        </a>
                                    </td> */}
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