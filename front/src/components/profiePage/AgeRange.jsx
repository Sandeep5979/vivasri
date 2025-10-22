import { useState } from "react";

export default function AgeRange({changeShow, name, minAgeChange, maxAgeChange, minAgeChangeRange, maxAgeChangeRange, searchMinAge, searchMaxAge}) {
  const [minAge, setMinAge] = useState(searchMinAge || 18);
  const [maxAge, setMaxAge] = useState(searchMaxAge || 45);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > maxAge) {
      setMinAge(maxAge);
      if(changeShow === 0){
      minAgeChange(maxAge)
      }
    } else { 
      setMinAge(value);
      if(changeShow === 0){
      minAgeChange(value)
      }
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < minAge) {
      setMaxAge(minAge);
      if(changeShow === 0){
      maxAgeChange(minAge)
      }
    } else {
      setMaxAge(value);
      if(changeShow === 0){
      maxAgeChange(value)
      }
    }
  };

  const handleMouseUpMin = () => {
    if(changeShow === 1){ 
    minAgeChangeRange(minAge)
    }
  }
  const handleMouseUpMax = () => {
    if(changeShow === 1){ 
    maxAgeChangeRange(maxAge)
    }
  }

  return (
    <div className="range-container">
      <label>{name ? name:`Filter By Age`}</label>
      <div className="slider">
        <input
          type="range"
          className="minAge"
          min={18}
          max={60}
          value={minAge}
          onChange={handleMinChange}
          onMouseUp={handleMouseUpMin}
          onTouchEnd={handleMouseUpMin}
        />
        <input
          type="range"
          className="maxAge"
          min={18}
          max={60}
          value={maxAge}
          onChange={handleMaxChange}
          onMouseUp={handleMouseUpMax}
          onTouchEnd={handleMouseUpMax}
          
        />
      </div>

      <div className="values">
        <input type="text" className="minAgeValue" value={minAge} readOnly />
        <input type="text" className="maxAgeValue" value={maxAge} readOnly />
      </div>
    </div>
  );
}
