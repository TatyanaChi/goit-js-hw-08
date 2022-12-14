import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const refs = {
  formRef: document.querySelector('.feedback-form'),
  inputEmailRef: document.querySelector('.feedback-form input'),
  inputMessageRef: document.querySelector('.feedback-form textarea'),
};

refs.formRef.addEventListener('input', throttle(onFormInput, 500));
refs.formRef.addEventListener('submit', onFormSubmit);
savedMessage();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function savedMessage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    const { email, message } = refs.formRef.elements;
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
