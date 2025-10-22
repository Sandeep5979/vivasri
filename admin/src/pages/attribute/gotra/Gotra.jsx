import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Gotra() {
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
  const [subcastelist, setSubCastList] = useState([]);
  const [religions, setReligions] = useState([]);
  const [gotra, setGotra] = useState([]);

  const [editId, setEditId] = useState(null);
  const [pendingReligionId, setPendingReligionId] = useState(null);
  const [pendingCasteId, setPendingCasteId] = useState(null);
  const [pendingSubCasteId, setPendingSubCasteId] = useState(null);
  

  const token = localStorage.getItem("adminToken");
  const API_URL = process.env.REACT_APP_BASE_URL_API || "";

  const selectedReligion = watch("religion_id");
  const selectedCaste = watch("caste_id");

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [listLoading, setListLoading] = useState(false);
  const PAGE_SIZE = 10;

  // Fetch Religion List
  const fetchReligion = async () => {
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/front/religion`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) setReligions(result.data || []);
      else setReligions([]);
    } catch (err) {
      console.error("Error fetching religions:", err);
      setReligions([]);
    }
  };

  // Fetch Castes
  const fetchCasts = async (religionId) => {
    if (!religionId) return setCasts([]);
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/front/caste/${religionId}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) setCasts(result.data || []);
      else setCasts([]);
    } catch (err) {
      console.error("Error fetching casts:", err);
      setCasts([]);
    }
  };

  // Fetch Sub Castes
  const fetchSubCasts = async (casteId) => {
    if (!casteId) return setSubCastList([]);
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/front/sub-caste/${casteId}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) setSubCastList(result.data || []);
      else setSubCastList([]);
    } catch (err) {
      console.error("Error fetching sub castes:", err);
      setSubCastList([]);
    }
  };

  // Fetch Gotra List with Pagination
  const fetchGotra = async (pageNumber = 1) => {
    setListLoading(true);
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/admin/gotra?page=${pageNumber}&limit=${PAGE_SIZE}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();

      if (response.ok) {
        setGotra(result.data || []);
        setTotalPages(result.totalPages || 1);
      } else {
        setGotra([]);
      }
    } catch (err) {
      console.error("Error fetching gotra:", err);
      setGotra([]);
    } finally {
      setListLoading(false);
    }
  };

  // Submit Gotra
  const onSubmit = async (data) => {
    setSuccess("");
    setLoading(true);
    try {
      const url = editId
        ? `${API_URL.replace(/\/$/, "")}/api/admin/gotra/update/${editId}`
        : `${API_URL.replace(/\/$/, "")}/api/admin/gotra/create`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          religion_id: data.religion_id,
          caste_id: data.caste_id,
          sub_caste_id: data.sub_caste_id,
          name: data.name,
          status: data.isActive ? "Active" : "Deactive",
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(editId ? "Gotra updated successfully!" : "Gotra added successfully!");
        reset();
        fetchGotra(page);
      } else {
        setSuccess(result.message || "Failed to save gotra.");
      }
    } catch (err) {
      console.error("Error:", err);
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Edit
  const handleEdit = (gotraItem) => {
    const religionId = gotraItem?.caste_id?.religion_id?._id || "";
    const casteId = gotraItem?.caste_id?._id || "";
    const subCasteId = gotraItem?.sub_caste_id?._id || "";
    const name = gotraItem?.name || "";
    const isActive = gotraItem?.status === "Active";

    setValue("religion_id", religionId);
    setValue("caste_id", casteId);
    setValue("sub_caste_id", subCasteId);
    setValue("name", name);
    setValue("isActive", isActive);
    

    if (gotraItem?._id) {
      setEditId(gotraItem._id);
    }

    if (gotraItem?.caste_id?._id) {
      setPendingReligionId(gotraItem?.caste_id?.religion_id?._id || null);
      setPendingCasteId(gotraItem?.caste_id?._id || null);
      setPendingSubCasteId(gotraItem?.sub_caste_id?._id || null);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this gotra?")) return;
    try {
      const url = `${API_URL.replace(/\/$/, "")}/api/admin/gotra/delete/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Gotra deleted successfully!");
        fetchGotra(page);
      } else {
        setSuccess(result.message || "Failed to delete gotra.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }
  };

  // Effects
  useEffect(() => {
    fetchReligion();
    fetchGotra(page);
  }, [page]);

  useEffect(() => {
    fetchCasts(selectedReligion);
    fetchSubCasts(selectedCaste);
  }, [selectedReligion, selectedCaste]);
// When religion options are loaded (based on caste)
useEffect(() => {
  if (pendingReligionId && religions.length > 0) {
    setValue("religion_id", pendingReligionId);
  }
}, [religions, pendingReligionId])
// When caste options are loaded (based on selected religion)
useEffect(() => {
  if (pendingCasteId && casts.length > 0) {
    setValue("caste_id", pendingCasteId);
  }
}, [casts, pendingCasteId]);
// When sub-caste options are loaded (based on selected caste)
useEffect(() => {
  if (pendingSubCasteId && subcastelist.length > 0) {
    setValue("sub_caste_id", pendingSubCasteId);
  }
}, [subcastelist, pendingSubCasteId]);

  return (
    <div className="container body">
      <div className="main_container">
        <Sidebar />
        <Header />

        <div className="right_col" role="main">
          <div className="page-title">
            <div className="title_left">
              <h3>Gotra</h3>
            </div>
          </div>

          {/* Form Section */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Gotra Entry</h2>
              <div className="clearfix" />
            </div>
            <div className="x_content">
               <div className="filtercont">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    {/* Religion */}
                    <div className="col-12 col-sm-4 mb-3">
                      <label>Select Religion</label>
                      <select
                        className={`form-select ${errors.religion_id ? "is-invalid" : ""}`}
                        {...register("religion_id", { required: "Please select a religion" })}
                      >
                        <option value="">Select</option>
                        {religions.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {errors.religion_id && (
                        <div className="text-danger mt-1">{errors.religion_id.message}</div>
                      )}
                    </div>
                     <div className="clearfix" />
                    {/* Caste */}
                    <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                      <label>Select Caste</label>
                      <select
                        className={`form-select ${errors.caste_id ? "is-invalid" : ""}`}
                        {...register("caste_id", { required: "Please select a caste" })}
                      >
                        <option value="">Select</option>
                        {casts.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      {errors.caste_id && (
                        <div className="text-danger mt-1">{errors.caste_id.message}</div>
                      )}
                    </div>
                      <div className="clearfix" />
                    {/* Sub-Caste */}
                    <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                      <label>Select Sub-Caste</label>
                      <select
                        className={`form-select ${errors.sub_caste_id ? "is-invalid" : ""}`}
                        {...register("sub_caste_id", { required: "Please select a sub caste" })}
                      >
                        <option value="">Select</option>
                        {subcastelist.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      {errors.sub_caste_id && (
                        <div className="text-danger mt-1">{errors.sub_caste_id.message}</div>
                      )}
                    </div>
                      <div className="clearfix" />
                    {/* Gotra */}
                    <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                      <label>Enter Gotra</label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register("name", {
                          required: "Please enter gotra name",
                          minLength: { value: 2, message: "Minimum 2 characters" },
                        })}
                      />
                      {errors.name && <div className="text-danger mt-1">{errors.name.message}</div>}
                    </div>
                        <div className="clearfix" />
                    {/* Status */}
                    <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                      <input type="checkbox" id="active" {...register("isActive")} />
                      <label htmlFor="active" className="form-label ms-2">
                        Active/Deactive
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="col-12 col-sm-4 pr-lg-0 mb-3">
                      <button type="submit"  className="btn sitebtn float-right" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                      {success && <div className="text-success mt-2">{success}</div>}
                    </div>
                  </div>
                </form>
                </div>
            </div>
          </div>

          {/* Gotra List */}
          <div className="x_panel">
            <div className="x_title">
              <h2>Gotra List</h2>
              <div className="clearfix" />
            </div>
            <div className="x_content">
              {listLoading ? (
                <div>Loading...</div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped table-bordered mytable">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Religion</th>
                        <th>Caste</th>
                        <th>Sub-Caste</th>
                        <th>Gotra</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gotra.length > 0 ? (
                        gotra.map((item, index) => (
                          <tr key={item._id}>
                            <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                            <td>{item.caste_id?.religion_id?.name}</td>
                            <td>{item.caste_id?.name}</td>
                            <td>{item.sub_caste_id?.name || "-"}</td>
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
                                 <Link title="Edit" onClick={(e) => {
                                    e.preventDefault();
                                    handleEdit(item);
                                  }}>
                                  <i className="fa fa-edit" />
                                </Link>
                                </li>
                                <li>
                                  <Link title="Delete" onClick={() => handleDelete(item._id)}>
                                    <i className="fa fa-trash" />
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="text-center">
                            No Gotra found.
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

        <Footer />
      </div>
    </div>
  );
}
