import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function ManglikStatus({manglikButton, searchManglik}) {
  
  const [selectedManglik, setSelectedManglik] = useState(searchManglik)
  
  
useEffect(() => {
    
    if(selectedManglik)
    manglikButton(selectedManglik)
}, [selectedManglik])


  useSelect2(".inline-multiselectMM4", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedManglik);

  return (
    <select className="inline-multiselect inline-multiselectMM4"
    value={searchManglik}
    >
      <option value="">--Select--</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  );
}
