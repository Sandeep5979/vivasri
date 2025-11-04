import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmPopup({message, yesNoButton}) {
  
  
  
    return (
    <>
     <div
  className="modal fade success-alert pinkalert"
  id="confirmPopupId"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content position-relative">
      <div className="modal-body">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          style={{ position: "absolute", right: 15, top: 15 }}
        />
        <div className="intrestsent text-center pb-4">
          
          <h5 className="mt-3 mb-4">{message}</h5>
          
          <Link  to="#" onClick={(e) => {
            e.preventDefault()
            yesNoButton('Yes')
          }
            
            } className="button viewpro-btn yesnobtn d-inline mb-3 me-3" style={{background:'#6C1A2F', overflow:'hidden'}}>
            Yes
            
          </Link>
          <Link  to="/#" onClick={(e) => {
            e.preventDefault()
            yesNoButton('No')
            
            }} className="button viewpro-btn yesnobtn d-inline" style={{overflow:'hidden'}}>
            No
          </Link>
        </div>
      </div>
    </div>
  </div>
</div> 
    </>
  )
}

export default ConfirmPopup
