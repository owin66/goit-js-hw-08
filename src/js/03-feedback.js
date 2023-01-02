import throttle from 'lodash.throttle';

const feedbackFormData = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

feedbackFormData.addEventListener('submit', onFormSubmit);
feedbackFormData.addEventListener('input', throttle(onTextAreaInput, 500));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(e) {
  formData = localStorage.getItem(STORAGE_KEY);
  formData = JSON.parse(formData) || {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const parsSaveText = JSON.parse(savedMessage);
    Object.entries(parsSaveText).forEach(([name, value]) => {
      feedbackFormData.elements[name].value = value;
    });
  }
}
