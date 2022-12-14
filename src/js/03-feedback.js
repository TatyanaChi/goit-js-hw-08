import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  formRef: document.querySelector('.feedback-form'),
  // inputEmailRef: document.querySelector('input[type="email"]'),
  // inputMessageRef: document.querySelector('input[name="message"]'),
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
// refs.formRef.addEventListener('input', e => {
//   const { email, message } = e.target.value;
//   const back = {
//     email: email.value,
//     message: message.value,
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(back));
// });

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function savedMessage() {
  // const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const data = localStorage.getItem(STORAGE_KEY);
  // localStorage.setItem(STORAGE_KEY, data);
  if (data) {
    console.log(data);
    // email.value = data.email;
    // message.value = data.message;
    refs.formRef.value = data.formData;
  }

  // refs.inputEmailRef.textContent = localStorage.getItem(STORAGE_KEY) || '';
  // refs.formRef.value = localStorage.getItem(STORAGE_KEY) || '';

  // if (data) {
  //   // refs.inputEmailRef.value = data.formData.email;
  //   // refs.inputMessageRef.value = data.formData.message;
  //   // refs.formRef.value = localStorage.getItem(STORAGE_KEY) || '';
  //
  // }
}
