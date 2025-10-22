import React, { useState } from "react";

const DaysMonth = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Generate years (1900 → current year)
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1900; y--) {
    years.push(y);
  }

  // Months
  const months = [
    { value: 1, label: "January", days: 31 },
    { value: 2, label: "February", days: 28 }, // handle leap separately
    { value: 3, label: "March", days: 31 },
    { value: 4, label: "April", days: 30 },
    { value: 5, label: "May", days: 31 },
    { value: 6, label: "June", days: 30 },
    { value: 7, label: "July", days: 31 },
    { value: 8, label: "August", days: 31 },
    { value: 9, label: "September", days: 30 },
    { value: 10, label: "October", days: 31 },
    { value: 11, label: "November", days: 30 },
    { value: 12, label: "December", days: 31 },
  ];

  // Leap year check
  const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

  // Filter months based on selected day
  const filteredMonths = months.filter((m) => {
    if (!day) return true; // no day selected → show all months
    if (m.value === 2) {
      // February case
      if (day <= 28) return true;
      if (day === 29 && year && isLeapYear(year)) return true;
      return false;
    }
    return day <= m.days;
  });

  return (
    <div className="flex gap-2">
      {/* Day */}
      <select
        value={day}
        onChange={(e) => {
          setDay(Number(e.target.value));
          setMonth(""); // reset month when day changes
        }}
        className="border p-2 rounded"
      >
        <option value="">Day</option>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      {/* Month (filtered) */}
      <select
        value={month}
        onChange={(e) => setMonth(Number(e.target.value))}
        className="border p-2 rounded"
        disabled={!day} // disable until day is selected
      >
        <option value="">Month</option>
        {filteredMonths.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>

      {/* Year */}
      <select
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        className="border p-2 rounded"
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DaysMonth;
