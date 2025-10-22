import { useState, useRef, useEffect } from "react";

export default function AgeDropdown({ min = 18, max = 62, labelSuffix = " years", placeholder = "Min Age", searchMaxAgeButton, searchMinAgeButton , minValue}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    //console.log(selected)
    if(minValue === 1){
    searchMinAgeButton(selected)
    } else {
      searchMaxAgeButton(selected)
    }
  }, [selected])
  
  
  return (
    <div ref={dropdownRef} className="dropdown">
      {/* Dropdown toggle */}
      <div
        className="dropdown-toggle"
        onClick={() => setOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        <span className="selectedValue">{selected ? selected + labelSuffix : placeholder}</span>
        
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="dropdown-menu active">
          <div className="numbers-grid">
            {numbers.map((num) => (
              <div
                key={num}
                className={`number ${selected === num ? "active" : ""}`}
                
                onClick={() => {
                  setSelected(num);
                  setOpen(false);
                }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
