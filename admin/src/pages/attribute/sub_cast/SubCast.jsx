import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function SubCast() {
  const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
      } = useForm();
  
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [casts, setCasts] = useState([]);
  
    // Religion list state
    const [religions, setReligions] = useState([]);
    const [editId, setEditId] = useState(null);
    const token = localStorage.getItem("adminToken");
  
    const selectedReligion = watch("religion_id");
  
    const fetchReligion = async () => {
      
      try {
        // Ensure no double slash
        const url = `${API_URL.replace(/\/$/, "")}/api/front/religion`;
  
        const response = await fetch(url, {
                  method: "GET",
                  headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${token}`, 
                            },
                          });

        const result = await response.json();
  
        if (response.ok) {
          setReligions(result.data); // assuming result.data contains the list
        } else {
          console.error(result.message || "Failed to fetch casts.");
        }
      } catch (err) {
        console.error("Error fetching casts:", err);
         setReligions([]);
      }
    };
  
    // Fetch casts based on selected religion
    const fetchCasts = async (religionId) => {
      if (!religionId) return setCasts([]);
      try {
        const url = `${API_URL.replace(/\/$/, "")}/api/front/caste/${religionId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) setCasts(result.data);
        else setCasts([]);
      } catch (err) {
        console.error("Error fetching casts:", err);
        setCasts([]);
      }
    };

    //sub cast list
    const [subcasts, setSubCast] = useState([]);
    
  
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [listLoading, setListLoading] = useState(false);
  
    const PAGE_SIZE = 10;
  
    const API_URL = process.env.REACT_APP_BASE_URL_API || ""; // make sure no trailing slash
  
    const fetchSubCast = async (pageNumber = 1) => {
      setListLoading(true);
      try {
        // Ensure no double slash
        const url = `${API_URL.replace(/\/$/, "")}/api/admin/sub-caste?page=${pageNumber}&limit=${PAGE_SIZE}`;
  
        const response = await fetch(url, {
                method: "GET",
                headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, 
                          },
                        });
        const result = await response.json();
  
        if (response.ok) {
          setSubCast(result.data); // assuming result.data contains the list
          setTotalPages(result.totalPages || 1); // assuming result.total has total items
        } else {
          console.error(result.message || "Failed to fetch sub casts.");
        }
      } catch (err) {
        console.error("Error fetching sub casts:", err);
      } finally {
        setListLoading(false);
      }
    };
  
  
    useEffect(() => {
      fetchReligion();
      fetchSubCast(page);
    }, [page]);
  
    useEffect(() => {
        fetchCasts(selectedReligion);
      }, [selectedReligion]);
    // form submit
    const onSubmit = async (data) => {
      setSuccess("");
      setLoading(true);
  
      try {

          const url = editId
                      ? `${API_URL.replace(/\/$/, "")}/api/admin/sub-caste/update/${editId}`
                      : `${API_URL.replace(/\/$/, "")}/api/admin/sub-caste/create`;

          const response = await fetch(url, {
          method: "POST",
          headers: { 
                      "Content-Type": "application/json",
                       Authorization: `Bearer ${token}`
                     },
          body: JSON.stringify({
            religion_id : data.religion_id,
            caste_id    : data.caste_id,
            name        : data.name,
            status: data.isActive ? 'Active' : 'Deactive',
          }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          setSuccess(editId ? "Sub Caste updated successfully!" : "Sub Caste added successfully!");
          reset(); // clear form
          fetchSubCast(page);

        } else {
          setSuccess(result.message || "Failed to add subcaste.");
        }
      } catch (err) {
        console.error("Error:", err);
        setSuccess("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

// Edit religion
  const handleEdit = (subcaste) => {
      setValue("religion_id", subcaste.caste_id.religion_id._id);
      setValue("caste_id", subcaste.caste_id._id);
      setValue("name", subcaste.name);
      setValue("isActive", subcaste.status === "Active");
      setEditId(subcaste._id); // store id for update
      setPendingCasteId(subcaste.caste_id._id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    };

  // Delete religion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this sub caste?")) return;
    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/admin/sub-caste/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Sub caste deleted successfully!");
        fetchSubCast(page);
      } else {
        setSuccess(result.message || "Failed to delete sub caste.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }
  };

// State to track the caste to select after casts are loaded
const [pendingCasteId, setPendingCasteId] = useState(null);

// Watch religion and fetch casts
useEffect(() => {
  if (!selectedReligion) return setCasts([]);

  const loadCasts = async () => {
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/front/caste/${selectedReligion}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setCasts(result.data);

        // After casts are loaded, set the caste if pending
        if (pendingCasteId) {
          setValue("caste_id", pendingCasteId);
          setPendingCasteId(null);
        }
      } else {
        setCasts([]);
      }
    } catch (err) {
      console.error("Error fetching casts:", err);
      setCasts([]);
    }
  };

  loadCasts();
}, [selectedReligion]);
  
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
              <h3>Sub Cast</h3>
            </div>
           
          </div>
          <div className="clearfix" />
          {/* /top tiles */}
          {/* body card start */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Sub Caste Entry</h2>
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
                        <label>Select Religion</label>
                        <select className={`form-select ${errors.religion_id ? "is-invalid" : ""}`}
                            {...register("religion_id", { required: "Please select a religion" })}>
                            <option value="">Select</option>
                            {religions.length > 0 &&
                              religions.map((item) => (
                                <option key={item._id} value={item._id}>
                                  {item.name}
                                </option>
                              ))}
                            
                          </select>
                          {errors.religion_id && (
                            <div className="text-danger mt-1">{errors.religion_id.message}</div>
                          )}
                      </div>
                      <div className="col-12" />
                     <div className="col-12 col-sm-4 mb-3">
                          <label>Select Caste</label>
                          <select
                            className={`form-select ${errors.caste_id ? "is-invalid" : ""}`}
                            {...register("caste_id", { required: "Please select a cast" })}
                          >
                            <option value="">Select</option>
                            {casts.map((c) => (
                              <option key={c._id} value={c._id}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                          {errors.caste_id && <div className="text-danger mt-1">{errors.caste_id.message}</div>}
                        </div>
                      <div className="col-12" />
                      <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                        <label>Enter Sub Caste</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            {...register("name", {
                              required: "Please enter sub cast name",
                              minLength: { value: 2, message: "Minimum 2 characters" },
                            })}
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
                          {success && <div className="text-success mt-2">{success}</div>}
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
          {/* body card start */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Sub Cast List</h2>
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
                          <th style={{ width: "" }}>Religion</th>
                          <th style={{ width: "" }}>Caste</th>
                          <th style={{ width: "" }}>Sub Caste</th>
                          <th style={{ width: 70 }}>Status</th>
                          <th style={{ width: 70 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subcasts.length > 0 ? (
                            subcasts.map((item, index) => (
                         <tr key={item._id}>
                          <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                            <td>{item.caste_id.religion_id.name}</td>
                           <td>{item.caste_id.name}</td>
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
                              <td colSpan={5} className="text-center">
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