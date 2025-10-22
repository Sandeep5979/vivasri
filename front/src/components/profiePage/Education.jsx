import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function Education({educationButton, searchEducation}) {

  const [highest, setHighest] = useState([])
  const [selectedEducation, setSelectedEducation] =  useState(searchEducation)


  const fetchEducation = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/education`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setHighest(data.data)
      }
}

useEffect(() => {

  fetchEducation()

}, [])

useEffect(() => {
    
    if(selectedEducation)
    educationButton(selectedEducation)
  }, [selectedEducation])




  useSelect2(".inline-multiselectE4", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedEducation);

  return (
    <select className="inline-multiselect inline-multiselectE4" 
    multiple
    value={selectedEducation}
    >
      <option value="">--Select--</option>
      {highest && highest.map((highestList, index)  => {

                                        return (

                                            <option value={highestList._id}>{highestList.name}</option>
                                        )

                                    })
                                    }
    </select>
  );
}
