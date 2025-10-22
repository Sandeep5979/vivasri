import { useEffect, useState } from "react";
import useSelect2 from "../../hooks/useSelect2";

export default function AnnualIncome({annualIncomeButton, searchAnnual_income}) {
  
  const [selectedAnnualIncome, setSelectedAnnualIncome] = useState(searchAnnual_income)
  
  
  useEffect(() => {

    if(selectedAnnualIncome){

      annualIncomeButton(selectedAnnualIncome)
    }

  }, [selectedAnnualIncome])


  useSelect2(".inline-multiselectAA4", {
    placeholder: "Select",
    closeOnSelect: false
  }, setSelectedAnnualIncome);

  return (
    <select
      className="inline-multiselect inline-multiselectAA4"
      multiple="multiple"
      value={selectedAnnualIncome}
    >
      <option value="">-- Select --</option>
      <option value="0-100000">Upto 1 Lakh</option>
      <option value="100000-200000">1 Lakh - 2 Lakh</option>
      <option value="200000-400000">2 Lakh - 4 Lakh</option>
      <option value="400000-700000">4 Lakh - 7 Lakh</option>
      <option value="700000-1000000">7 Lakh - 10 Lakh</option>
      <option value="1000000-1500000">10 Lakh - 15 Lakh</option>
      <option value="1500000-2000000">15 Lakh - 20 Lakh</option>
      <option value="2000000-3000000">20 Lakh - 30 Lakh</option>
      <option value="3000000-5000000">30 Lakh - 50 Lakh</option>
      <option value="5000000-7500000">50 Lakh - 75 Lakh</option>
      <option value="7500000-10000000">75 Lakh - 1 Crore</option>
      <option value="10000000-30000000">1 Crore - 3 Crore</option>
      <option value="30000000-50000000">3 Crore - 5 Crore</option>
      <option value="Above 50000000">Above 5 Crore</option>
      <option value="Not Applicable">Not Applicable</option>
    </select>
  );
}
