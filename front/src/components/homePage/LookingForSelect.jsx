import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function LookingForSelect({searchLookingButton}) {
 
  const [lookingFor, setLookingFor] = useState([])
  const [selected, setSelected] = useState([]);
  
  
  const fetchCreateProfileFor = async () => {

  const res = await fetch(`${process.env.REACT_APP_BASE_URL_API}/api/front/looking-for`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        });

      const data = await res.json();
      if(data.status){

        setLookingFor(data.data)
      }
}

useEffect(() => {
  
fetchCreateProfileFor()

}, [])

useEffect(() => {

searchLookingButton(selected)   

}, [selected])


  
  
  
  useSelect2(".inline-multiselect222", {
    placeholder: "Create Profile For",
    closeOnSelect: false,
  }, setSelected);
  

  
    

  return (
    <div className="hormformrow">
      <label htmlFor="">I’m looking for</label>
      <select
        
        className="inline-multiselect inline-multiselect222"
        multiple="multiple"
         value={selected} 
         
      >
        {lookingFor && lookingFor.map((profileList, index)  => {

                            return (

                                <option key={index} value={profileList._id}>{profileList.name}</option>
                            )

                          })
                        }
      </select>
    </div>
  );
}
