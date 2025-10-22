import React from "react";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import Sidebar from "../../../layout/Sidebar";

export default function ViewTestimonials(){
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
      <h3>View Testimonials &amp; Success Stories</h3>
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
      <h2> List</h2>
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
              id=""
              className="table table-striped table-bordered bulk_action mytable"
              style={{ width: "100%" }}
              cellPadding={0}
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th style={{ width: 20 }}>S.No</th>
                  <th style={{ width: "" }}>Testimonial Type</th>
                  <th style={{ width: "" }}>Title</th>
                  <th style={{ width: "" }}>Image/Video</th>
                  <th style={{ width: 300 }}>Description</th>
                  <th style={{ width: 120 }}>Status</th>
                  <th style={{ width: 100 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Video Testimonials</td>
                  <td>Uoodari &amp; Naveen</td>
                  <td />
                  <td />
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
                  <td>Success Stories</td>
                  <td>Shardha &amp; Kapil</td>
                  <td />
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae quaerat suscipit eligendi!
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
  
</div>

                    {/* page end */}
                  <Footer />

                  </div>
             </div>
    );
}