import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  formRef: document.querySelector('.feedback-form'),
  inputEmailRef: document.querySelector('input[type="email"]'),
  inputMessageRef: document.querySelector('input[name="message"]'),
};

refs.formRef.addEventListener('input', throttle(onFormInput, 500));
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  JSON.parse(localStorage.getItem(STORAGE_KEY));

  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
