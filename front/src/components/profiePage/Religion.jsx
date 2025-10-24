import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function Religion({religionButton, searchReligion}) {

const [religion, setReligion] = useState([])
const [caste, setCaste] = useState([])
const [selectedReligion, setSelectedReligion] = useState(searchReligion);
const [selectedCaste, setSelectedCaste] = useState([]);

  useSelect2(".inline-multiselect4", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedReligion);

  useSelect2(".inline-multiselect5", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedCaste);

  const fetchReligion = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/religion`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setReligion(data.data)
      }
}
const fetchCaste = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/caste-multi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({religion:selectedReligion})
        });

      const data = await res.json();
      if(data.status){

        setCaste(data.data)
      }
}


useEffect(() => {

fetchReligion()

}, [])

useEffect(() => {
  
  if(selectedReligion)
  fetchCaste()
  religionButton(selectedReligion, 'religion')
}, [selectedReligion])

useEffect(() => {
  
  if(selectedCaste)
  
  religionButton(selectedCaste, 'caste')
}, [selectedCaste])

  return (
    
    <>
    
    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo3"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <img src='assets/img/religion.png' alt='' /> Religion
                          </button>
                        </h2>
                        <div
                          id="collapseTwo3"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingTwo"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="accordion-body">
                            {/* start */}
                            <select
                          className="inline-multiselect inline-multiselect4"
                          multiple="multiple"
                          value={selectedReligion}
                        >
                          <option value="">-- Select --</option>
                          {religion && religion.map((religionList, index)  => {

                                        return (

                                            <option value={religionList._id}>{religionList.name}</option>
                                        )

                                    })
                                    }
                        </select>
                            {/* end */}
                          </div>
                        </div>
                      </div>
                      {/* item end */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo4"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <img src='assets/img/list.png' alt='' /> Caste
                          </button>
                        </h2>
                        <div
                          id="collapseTwo4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="accordion-body">
                            {/* start */}
                            <select
                              className="inline-multiselect inline-multiselect5"
                              multiple="multiple"
                              value={selectedCaste}
                            >
                              <option value="">--Select--</option>
                              {caste && caste.map((casteList, index)  => {

                                        return (

                                            <option value={casteList._id}>{casteList.name}</option>
                                        )

                                    })
                                    }
                            </select>
                            {/* end */}
                          </div>
                        </div>
                      </div>
    </>
    
    
    
    
    
  );
}
