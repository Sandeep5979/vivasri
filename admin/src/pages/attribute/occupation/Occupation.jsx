import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Occupation() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem("adminToken");

  // Religion list state
  const [occupations, setOccupation] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [listLoading, setListLoading] = useState(false);


  const PAGE_SIZE = 10;

  const API_URL = process.env.REACT_APP_BASE_URL_API || ""; // make sure no trailing slash

  const fetchOccupations = async (pageNumber = 1) => {
    setListLoading(true);

    try {
      // Ensure no double slash
      const url = `${API_URL.replace(/\/$/, "")}/api/admin/occupation?page=${pageNumber}&limit=${PAGE_SIZE}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (response.ok) {
        setOccupation(result.data); // assuming result.data contains the list
        setTotalPages(result.totalPages || 1); // assuming result.total has total items
      } else {
        console.error(result.message || "Failed to fetch occupation.");
      }
    } catch (err) {
      console.error("Error fetching occupation:", err);
    } finally {
      setListLoading(false);
    }
  };


  useEffect(() => {
    fetchOccupations(page);
  }, [page]);

  // form submit
  const onSubmit = async (data) => {
    setSuccess("");
    setLoading(true);

    try {

      const url = editId
                  ? `${API_URL.replace(/\/$/, "")}/api/admin/occupation/update/${editId}`
                  : `${API_URL.replace(/\/$/, "")}/api/admin/occupation/create`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: data.name.trim(),
          status: data.isActive ? 'Active' : 'Deactive',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Occupation added successfully!");
        reset(); // clear form
        fetchOccupations(page);
      } else {
        setSuccess(result.message || "Failed to add Occupation.");
      }
    } catch (err) {
      console.error("Error:", err);
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Edit religion
  const handleEdit = (occupation) => {
    setValue("name", occupation.name);
    setValue("isActive", occupation.status === "Active");
    setEditId(occupation._id); // store id for update
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete religion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this occupation?")) return;
    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/admin/occupation/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Occupation deleted successfully!");
        fetchOccupations(page);
      } else {
        setSuccess(result.message || "Failed to delete occupation.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
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
              <h3>Occupation</h3>
            </div>

          </div>
          <div className="clearfix" />
          {/* /top tiles */}
          {/* body card start */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Occupation Entry</h2>
              <ul className="nav navbar-right panel_toolbox" style={{ minWidth: 1 }}>
                <li>
                  <a className="collapse-link">
                    <i className="fa fa-chevron-up" />
                  </a>
                </li>

              </ul>
              <div className="clearfix" />
            </div>
            <div className="x_content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-sm-12">
                    {/* filter start */}
                    <div className="filtercont">
                      <div className="row">
                        <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                          <label>Enter Occupation</label>
                          <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            {...register("name", { required: "Please enter occupation name" })}
                          />
                          {errors.name && (
                            <div className="text-danger mt-1">{errors.name.message}</div>
                          )}
                          
                        </div>
                        <div className="col-12" />
                        <div className="col-12 col-sm-4 pr-lg-0">
                          <input type="checkbox" id="active" {...register("isActive")} />
                          <label htmlFor="active" className="form-label">
                            Active/Deactive
                          </label>
                        </div>
                        <div className="col-12" />
                        <div className="col-12 col-sm-4 pr-lg-0 text-right">
                          <button type="submit" className="btn sitebtn" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                          </button>
                          {success && <div className="text-success mt-1">{success}</div>}
                        </div>
                      </div>
                    </div>
                    {/* filter end */}
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* bod card end */}
          {/* body card start */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Occupation List</h2>
              <ul className="nav navbar-right panel_toolbox" style={{ minWidth: 1 }}>
                <li>
                  <a className="collapse-link">
                    <i className="fa fa-chevron-up" />
                  </a>
                </li>

              </ul>
              <div className="clearfix" />
            </div>
            <div className="x_content">
              <div className="row">
                <div className="col-sm-12">
                  {listLoading ? (
                    <div>Loading...</div>
                  ) : (
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
                            <th style={{ width: "" }}>Occupation</th>
                            <th style={{ width: 70 }}>Status</th>
                            <th style={{ width: 70 }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {occupations.length > 0 ? (
                            occupations.map((item, index) => (
                              <tr key={item._id}>
                                <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                                <td>{item.name}</td>
                              <td>
                                <div className="checkbox-wrapper-8">
                                  <input
                                    className="tgl tgl-skewed"
                                    type="checkbox"
                                    checked={item.status === "Active"}
                                    readOnly
                                  />
                                  <label
                                    className="tgl-btn"
                                    data-tg-off="Inactive"
                                    data-tg-on="Active"
                                  />
                                </div>
                              </td>
                              <td className="p-0">
                                <ul className="actionlist">
                                  <li>
                                    <Link title="Edit" onClick={() => handleEdit(item)}>
                                      <i className="fa fa-edit" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link  title="Delete"  onClick={() => handleDelete(item._id)}>
                                      <i className="fa fa-trash" />
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4} className="text-center">
                                No religions found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      {/* Pagination */}
                      <div className="mt-3">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i}
                            className={`btn btn-sm mx-1 ${page === i + 1 ? "btn-primary" : "btn-light"}`}
                            onClick={() => setPage(i + 1)}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
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