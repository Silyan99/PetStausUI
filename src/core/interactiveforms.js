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

export { FormsOperations };
