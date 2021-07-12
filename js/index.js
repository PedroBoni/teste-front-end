window.onload = function () {
  if (isEmpty(localStorage.getItem(usersKey))) loadInitialValue();
  updateFields();
  initializeEvents();
};

let formSchema = {
  initialValue: {
    frmNameA: "",
    frmEmailC: "",
    cpf: "",
    frmPhoneNumA: "",
  },
  validations: {
    frmNameA: validateName,
    frmEmailC: validateEmail,
    cpf: validateCPF,
    frmPhoneNumA: validatePhone,
  },
  masks: {
    cpf: cpfMask,
    frmPhoneNumA: telMask,
  },
};

const getFields = () => {
  let res = {};
  Object.keys(formSchema.initialValue).forEach(
    (key) => (res[key] = document.getElementById(key))
  );
  return res;
};

const updateFields = () => {
  let fields = getFields();
  Object.keys(fields).forEach((key) => {
    fields[key].value = formSchema.initialValue[key];
  });
};

const handleChange = (e) => {
  let id = e.target.id;
  let fields = getFields();

  let mask = formSchema.masks[id];
  let validation = formSchema.validations[id];

  formSchema.initialValue[id] = mask
    ? mask(fields[id].value, false)
    : fields[id].value;
  console.log(validation(fields[id].value));
  if (validation && !validation(fields[id].value))
    fields[id].offsetParent.classList.add("error");
  else fields[id].offsetParent.classList.remove("error");

  updateFields();
};

const initializeEvents = () => {
  let fields = getFields();
  Object.keys(formSchema.initialValue).forEach((key) => {
    fields[key].addEventListener("change", handleChange);
    fields[key].addEventListener("input", handleChange);
    fields[key].addEventListener("textInput", handleChange);
  });
};
