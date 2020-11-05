/**
 * Доработать форму из 1-го задания.
 *
 * Добавить обработчик сабмита формы.
 *
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 *
 * Обязательно!
 * 1. При сабмите формы страница не должна перезагружаться
 * 2. Генерировать ошибку если пользователь пытается сабмитить форму с пустыми или содержащими только пробел(ы) полями.
 * 3. Если поля формы заполнены и пользователь нажимает кнопку Вход → вывести в консоль объект следующего вида
 * {
 *  email: 'эмейл который ввёл пользователь',
 *  password: 'пароль который ввёл пользователь',
 *  remember: 'true/false'
 * }
*/

// РЕШЕНИЕ
const form = document.getElementById('form');
const createElement = (el) => document.createElement(el);
const button = createElement('button');
const divMail = createElement('div');
const divPass = createElement('div');
const divCheckbox = createElement('div');

const createLabel = ({div, labelValue, labelText}) => {
  const label = createElement('label');
  label.setAttribute('for', labelValue);
  label.innerText = labelText;
  div.appendChild(label);
}
const createInput = ({div, cls, labelValue, idValue,  placeholder}) => {
  const input = createElement('input');

  input.setAttribute('type', labelValue);
  input.className = cls;
  input.setAttribute('id', idValue);
  input.setAttribute('placeholder', placeholder);

  div.appendChild(input);

  return input;
}

//mail
divMail.className = 'form-group';
createLabel({div: divMail, labelValue: 'email', labelText:'Электропочта'});
const mailInput = createInput({div: divMail, cls: 'form-control', labelValue: 'email',idValue: 'email', placeholder: 'Введите свою электропочту'});

//password
divPass.className = 'form-group';
createLabel({div: divPass, labelValue: 'password', labelText: 'Пароль'});
const passInput = createInput({div: divPass, cls: 'form-control',labelValue:  'password', idValue: 'password',placeholder: 'Введите пароль'});

//checkbox
divCheckbox.className = 'form-group form-check';
const checkboxInput = createInput({div: divCheckbox, cls: 'form-check-input', labelValue: 'checkbox', idValue:'exampleCheck1'});
createLabel({div: divCheckbox, labelValue: 'checkbox', labelText: 'Запомнить меня'});

//button
button.setAttribute('type', 'submit');
button.className = 'btn btn-primary';
button.innerText = 'Вход';

form.appendChild(divMail);
form.appendChild(divPass);
form.appendChild(divCheckbox);
form.appendChild(button);

//2
const generateError = (text) => {
  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

const removeValidation = () => {
  const errors = form.querySelectorAll('.error')
  errors.forEach(item => item.remove());
}

const fields = form.querySelectorAll('.form-control');

const checkFieldsNotEmpty = () => {
  fields.forEach(item => {
    if(!item.value) {
      const error = generateError(' Cannot be blank');
      item.before(item, error);
    }
  })
}

form.addEventListener(
    'submit',
    function func(e){
      e.preventDefault();
      removeValidation();
      checkFieldsNotEmpty();
      console.log({
        'email': mailInput.value,
        'password': passInput.value,
        'remember': checkboxInput.checked
      });
    });
