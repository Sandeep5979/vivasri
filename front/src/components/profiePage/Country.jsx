import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function Country({countryButton, searchCountry, searchState, searchCity}) {
  console.log(searchCity)
  const [country, setCountry] = useState([])
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(searchCountry)
  const [selectedState, setSelectedState] = useState(searchState)
  const [selectedCity, setSelectedCity] = useState(searchCity)

  
  const fetchCountry = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/country`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setCountry(data.data)
      }
}
const fetchState = async (id) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/state-multi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({country:selectedCountry})
        });

      const data = await res.json();
      if(data.status){

        setState(data.data)
      }
}
const fetchCity = async (id) => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/city-multi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({state:selectedState})
        });

      const data = await res.json();
      if(data.status){

        setCity(data.data)
      }
}


useEffect(() => {

fetchCountry()

 }, [])

 useEffect(() => {
  
  if(selectedCountry)
  fetchState()
  countryButton(selectedCountry, 'country')
}, [selectedCountry])

useEffect(() => {
  
  if(selectedState)
  fetchCity()
  countryButton(selectedState, 'state')
}, [selectedState])

useEffect(() => {
  
  if(selectedCity)
  countryButton(selectedCity, 'city')
}, [selectedCity])
  
  
  useSelect2(".inline-multiselectC4", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedCountry);
  useSelect2(".inline-multiselectC5", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedState);
  useSelect2(".inline-multiselectC6", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedCity);

  return (
    
    
    <>
    
    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo5"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Country
                          </button>
                        </h2>
                        <div
                          id="collapseTwo5"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="accordion-body">
                            {/* start */}
                            <select
                              className="inline-multiselect inline-multiselectC4"
                              multiple="multiple"
                              value={selectedCountry}
                            >
                              <option value="">--Select--</option>
                              {country && country.map((countryList, index)  => {

                                        return (

                                            <option value={countryList._id}>{countryList.name}</option>
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
                            data-bs-target="#collapseTwo6"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            State
                          </button>
                        </h2>
                        <div
                          id="collapseTwo6"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="accordion-body">
                            {/* start */}
                            <select
                            className="inline-multiselect inline-multiselectC5"
                            multiple="multiple"
                            value={selectedState}
                          >
                            <option value="">--Select--</option>
                            {state && state.map((stateList, index)  => {

                                        return (

                                            <option value={stateList._id}>{stateList.name}</option>
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
                            data-bs-target="#collapseTwo7"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            District/City
                          </button>
                        </h2>
                        <div
                          id="collapseTwo7"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="accordion-body">
                            {/* start */}
                            <select
                            className="inline-multiselect inline-multiselectC6"
                            multiple="multiple"
                            value={selectedCity}
                          >
                            <option value="">--Select--</option>
                            {city && city.map((cityList, index)  => {

                                        return (

                                            <option value={cityList._id}>{cityList.name}</option>
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
