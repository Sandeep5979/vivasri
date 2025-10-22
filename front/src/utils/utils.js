export const validateMobile = (value) => {
    const regex = /^\d{10}$/;
    return regex.test(value);
};
 export const  isValidEmail = (email)  => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


export const ageCalculate = (dob) => {
  if(dob){
  const dobNew = new Date(dob);
  const today = new Date();

return today.getFullYear() - dobNew.getFullYear();
  } else {
    return
  }
}

export const decimalToFeetInches = (decimalFeet) => {
  if(decimalFeet){
  const feet = Math.floor(decimalFeet);
  const inches = Math.round((decimalFeet - feet) * 12);
  return `${feet} ft ${inches} in`;
  } else {
    return 
  }
}


function formatNumber(num) {
  if (num >= 10000000) return `${num / 10000000} Crore`;
  if (num >= 100000) return `${num / 100000} Lakh`;
  return num.toString();
}

export const formatIndianCurrencyRange = (input) => {
  //input = input.toLowerCase().trim();
/* if(input !==''){
  
  if (input === "Not Applicable") return "Not Applicable";

  
  if (input.startsWith("Upto")) {
    const value = Number(input.replace("Upto", "").trim());
    return `Upto ${formatNumber(value)}`;
  }

  
  if (input.startsWith("Above")) {
    const value = Number(input.replace("Above", "").trim());
    return `Above ${formatNumber(value)}`;
  }

  
  if (input.includes("-")) {
    const [start, end] = input.split("-").map(Number);
    return `${formatNumber(start)} to ${formatNumber(end)}`;
  }

  
  const num = Number(input);
  return formatNumber(num);
} else {
  return
}
  */
}


