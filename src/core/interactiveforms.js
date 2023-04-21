const clearForm = (form) => {
  var properties = Object.keys(form);
  for (let index = 0; index < properties.length; index++) {
    const element = form[properties[index]];
    
    if (element.nodeName && (element.nodeName.toLowerCase() === "input" || element.nodeName.toLowerCase() === "textarea")) {
      element.value = "";
    }
  }
};

const FormsOperations = {
  clearForm,
};

const IsNullEmptyOfUndefined =(value)=>{
  return !(value && value.trim() !== "");
}
const Get12HrsFormat = (timeString) => {
  return new Date("1970-01-01T" + timeString + "Z").toLocaleTimeString(
    "en-US",
    { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
  );
};

const ValidateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
 
const RandomString =(length)=> {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export { FormsOperations,IsNullEmptyOfUndefined,Get12HrsFormat,ValidateEmail,RandomString};
