import React from 'react'

function SuccessPopup({message}) {
  return (
    <div
  className="modal fade success-alert pinkalert"
  id="successPopup"
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
        <div className="intrestsent text-center">
          <img
            src="assets/img/check-animation.gif"
            alt="Interest Sent Icon"
            style={{ maxHeight: 60 }}
          />
          <h5 className="mt-3">{message}</h5>
          <p className="mt-2 mb-3">
            &nbsp;
          </p>
          
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default SuccessPopup
