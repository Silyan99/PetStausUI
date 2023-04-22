import { toast } from "react-toastify";
import config from "./config/config";

const clearForm = (form) => {
  var properties = Object.keys(form);
  for (let index = 0; index < properties.length; index++) {
    const element = form[properties[index]];
    
    if (element.nodeName && (element.nodeName.toLowerCase() === "input" || element.nodeName.toLowerCase() === "textarea")) {
      element.value = "";
    }
  }
};

const ValidateAllFields=(data)=>{
  var propertiesArr = Object.keys(data);
  var isValid = true;
  for (let index = 0; index < propertiesArr.length; index++) {
    if(propertiesArr[index]!=='PhotoFile' && IsNullEmptyOfUndefined(data[propertiesArr[index]])){
      toast.error(`${propertiesArr[index]} is required`,config.ToastConfig);
      isValid = false;
      break;
    }
  }
  return isValid;
}

const CheckTyped=(value)=>{
  switch (typeof(value)) {
    case 'number':
      return value !== 0;
    case 'string':
      return value.trim() !== "";     
    case 'object':
      return Object.keys(value).length > 0;
    case "boolean":
      return true;
    default:
      return false;
  }
}

const FormsOperations = {
  clearForm,
};

const IsNullEmptyOfUndefined =(value)=>{
  return !(value && CheckTyped(value));
}

const Get12HrsFormat = (timeString) => {
  return new Date("1970-01-01T" + timeString + "Z").toLocaleTimeString(
    "en-US",
    { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
  );
};

const GetTimeForTimeControl=(val:String)=>{
  return val.substring(0,5);
}

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

export { FormsOperations,IsNullEmptyOfUndefined,Get12HrsFormat,ValidateEmail,RandomString, GetTimeForTimeControl,ValidateAllFields};
