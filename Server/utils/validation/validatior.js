export const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z]{4,20}$/; 
    return nameRegex.test(name);
  };
  
  export const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  
  export const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,15}$/;
    return passwordRegex.test(password);
  };
  
  
  export const isValid =  (input)=> {
    if (typeof input === "undefined" || input === null) return false;
    if (typeof input === "string" && input.trim().length > 0&& input) return true;
    return false;
  };
  
  export const isValidarr = (arr) => {
    if (arr && Array.isArray(arr))  return true;
    
    return false;;
  }
  
  
  export  const checkFormat=function(input)
  {
    if (!input) return false
    input = input.trim();
    if (input == "") return false;
    else return input
      
  }
  