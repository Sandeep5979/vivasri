import React from 'react'

function FaqList() {
  return (
    <>
    <div className="site-width">
      <div className="pagehd text-center mb-4">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faqsCards">
        <div className="accordion" id="accordionExampletwo">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsewhy1"
                aria-expanded="true"
                aria-controls="collapsewhy1"
              >
                What is Vivashri ?
              </button>
            </h2>
            <div
              id="collapsewhy1"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsewhy2"
                aria-expanded="false"
                aria-controls="collapsewhy2"
              >
                What benefits do I get if I subscribe to Vivashri?
              </button>
            </h2>
            <div
              id="collapsewhy2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsewhy3"
                aria-expanded="false"
                aria-controls="collapsewhy3"
              >
                How much is the membership?
              </button>
            </h2>
            <div
              id="collapsewhy3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsewhy4"
                aria-expanded="false"
                aria-controls="collapsewhy4"
              >
                How is privacy maintained with Vivashri?
              </button>
            </h2>
            <div
              id="collapsewhy4"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsewhy5"
                aria-expanded="false"
                aria-controls="collapsewhy5"
              >
                How is privacy maintained with Vivashri?
              </button>
            </h2>
            <div
              id="collapsewhy5"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsewhy6"
                aria-expanded="false"
                aria-controls="collapsewhy6"
              >
                How do I get started with Vivashri?
              </button>
            </h2>
            <div
              id="collapsewhy6"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FaqList
