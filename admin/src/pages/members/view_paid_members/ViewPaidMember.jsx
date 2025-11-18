import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ageCalculate } from "../../../utils/utils.js";

export default function ViewPaidMember() {
  const pageTitle = "Member List";

  //const [active, setActive] = useState(true);
  const { register, handleSubmit } = useForm();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [searchVal, setSearchVal] = useState({});
  const PAGE_SIZE = 25;
  const API_URL = process.env.REACT_APP_BASE_URL_API || "";
  const token = localStorage.getItem("adminToken");

  const fetchUserList = async (search = null, page = 1) => {
    setLoading(true);

    try {
      const url = `${API_URL.replace(
        /\/$/,
        ""
      )}/api/admin/user-paid-list?page=${page}&limit=${PAGE_SIZE}${search
        ? `&name=${encodeURIComponent(
            search.name || ""
          )}&mobile=${encodeURIComponent(search.mobile || "")}&gender=${encodeURIComponent(search.gender || "")}&status=${encodeURIComponent(search.status || "")}`
        : ""}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const result = await response.json();
      if (result.status) {
        //console.log(result.data)
        setLoading(false);
        setUserList(result.data);
        setTotalPages(result.totalPages || 1);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching member:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchUserList(null, page);
    
    },[page]);

  // search submit handler
  const onSubmit = search => {
    fetchUserList(search);
    setSearchVal(search);
  };

  const statusChange = async (e, id, status) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to change status?")) return;
    const url = `${API_URL.replace(
      /\/$/,
      ""
    )}/api/admin/user-list/update/${id}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        status: status === "Active" ? "Deactive" : "Active"
      })
    });

    const result = await response.json();
    if (result.status) {
      fetchUserList(searchVal, page);
    }
  };

  const deleteUser = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete user?")) return;
    const url = `${API_URL.replace(
      /\/$/,
      ""
    )}/api/admin/user-list/delete/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }  
    });

    const result = await response.json();
    if (result.status) {
      fetchUserList(searchVal, page);
    }
  };

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
              <ul
                className="nav navbar-right panel_toolbox"
                style={{ minWidth: 1 }}
              >
                <li>
                  <Link to="#" className="collapse-link">
                    <i className="fa fa-chevron-up" />
                  </Link>
                </li>
                {/* <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Settings 1</a>
                      <a class="dropdown-item" href="#">Settings 2</a>
                   </div>
                </li> */}
                <li>
                  <Link to="#" className="close-link">
                    <i className="fa fa-close" />
                  </Link>
                </li>
              </ul>
              <div className="clearfix" />
            </div>

            <div className="x_content">
              <div className="row">
                <div className="col-sm-12">
                  {/* filter start */}
                  <div className="filtercont">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-lg-9">
                          <div className="row">
                            <div className="col-12 col-sm-4 pr-lg-0">
                              <label>Filter By Name</label>
                              <input
                                type="text"
                                {...register("name")}
                                className="form-control"
                              />
                            </div>
                            
                            <div className="col-12 col-sm-2 pr-lg-0">
                            <label>Gender</label>
                            <select className="form-control" {...register("gender")}>
                              <option value="">All</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-2 pr-lg-0">
                            <label>Status</label>
                            <select className="form-control" {...register("status")}>
                              <option value="">All</option>
                              <option value="Active">Active</option>
                              <option value="Deactive">Deactive</option>
                            </select>
                          </div>

                            <div className="col-12 col-sm-4 pr-lg-0">
                              <label>&nbsp;</label>
                              <button className="btn btn-default submit sitebtn">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
                          <th style={{ width: 50 }}>S.No.</th>
                          <th style={{ width: 80 }}>P ID</th>
                          <th style={{ width: 120 }}>Member Details</th>
                          <th style={{ width: 100 }}>Membership Plan</th>
                          <th style={{ width: 70 }}>Managed By</th>
                          <th style={{ width: 50 }}>Status</th>
                          <th style={{ width: 70 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList.length > 0
                          ? userList.map((list, index) =>
                              <tr key={list._id}>
                                <td>
                                  {(page - 1) * PAGE_SIZE + index + 1}
                                </td>
                                <td>
                                  <Link to="#">{list.profile_id}</Link>
                                </td>
                                <td>
                                  <div className="userdet">
                                    <div>
                                      <strong>
                                        <i className="fa fa-user" /> {list.name}
                                      </strong>
                                    </div>
                                    {list.email && 
                                    <div>
                                      <i className="fa fa-envelope" />{" "}
                                      {list.email}
                                    </div>
                                    }
                                    {list.mobile && 
                                    <div>
                                      <i className="fa fa-mobile" /> {list.mobile}
                                    </div>
                                    }
                                    {list.dob && 
                                    <div>
                                      <i className="fa fa-calendar mt-1" /> {list.dob ? `${ageCalculate(list.dob)} yrs.`:''}
                                    </div>
                                      }
                                    {list.gender && list.gender === 'Male' && 
                                    <div>
                                      <i
                                        className="fa fa-mars mt-1"
                                        aria-hidden="true"
                                      />{" "}
                                      {list.gender}
                                    </div>
                                    }
                                    {list.gender && list.gender === 'Female' && 
                                    <div>
                                      <i
                                        className="fa fa-venus mt-1"
                                        aria-hidden="true"
                                      />{" "}
                                      {list.gender}
                                    </div>
                                    }
                                    
                                  </div>
                                </td>
                                <td>{list.membershipPlan?.name}</td>
                                <td>{list.partner_managed_by}</td>
                                <td>
                                  <div className="checkbox-wrapper-8">
                                    <input
                                      className="tgl tgl-skewed"
                                      id={`cb3-${list._id}`}
                                      type="checkbox"
                                      checked={
                                        list.status === "Active" ? true : false
                                      }
                                      onClick={e =>
                                      statusChange(e, list._id, list.status)}
                                    />
                                    <label
                                      className="tgl-btn"
                                      data-tg-off="Deactive"
                                      data-tg-on="Active"
                                      htmlFor={`cb3-${list._id}`}
                                    />
                                  </div>
                                </td>
                                <td className="p-0">
                                  <ul className="actionlist">
                                    <li>&nbsp;</li>
                                    <li>
                                      <Link
                                        to="#"
                                        className=""
                                        title="Remove"
                                        onClick={e => deleteUser(e, list._id)}
                                      >
                                        <i className="fa fa-trash" />
                                      </Link>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            )
                          : <tr>
                              <td colSpan="5" className="text-center">
                                {loading ? "Loading..." : "No member found."}
                              </td>
                            </tr>}
                      </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="mt-3">
                      {Array.from({ length: totalPages }, (_, i) =>
                        <button
                          key={i}
                          className={`btn btn-sm mx-1 ${page === i + 1
                            ? "btn-primary"
                            : "btn-light"}`}
                          onClick={() => setPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      )}
                    </div>
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
