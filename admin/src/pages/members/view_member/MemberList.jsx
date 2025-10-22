import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function MemberList(){
    const pageTitle = "Member List";
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
      <h3>New Registrations</h3>
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
      <h2>New Member List</h2>
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
                  <div className="col-12 col-sm-4 pr-lg-0">
                    <label>Email ID</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-4 pr-lg-0">
                    <label>Mobile</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <label>&nbsp;</label>
                <a className="btn btn-default submit sitebtn" href="#">
                  Submit
                </a>
              </div>
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
                  <th style={{ width: 30 }}>S.No</th>
                  <th style={{ width: 120 }}>Name</th>
                  <th style={{ width: 100 }}>Email</th>
                  <th style={{ width: 30 }}>Age</th>
                  <th style={{ width: 30 }}>Gender</th>
                  <th style={{ width: 40 }}>Mobile</th>
                  <th style={{ width: 80 }}>Location</th>
                  <th style={{ width: 80 }}>Status</th>
                  <th style={{ width: 30 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="images/boy-icon.png" alt="girl-icon" /> Anant
                    Sharma
                  </td>
                  <td>tinkaldds8@gmail.com</td>
                  <td>24 Yrs.</td>
                  <td>Male</td>
                  <td>95*64*61*9</td>
                  <td>Mirzapur</td>
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
                        <a href="#" className="" title="Remove">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <img src="images/girl-icon.png" alt="girl-icon" /> Tinkal
                  </td>
                  <td>tinkaldds8@gmail.com</td>
                  <td>24 Yrs.</td>
                  <td>Female</td>
                  <td>95*64*61*9</td>
                  <td>Mirzapur</td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-12"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-12"
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
                        <a href="#" className="" title="Remove">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <img src="images/boy-icon.png" alt="girl-icon" /> Praveen
                    Singh Duggal
                  </td>
                  <td>praveen@gail.com</td>
                  <td>24 Yrs.</td>
                  <td>Male</td>
                  <td>95*64*61*9</td>
                  <td>Mirzapur</td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-13"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-13"
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
                        <a href="#" className="" title="Remove">
                          <i className="fa fa-trash" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <img src="images/girl-icon.png" alt="girl-icon" /> Komal
                    Sharma
                  </td>
                  <td>tinkaldds8@gmail.com</td>
                  <td>24 Yrs.</td>
                  <td>Female</td>
                  <td>95*64*61*9</td>
                  <td>Mirzapur</td>
                  <td>
                    <div className="checkbox-wrapper-8">
                      <input
                        className="tgl tgl-skewed"
                        id="cb3-14"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        className="tgl-btn"
                        data-tg-off="Inactive"
                        data-tg-on="Active"
                        htmlFor="cb3-14"
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
                        <a href="#" className="" title="Remove">
                          <i className="fa fa-trash" />
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
  {/* bod card end */}
</div>

                    {/* page end */}
                  <Footer />

                  </div>
             </div>
    );
}