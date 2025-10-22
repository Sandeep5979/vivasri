import React from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function AddTestimonials(){
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
      <h3>Add Testimonials &amp; Success Stories</h3>
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
      <h2>Entry Form</h2>
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
              <div>
                {/* start */}
                <ul className="nav nav-tabs bar_tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Video Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Success Stories
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="col-12 col-sm-12 pr-lg-0 mb-3">
                      <label>Testimonial Title </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 col-sm-12 pr-lg-0 mb-3">
                      <label>Testimonial Video </label>
                      <input type="file" className="form-control" />
                      <span>Video size should not to be more than 4MB</span>
                    </div>
                    <div className="col-12" />
                    <div className="col-12 col-sm-12 pr-lg-0">
                      <input type="checkbox" id="active" />
                      <label htmlFor="active" className="form-label">
                        Active/Deactive
                      </label>
                    </div>
                    <div className="col-12" />
                    <div className="col-12 col-sm-12 pr-lg-0 text-right">
                      <a href="#" className="btn sitebtn d-inline-block">
                        Submit
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="col-12 col-sm-10 pr-lg-0 mb-3">
                      <label>Success Stories Title </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 col-sm-10 pr-lg-0 mb-3">
                      <label>Success Stories Image </label>
                      <input type="file" className="form-control" />
                      <span>
                        Image Size Must be maximum (width: 400px; height:
                        400px;)
                      </span>
                    </div>
                    <div className="col-12" />
                    <div className="col-12 col-sm-10 pr-lg-0">
                      <input type="checkbox" id="active" />
                      <label htmlFor="active" className="form-label">
                        Active/Deactive
                      </label>
                    </div>
                    <div className="col-12" />
                    <div className="col-12 col-sm-10 pr-lg-0 text-right">
                      <a href="#" className="btn sitebtn d-inline-block">
                        Submit
                      </a>
                    </div>
                  </div>
                  {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                      xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                                          booth letterpress, commodo enim craft beer mlkshk 
                                    </div> */}
                </div>
                {/* end */}
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