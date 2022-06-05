import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('submit', onFormReset);
form.addEventListener('input', throttle(onTextInput, 500));
savedInputText();

function onTextInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function savedInputText() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (const key in savedText) {
    if (key) {
      form[key].value = savedText[key];
      formData = savedText;
    }
  }
};

function onFormReset(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {}
};





