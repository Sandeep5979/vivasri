import React from 'react'

function ProfieSkeleton() {
  return (
    <>
      <div className="profilelist-box d-md-flex align-items-md-start justify-content-md-start mb-2">
                        <div className="profilelist-img">
                          <div className="skeleton profilelist-img"></div>
                        </div>
                        <div className="profilelist-det">
                          <h2>
                            <div className="skeleton name"></div>
                          </h2>
                          { /* <h6 className="pinkhd">Profile ID : 600155</h6> */ }
                          <div className="profilelist-detwhite d-md-flex align-items-md-stretch justify-content-md-between" style={{backgroundColor:'unset'}}>
                            <div style={{width:'100%'}}>
                              <div className="profiledata-row d-flex align-items-start  mb-2">
                                <div className="skeleton title"></div>
                                
                              </div>
                              <div className="profiledata-row d-flex align-items-start  mb-2">
                                <div className="skeleton title"></div>
                              </div>
                              <div className="profiledata-row d-flex align-items-start  mb-2">
                                <div className="skeleton title"></div>
                              </div>
                              <div className="profiledata-row d-flex align-items-start  mb-2">
                                <div className="skeleton title"></div>
                              </div>
                              
                            </div>
                            <div style={{width:'150px'}}>
                              <div className="profilelist-pinkbox">
                                <div className="skeleton title"></div>
                                <div className="skeleton title"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
    </>
  )
}

export default ProfieSkeleton
