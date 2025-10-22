import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Country() {

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Religion list state
  const [country, setCountry] = useState([]);
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [listLoading, setListLoading] = useState(false);
  const token = localStorage.getItem("adminToken");

  const PAGE_SIZE = 10; 

  const API_URL = process.env.REACT_APP_BASE_URL_API || ""; // make sure no trailing slash
  
const fetchcountry = async (pageNumber = 1) => {
  setListLoading(true);
  
  try {
    // Ensure no double slash
    const url = `${API_URL.replace(/\/$/, "")}/api/admin/country?page=${pageNumber}&limit=${PAGE_SIZE}`;
   
    const response = await fetch(url, {
          method: "GET",
          headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`, 
                    },
                  });
    const result = await response.json();

    if (response.ok) {
      setCountry(result.data); // assuming result.data contains the list
      setTotalPages(result.totalPages || 1); // assuming result.total has total items
      } else {
        console.error(result.message || "Failed to fetch country.");
      }
    } catch (err) {
      console.error("Error fetching country:", err);
    } finally {
      setListLoading(false);
    }
  };


  useEffect(() => {
    fetchcountry(page);
  }, [page]);

  // form submit
  const onSubmit = async (data) => {
    setSuccess("");
    setLoading(true);
    
    

    try {
      const url = editId
        ? `${API_URL.replace(/\/$/, "")}/api/admin/country/update/${editId}`
        : `${API_URL.replace(/\/$/, "")}/api/admin/country/create`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: data.name.trim(),
          status: data.isActive ? "Active" : "Deactive",
        }),
      });

      const result = await response.json();

      if (response.ok) {
         setSuccess(editId ? "Country updated successfully!" : "Country added successfully!");
        reset(); // clear form
        setEditId(null);
        fetchcountry(page);
      } else {
        setSuccess(result.message || "Failed to add country.");
      }
    } catch (err) {
      console.error("Error:", err);
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

   // Edit religion
  const handleEdit = (religion) => {
    setValue("name", religion.name);
    setValue("isActive", religion.status === "Active");
    setEditId(religion._id); // store id for update
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete religion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this country?")) return;
    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/admin/country/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Country deleted successfully!");
        fetchcountry(page);
      } else {
        setSuccess(result.message || "Failed to delete religion.");
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
              <h3>Country</h3>
            </div>

          </div>
          <div className="clearfix" />
          {/* /top tiles */}
          {/* body card start */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Country Entry</h2>
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
                  {/* filter start */}
                  <div className="filtercont">
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                          <label>Enter Country</label>
                           <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            {...register("name", { required: "Please enter country name" })}
                          />
                             {errors.religion && (
                                <div className="text-danger mt-1">{errors.religion.message}</div>
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
                    </form>
                  </div>
                  {/* filter end */}
                </div>
              </div>
            </div>
          </div>
          {/* bod card end */}
          {/* Religion List Table */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Country List</h2>
              <div className="clearfix" />
            </div>
            <div className="x_content">
              {listLoading ? (
                <div>Loading...</div>
              ) : (
                <div className="table-responsive">
                  <table
                    className="table table-striped table-bordered bulk_action mytable"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th style={{ width: 20 }}>S.No</th>
                        <th>Country</th>
                        <th style={{ width: 120 }}>Status</th>
                        <th style={{ width: 120 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {country.length > 0 ? (
                        country.map((item, index) => (
                          <tr key={item.id}>
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
                                  <Link to={'#'} title="Edit" onClick={() => handleEdit(item)}>
                                    <i className="fa fa-edit" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to={'#'}  title="Delete"  onClick={() => handleDelete(item._id)}>
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
                            No Country found.
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
          {/* bod card end */}

        </div>

        {/* page end */}
        <Footer />

      </div>
    </div>
  );
}