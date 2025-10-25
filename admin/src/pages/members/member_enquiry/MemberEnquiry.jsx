import {React, useEffect, useState} from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { useForm } from "react-hook-form";

export const MemberEnquiry = () => {

    const { register, handleSubmit } = useForm();

    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    const PAGE_SIZE = 10; 

    const API_URL = process.env.REACT_APP_BASE_URL_API || "";
    const token = localStorage.getItem("adminToken");
    
    const fetchEnquiries = async (search = null, page = 1) => {
        setLoading(true);
        
        try {
             const url = `${API_URL.replace(/\/$/, "")}/api/admin/member-enquiry?page=${page}&limit=${PAGE_SIZE}${
                        search ? `&name=${encodeURIComponent(search.name || "")}&mobile=${encodeURIComponent(search.mobile || "")}` : ""
                        }`;

             
             const response = await fetch(url, {
                method: "GET",
                headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, 
                            }
                        });

            const result = await response.json();
            if (result.status) {
                setEnquiries(result.data);
                setTotalPages(result.totalPages || 1);
            }

        } catch (error) {
            console.error("Error fetching member enquiries:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEnquiries(null ,page);
    }
    , [page]);
    
    // search submit handler
    const onSubmit = (search) => {
         fetchEnquiries(search);
    }

    return (
        <div class="container body">
            <div class="main_container">
                <Sidebar />
                <Header />

                <div className="right_col" role="main">

                    <div className="page-title">
                        <div className="title_left">
                            <h3>Members Enquiry</h3>
                        </div>

                    </div>
                    <div className="clearfix" />

                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Members Enquiry List</h2>
                            <ul className="nav navbar-right panel_toolbox" style={{ minWidth: 1 }}>
                                <li>
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up" />
                                    </a>
                                </li>

                                <li>
                                    <a className="close-link">
                                        <i className="fa fa-close" />
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
                                                <div className="col-lg-9">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-4 pr-lg-0">
                                                            <label>Filter By Name</label>
                                                            <input type="text" {...register("name")} className="form-control" />
                                                        </div>
                                                        
                                                        <div className="col-12 col-sm-4 pr-lg-0">
                                                            <label>Mobile</label>
                                                            <input  type="number" {...register("mobile")} className="form-control" />
                                                        </div>

                                                        <div className="col-12 col-sm-4 pr-lg-0">
                                                            <label>&nbsp;</label>
                                                            <button className="btn btn-default submit sitebtn" >
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
                                                    <th style={{ width: 30 }}>S.No</th>
                                                    <th style={{ width: 30 }}>Perfect Search</th>
                                                    <th style={{ width: 120 }}>Name</th>
                                                    <th style={{ width: 30 }}>Mobile Number</th>
                                                    <th style={{ width: 30 }}>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {enquiries.length > 0 ? (
                                                    enquiries.map((enquiry, index) => (
                                                        <tr key={enquiry._id}>
                                                            <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                                                            <td>
                                                                {enquiry?.create_profile?.name}
                                                            </td>
                                                            <td>{enquiry.name}</td>
                                                            <td>{enquiry?.mobile}</td>
                                                            <td>
                                                                 {(() => {
                                                                    const d = new Date(enquiry.createdAt);
                                                                    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getFullYear()}`;
                                                                })()}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center">
                                                            {loading ? "Loading..." : "No enquiries found."}
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
};
export default MemberEnquiry;
