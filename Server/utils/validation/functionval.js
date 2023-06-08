//triming the extra space
export const trim = (str) => {
    str = str.trim();
    return str;
  };
  
  //convert all the words in email in to lowercase;=============================================
  export const toLowercase = (mail) => {
    mail = mail.toLowerCase();
    return mail;
  };
  
  // trim all the string=========================================================================
  
  export const loopmethod = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        obj[key] = obj[key].trim();
      }
    }
    return obj;
  };
  