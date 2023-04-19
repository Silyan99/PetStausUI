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

export { FormsOperations,IsNullEmptyOfUndefined,Get12HrsFormat };
