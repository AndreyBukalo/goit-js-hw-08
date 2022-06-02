import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {};
savedInputText();
refs.form.addEventListener('input', throttle(onTextInput, 500));
refs.form.addEventListener('submit', onFormReset);


function onTextInput(event) {
  formData[event.target.name] = event.target.value;
  const stringData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringData);
  console.log(formData);
}

function savedInputText() {
  const textValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (textValue === null) {
    return;
  }
  refs.input.value = textValue['email'];
  refs.textarea.value = textValue['message'];
}

function onFormReset(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
