import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Hobbies(){

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
          const [hobbies, setHobbies] = useState([]);
          const [page, setPage] = useState(1);
          const [totalPages, setTotalPages] = useState(1);
          const [listLoading, setListLoading] = useState(false);
          
          const PAGE_SIZE = 10; 
        
          const API_URL = process.env.REACT_APP_BASE_URL_API || ""; // make sure no trailing slash
          
        const fetchHobbies = async (pageNumber = 1) => {
          setListLoading(true);
          
          try {
            // Ensure no double slash
            const url = `${API_URL.replace(/\/$/, "")}/api/admin/hobbies?page=${pageNumber}&limit=${PAGE_SIZE}`;
           
            const response = await fetch(url, {
            method: "GET",
            headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, 
                      },
                    });
            const result = await response.json();
        
            if (response.ok) {
              setHobbies(result.data); // assuming result.data contains the list
              setTotalPages(result.totalPages || 1); // assuming result.total has total items
              } else {
                console.error(result.message || "Failed to fetch hobbies.");
              }
            } catch (err) {
              console.error("Error fetching hobbies:", err);
            } finally {
              setListLoading(false);
            }
          };
        
        
          useEffect(() => {
            fetchHobbies(page);
          }, [page]);
        
          // form submit
          const onSubmit = async (data) => {
              setSuccess("");
              setLoading(true);

              const formData = new FormData();
              formData.append("name", data.name);
              formData.append("status", data.isActive ? "Active" : "Deactive");

              if (data.icon && data.icon[0]) {
                formData.append("icon", data.icon[0]);
              }

              try {
                const url = editId
                  ? `${API_URL.replace(/\/$/, "")}/api/admin/hobbies/update/${editId}`
                  : `${API_URL.replace(/\/$/, "")}/api/admin/hobbies/create`;

                const response = await fetch(url, {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${token}`, // ✅ do not set Content-Type
                  },
                  body: formData,
                });

                const result = await response.json();

                if (response.ok) {
                  setSuccess(editId ? "Hobbies updated successfully!" : "Hobbies added successfully!");
                  fetchHobbies(page);
                  reset();
                } else {
                  setSuccess(result.message || "Failed to add hobbies.");
                }
              } catch (err) {
                console.error("Error:", err);
                setSuccess("Something went wrong. Please try again.");
              } finally {
                setLoading(false);
              }
            };


          

  // Edit religion
  const handleEdit = (hobbies) => {
    setValue("name", hobbies.name);
    setValue("isActive", hobbies.status === "Active");
    setEditId(hobbies._id); // store id for update
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete religion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hobbies?")) return;
    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/admin/hobbies/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Hobbies deleted successfully!");
        fetchHobbies(page);
      } else {
        setSuccess(result.message || "Failed to delete hobbies.");
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
      <h3>Hobbies</h3>
    </div>
    
  </div>
  <div className="clearfix" />
  {/* /top tiles */}
  {/* body card start */}
  <div className="x_panel">
    <div className="x_title">
      <h2>Hobbies Entry</h2>
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
                <label>Hobbies Name</label>
                <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", { required: "Please enter hobbies name" })}
                  />
          {errors.name && (
                        <div className="text-danger mt-1">{errors.name.message}</div>
                      )}
                      
              </div>
              <div className="col-12" />
              <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                <label>Hobbies Icon</label>
                <input type="file" className="form-control" {...register("icon")} />
                <i>Width 40X Height 40</i>
                    {errors.icon && <div className="text-danger mt-1">{errors.icon.message}</div>}
                 
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
      <h2>Hobbies List</h2>
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
        {listLoading ? (
                      <div>Loading...</div>
                    ) : (
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
                  <th style={{ width: "" }}>Hobbies Name</th>
                  <th style={{ width: "" }}>Hobbies Icon</th>
                  <th style={{ width: 80 }}>Status</th>
                  <th style={{ width: 70 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                 {hobbies.length > 0 ? (
                          hobbies.map((item, index) => (
                <tr key={item._id}>
                  <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.icon ? (
                                <img src={`${API_URL.replace(/\/$/, "")}/${item.icon}`} alt={item.name} style={{ width: 30 }} />
                              ) : (
                                "-"
                              )}
                  </td>
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
        </div>
                    )}
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