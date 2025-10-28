import React, { useEffect, useState } from 'react'

function  InboxLeftSideBar() {


    return(
        <>
             <section className="faqsSection bg-registers p-4 ">
                                            <div className="">
                                                <div className="">
                                                    <div className="accordion" id="accordionExampletwo">
                                                        <div className="col-12 d-flex m-2">
                                                            <img  src={`${process.env.REACT_APP_BASE_URL}/assets/img/add-user-2.png`} alt="" />{" "}
                                                            <h3>My Account</h3>
                                                        </div>
                                                        <div className="accordion-items">
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    style={{ backgroundColor: "white" }}
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#collapsewhy5"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapsewhy5"
                                                                >
                                                                    Inbox
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="collapsewhy5"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <p>
                                                                        <a href="/inbox/received">Received</a>
                                                                    </p>
                                                                    <p>
                                                                        <a href="/inbox/accepted">Accepted</a>
                                                                    </p>
                                                                    <p>
                                                                        <a href="/inbox/decline">Decline</a>
                                                                    </p>
                                                                    <p>
                                                                        <a href="/inbox/sent">Sent</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
        </>
    )
}

export default InboxLeftSideBar