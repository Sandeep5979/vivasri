import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function MaritalStatus({maritalStatusButton, searchMarital_status}) {

const [maritalStatus, setMaritalStatus] = useState([])
const [selected, setSelected] = useState(searchMarital_status)

   const fetchMaritalStatusList = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/marital-status`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setMaritalStatus(data.data)
      }
}
useSelect2(".inline-multiselect3", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelected);

  useEffect(() => {
    
    if(selected)
    maritalStatusButton(selected)
  }, [selected])

useEffect(() => {
fetchMaritalStatusList()

}, [])

  return (
    <select
      className="inline-multiselect inline-multiselect3"
      multiple="multiple"
      value={selected}
    >
      <option value="">-- Select --</option>
      {maritalStatus && maritalStatus.map((maritalList, index)  => {

                                            return (

                                                <option value={maritalList._id}>{maritalList.name}</option>
                                            )

                                        })
                                        }
    </select>
  );
}
