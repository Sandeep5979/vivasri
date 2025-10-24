import { useState } from "react";

function cmToFeetInches(cm) {
  let inches = Math.round(cm / 2.54);
  let feet = Math.floor(inches / 12);
  let remainingInches = inches % 12;
  return `${feet}'${remainingInches}" (${cm}cm)`;
}

export default function HeightRange({changeShow, name, minHeightChange, maxHeightChange, minHeightChangeRange, maxHeightChangeRange, searchMinHeight, searchMaxHeight}) {
  const [minHeight, setMinHeight] = useState(searchMinHeight || 120);
  const [maxHeight, setMaxHeight] = useState(searchMaxHeight || 183);

  // Ensure min ≤ max
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setMinHeight(value > maxHeight ? maxHeight : value);
    if(changeShow === 0){
    minHeightChange(value > maxHeight ? maxHeight : value)
    }

  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxHeight(value < minHeight ? minHeight : value);
    if(changeShow === 0){
    maxHeightChange(value < minHeight ? minHeight : value)
    }
  };


  const handleMouseUpMin = () => {
    if(changeShow === 1){ 
    minHeightChangeRange(minHeight)
    }
  }
  const handleMouseUpMax = () => {
    if(changeShow === 1){ 
    maxHeightChangeRange(maxHeight)
    }
  }

  return (
    <div className="range-container2">
      { name && <label>{name ? name : ``}</label> }
      <div className="slider">
        <input
          type="range"
          className="minHeight"
          min={120}
          max={200}
          value={minHeight}
          onChange={handleMinChange}
          onMouseUp={handleMouseUpMin}
          onTouchEnd={handleMouseUpMin}
        />
        <input
          type="range"
          className="maxHeight"
          min={120}
          max={200}
          value={maxHeight}
          onChange={handleMaxChange}
          onMouseUp={handleMouseUpMax}
          onTouchEnd={handleMouseUpMax}
        />
      </div>

      <div className="values valuebetween">
        <input
          type="text"
          className="minHeightValue"
          value={cmToFeetInches(minHeight)}
          readOnly
        />
        <input
          type="text"
          className="maxHeightValue"
          value={cmToFeetInches(maxHeight)}
          readOnly
        />
      </div>
    </div>
  );
}
