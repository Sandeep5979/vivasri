import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function City() {
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
    const [state, setState] = useState([]);
  
    // Religion list state
    const [country, setCountry] = useState([]);
    const [editId, setEditId] = useState(null);
    const token = localStorage.getItem("adminToken");
  
    const selectedCountry = watch("country_id");
  
    const fetchCountry = async () => {
      
      try {
        // Ensure no double slash
        const url = `${API_URL.replace(/\/$/, "")}/api/front/country`;
  
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
        } else {
          console.error(result.message || "Failed to fetch country.");
        }
      } catch (err) {
        console.error("Error fetching country:", err);
         setCountry([]);
      }
    };
  
    // Fetch state based on selected religion
    const fetchstate = async (countryId) => {
      if (!countryId) return setState([]);
      try {
        const url = `${API_URL.replace(/\/$/, "")}/api/front/state/${countryId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) setState(result.data);
        else setState([]);
      } catch (err) {
        console.error("Error fetching state:", err);
        setState([]);
      }
    };

    //sub cast list
    const [city, setCity] = useState([]);
    
  
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [listLoading, setListLoading] = useState(false);
  
    const PAGE_SIZE = 10;
  
    const API_URL = process.env.REACT_APP_BASE_URL_API || ""; // make sure no trailing slash
  
    const fetchCity = async (pageNumber = 1) => {
      setListLoading(true);
      try {
        // Ensure no double slash
        const url = `${API_URL.replace(/\/$/, "")}/api/admin/city?page=${pageNumber}&limit=${PAGE_SIZE}`;
  
        const response = await fetch(url, {
                method: "GET",
                headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, 
                          },
                        });
        const result = await response.json();
  
        if (response.ok) {
          setCity(result.data); // assuming result.data contains the list
          setTotalPages(Math.ceil(result.total / PAGE_SIZE)); // assuming result.total has total items
        } else {
          console.error(result.message || "Failed to city .");
        }
      } catch (err) {
        console.error("Error fetching city:", err);
      } finally {
        setListLoading(false);
      }
    };
  
  
    useEffect(() => {
      fetchCountry();
      fetchCity(page);
    }, [page]);
  
    useEffect(() => {
        fetchstate(selectedCountry);
      }, [selectedCountry]);
    // form submit
    const onSubmit = async (data) => {
      setSuccess("");
      setLoading(true);
  
      try {

          const url = editId
                      ? `${API_URL.replace(/\/$/, "")}/api/admin/city/update/${editId}`
                      : `${API_URL.replace(/\/$/, "")}/api/admin/city/create`;

          const response = await fetch(url, {
          method: "POST",
          headers: { 
                      "Content-Type": "application/json",
                       Authorization: `Bearer ${token}`
                     },
          body: JSON.stringify({
            country_id : data.country_id,
            state_id    : data.state_id,
            name        : data.name,
            status: data.isActive ? 'Active' : 'Deactive',
          }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          setSuccess(editId ? "City updated successfully!" : "City added successfully!");
          reset(); // clear form
          fetchCity(page);

        } else {
          setSuccess(result.message || "Failed to add city.");
        }
      } catch (err) {
        console.error("Error:", err);
        setSuccess("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

// Edit religion
  const handleEdit = (city) => {
      setValue("country_id", city?.country_id?._id);
      setValue("state_id", city?.state_id._id);
      setValue("name", city.name);
      setValue("isActive", city.status === "Active");
      setEditId(city._id); // store id for update
      setpendingCityId(city.state_id._id);
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    };

  // Delete religion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this city?")) return;
    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/admin/city/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("City deleted successfully!");
        fetchCity(page);
      } else {
        setSuccess(result.message || "Failed to delete city.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }
  };

// State to track the caste to select after state are loaded
const [pendingCityId, setpendingCityId] = useState(null);

// Watch religion and fetch state
useEffect(() => {
  if (!selectedCountry) return setState([]);

  const loadstate = async () => {
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/front/state/${selectedCountry}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setState(result.data);

        // After state are loaded, set the caste if pending
        if (pendingCityId) {
          setValue("state_id", pendingCityId);
          setpendingCityId(null);
        }
      } else {
        setState([]);
      }
    } catch (err) {
      console.error("Error fetching state:", err);
      setState([]);
    }
  };

  loadstate();
}, [selectedCountry]);
  
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
              <h3>City </h3>
            </div>
           
          </div>
          <div className="clearfix" />
          {/* /top tiles */}
          {/* body card start */}
          <div className="x_panel">
            <div className="x_title">
              <h2> City Entry</h2>
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
                        <label>Select Country</label>
                        <select className={`form-select ${errors.country_id ? "is-invalid" : ""}`}
                            {...register("country_id", { required: "Please select a religion" })}>
                            <option value="">Select</option>
                            {country.length > 0 &&
                              country.map((item) => (
                                <option key={item._id} value={item._id}>
                                  {item.name}
                                </option>
                              ))}
                            
                          </select>
                          {errors.country_id && (
                            <div className="text-danger mt-1">{errors.country_id.message}</div>
                          )}
                      </div>
                      <div className="col-12" />
                     <div className="col-12 col-sm-4 mb-3">
                          <label>Select State</label>
                          <select
                            className={`form-select ${errors.state_id ? "is-invalid" : ""}`}
                            {...register("state_id", { required: "Please select a cast" })}
                          >
                            <option value="">Select</option>
                            {state.map((c) => (
                              <option key={c._id} value={c._id}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                          {errors.state_id && <div className="text-danger mt-1">{errors.state_id.message}</div>}
                        </div>
                      <div className="col-12" />
                      <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                        <label>Enter City</label>
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
                          <th style={{ width: "" }}>Country </th>
                          <th style={{ width: "" }}>State</th>
                          <th style={{ width: "" }}>City</th>
                          <th style={{ width: 70 }}>Status</th>
                          <th style={{ width: 70 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {city.length > 0 ? (
                            city.map((item, index) => (
                         <tr key={item._id}>
                          <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                          <td>{item?.country_id?.name || "—"}</td>
                          <td>{item?.state_id?.name || "—"}</td>
                          <td>{item?.name || "—"}</td>
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
                              <Link title="Edit" onClick={(e) => {
                                                e.preventDefault();
                                                handleEdit(item);
                                              }}>

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
                                No country found.
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