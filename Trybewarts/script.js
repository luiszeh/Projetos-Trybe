const inputLogin = document.querySelector('#input-login');
const inputPass = document.querySelector('#input-pass');
const btnLogin = document.querySelector('.submit-btn-login');
const checkAgree = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const main = document.querySelector('#main');
const ulFormReturn = document.querySelector('#form-return').children[0];
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputCasa = document.querySelector('#house');
const inputTextarea = document.querySelector('#textarea');

function alertLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', alertLogin);

btnSubmit.disabled = true;
function checkSelected() {
  if (checkAgree.checked === true) {
    btnSubmit.disabled = false;
    btnSubmit.classList.add('activated-btn');
  } else {
    btnSubmit.disabled = true;
    btnSubmit.classList.remove('activated-btn');
  }
}
checkAgree.addEventListener('click', checkSelected);

function contador() {
  const lenText = document.querySelector('textarea').textLength;
  const counter = document.querySelector('#counter');
  counter.innerText = 500 - lenText;
}
textArea.addEventListener('keyup', contador);

function clearMain() {
  main.innerHTML = ' ';
}

const getSelectedRadio = (elementName) => {
  const inputElement = document.getElementsByName(elementName);
  let valueInput;
  for (let index = 0; index < inputElement.length; index += 1) {
    if (inputElement[index].checked) {
      valueInput = inputElement[index].value;
    }
  }
  return valueInput;
};

const getSelectedCheckbox = (elementName) => {
  const inputElement = document.getElementsByName(elementName);
  const selectedValues = [];
  for (let index = 0; index < inputElement.length; index += 1) {
    if (inputElement[index].checked) {
      selectedValues.push(inputElement[index].value);
    }
  }
  return selectedValues.join(', ');
};

function createResult() {
  ulFormReturn.classList.add('form-return-style');
  ulFormReturn.setAttribute('id', 'evaluation-form');
  const formReturn = document.createElement('li');
  formReturn.innerText = `Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputEmail.value}
  Casa: ${inputCasa.value}
  Família: ${getSelectedRadio('family')}
  Matérias: ${getSelectedCheckbox('conteudo')}
  Avaliação: ${getSelectedRadio('rate')}
  Observações: ${inputTextarea.value}`;
  ulFormReturn.appendChild(formReturn);
}

const submitForm = () => {
  createResult();
  clearMain();
};

btnSubmit.addEventListener('click', submitForm);
