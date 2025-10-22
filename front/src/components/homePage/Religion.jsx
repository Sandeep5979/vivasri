import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "select2";

export default function ReligionSelect({searchReligionButton}) {
  const selectRefReligion = useRef(null);
  const [religion, setReligion] = useState([])
  const [selected, setSelected] = useState([]);

  
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

useEffect(() => {
fetchReligion()

}, [])

useEffect(() => {

//console.log(selected)
searchReligionButton(selected)   

}, [selected])

  
  
  useEffect(() => {
    const $el = $(selectRefReligion.current);

    if ($el.length && !$el.hasClass("select2-hidden-accessible")) {
      $el.select2({
        placeholder: "Religion",
        closeOnSelect: false,
      });
    }

    
    $el.on("change", () => {
      const values = $el.val();
      setSelected(values || []);
      //console.log("Selected religions:", values);
    });

    return () => {
      if ($el.length) {
        $el.off("change"); 
        if ($el.hasClass("select2-hidden-accessible")) {
          try {
            $el.select2("destroy");
          } catch (e) {
            console.warn("Select2 destroy skipped:", e.message);
          }
        }
      }
    };
  }, []);

  return (
    <div className="hormformrow">
      <label htmlFor="">Religion</label>
      <select ref={selectRefReligion} multiple className="inline-multiselect">
        {religion && religion.map((religionList, index)  => {

                            return (

                                <option key={index} value={religionList._id}>{religionList.name}</option>
                            )

                          })
                        }
      </select>
    </div>
  );
}
