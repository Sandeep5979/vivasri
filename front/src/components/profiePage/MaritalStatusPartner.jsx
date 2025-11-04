import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import useSelect3 from "../../hooks/useSelect3";

export default function MaritalStatusPartner({maritalStatusButton, searchMarital_status}) {
//console.log('marital status', searchMarital_status)
const [maritalStatus, setMaritalStatus] = useState([])
const [selected, setSelected] = useState(searchMarital_status)
 const selectRef = useRef(null);

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



 useSelect3(".inline-multiselect3", {
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

  useEffect(() => {
    if (Array.isArray(searchMarital_status) && maritalStatus.length > 0) {
      const currentVal = $(".inline-multiselect3").val() || [];
      const newVal = searchMarital_status.map(String);
      const hasChanged =
        currentVal.length !== newVal.length ||
        !currentVal.every((v) => newVal.includes(v));

      if (hasChanged) {
        $(".inline-multiselect3").val(newVal).trigger("change");
        setSelected(newVal);
      }
    }
  }, [searchMarital_status, maritalStatus]);


  return (
    <select
    ref={selectRef}
      className="inline-multiselect inline-multiselect3 form-select"
      multiple="multiple"
       
      style={{border:'0'}}
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
