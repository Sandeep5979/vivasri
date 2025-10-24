import { useEffect, useState } from "react";


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


const handleChange = (e) => {
    const { name, value } = e.target;
    
    setSelected((prev) => ({
      
      [name]: value,
    }));


  }
  
  
  
  
  

  
    

  return (
    <div className="hormformrow">
      <label htmlFor="">I’m looking for</label>
      <select className="form-select"
        name="lookingfor"
        onChange={handleChange}
         value={selected.lookingfor} 
         
      >
        <option value="">Select</option>
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
