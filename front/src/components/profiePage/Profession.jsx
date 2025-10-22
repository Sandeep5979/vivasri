import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function Profession({professionButton, searchProfession}) {

const [profession, setProfession] = useState([])
const [selectedProfession, setSelectedProfession] = useState(searchProfession)

const fetchEducation = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/professional-education`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setProfession(data.data)
      }
}

useEffect(() => {

  fetchEducation()

}, [])


useEffect(() => {
    
    if(selectedProfession)
    professionButton(selectedProfession)
}, [selectedProfession])


  useSelect2(".inline-multiselectP4", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedProfession);

  return (
    <select
      className="inline-multiselect inline-multiselectP4"
      multiple="multiple"
      value={selectedProfession}
    >
      <option value="">--Select--</option>
      {profession && profession.map((professionList, index)  => {

                                        return (

                                            <option value={professionList._id}>{professionList.name}</option>
                                        )

                                    })
                                    }
    </select>
  );
}
