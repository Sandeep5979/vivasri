import React, { useEffect, useState, useCallback} from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function AddPlan() {
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
  
  const [plans, setPlans] = useState([]);


  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [listLoading, setListLoading] = useState(false);

  const PAGE_SIZE = 10;

  const API_URL = process.env.REACT_APP_BASE_URL_API || ""; // make sure no trailing slash

  
   const fetchPlan = useCallback(
    async (pageNumber = 1) => {
      setListLoading(true);
      try {
        const url = `${API_URL.replace(/\/$/, "")}/api/admin/membership-plan?page=${pageNumber}&limit=${PAGE_SIZE}`;
        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await response.json();
        if (response.ok) {
          setPlans(result.data);
          setTotalPages(result.totalPages || 1);
        }
      } catch (err) {
        console.error("Error fetching plan:", err);
      } finally {
        setListLoading(false);
      }
    },
    [API_URL, token, PAGE_SIZE]
  );


  useEffect(() => {
    
    fetchPlan(page);
  }, [page,  fetchPlan]);

  // form submit
  const onSubmit = async (data) => {
    setSuccess("");
    setLoading(true);
    //console.log(data)

    try {
      const url = editId
        ? `${API_URL.replace(/\/$/, "")}/api/admin/membership-plan/update/${editId}`
        : `${API_URL.replace(/\/$/, "")}/api/admin/membership-plan/create`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          
          name: data.name.trim(),
          price: data.price,
          status: data.isActive ? 'Active' : 'Deactive',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Plan added successfully!");
        reset(); // clear form
        setEditId(null);
        fetchPlan(page);
      } else {
        setSuccess(result.message || "Failed to add plan.");
      }
        
    } catch (err) {
      console.error("Error:", err);
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (plan) => {
    setValue("price", plan.price);
    setValue("name", plan.name);
    setValue("isActive", plan.status === "Active");
    setEditId(plan._id); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this plan?")) return;
    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/admin/membership-plan/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Plan deleted successfully!");
        fetchPlan(page);
      } else {
        setSuccess(result.message || "Failed to delete plan.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }
  };

  const handlePriceChange = (e) => {
  //console.log("Price updated:", e.target.value);
  const value = e.target.value.replace(/[^0-9]/g, "");
  setValue("price", value)
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
              <h3>Membership Plan</h3>
            </div>

          </div>
          <div className="clearfix" />
          {/* /top tiles */}
          {/* body card start */}

          
          <div className="x_panel">
            <div className="x_title">
              <h2>Plan Entry</h2>
              <ul className="nav navbar-right panel_toolbox" style={{ minWidth: 1 }}>
                <li>
                  <Link to="#" className="collapse-link">
                    <i className="fa fa-chevron-up" />
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
                        <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                          <label>Select Plans</label>
                          <select className={`form-select ${errors.name ? "is-invalid" : ""}`}
                            {...register("name", { required: "Please select a plan" })}>
                            <option value="">Select</option>
                            <option value="Basic">Basic</option>
                            <option value="Gold">Gold</option>
                            <option value="Premium">Premium</option>
                            <option value="VIP">VIP Shaadi</option>
                          </select>
                          {errors.name && (
                            <div className="text-danger mt-1">{errors.name.message}</div>
                          )}
                        </div>
                        <div className="col-12" />
                        <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                          <label>Plan Price</label>
                          <input
                            type="text"
                            className={`form-control ${errors.price ? "is-invalid" : ""}`}
                            {...register("price", {
                              required: "Please enter price",
                              pattern: {
                                          value: /^[0-9]+$/i,
                                          message: "Only numberic value is allowed",
                                        },
                              onChange: handlePriceChange,           
                              
                              })}
                          />
                          {errors.price && (
                            <div className="text-danger mt-1">{errors.price.message}</div>
                          )}
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
              <h2>Plan List</h2>
              <ul className="nav navbar-right panel_toolbox" style={{ minWidth: 1 }}>
                <li>
                  <Link to="#" className="collapse-link">
                    <i className="fa fa-chevron-up" />
                  </Link>
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
                            <th style={{ width: "" }}>Plan</th>
                            <th style={{ width: "" }}>Plan Price</th>
                            <th style={{ width: 70 }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {plans.length > 0 ? (
                            plans.map((item, index) => (
                              <tr key={item._id}>
                                <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>

                                
                                <td className="p-0">
                                  <ul className="actionlist">
                                    <li>
                                      <Link title="Edit" onClick={() => handleEdit(item)}>
                                        <i className="fa fa-edit" />
                                      </Link>
                                    </li>
                                    
                                    { /* <li>
                                      <Link title="Delete" onClick={() => handleDelete(item._id)}>
                                        <i className="fa fa-trash" />
                                      </Link>
                                    </li>
                                    */ }

                                    <li></li>
                                  </ul>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="text-center">
                                No Plan found.
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