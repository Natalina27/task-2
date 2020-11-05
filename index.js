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

//form
const form = document.getElementById('form');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const mailLabel = document.createElement('label');
const mailInput = document.createElement('input');
const passwordLabel = document.createElement('label');
const passwordInput = document.createElement('input');
const checkboxLabel = document.createElement('label');
const checkboxInput = document.createElement('input');
const button = document.createElement('button');


//mail
form.appendChild(div1);
div1.className = 'form-group';

mailLabel.setAttribute('for', 'email');
mailLabel.innerText = 'Электропочта';

mailInput.setAttribute('type', 'email');
mailInput.className = "form-control";
mailInput.setAttribute('id', 'email');
mailInput.setAttribute('placeholder', 'Введите свою электропочту');
mailInput.setAttribute('autocomplete', 'username');

div1.appendChild(mailLabel);
div1.appendChild(mailInput);

//password
form.appendChild(div2);
div2.className = 'form-group';

passwordLabel.setAttribute('for', 'password');
passwordLabel.innerText = 'Пароль';

passwordInput.setAttribute('type', 'password');
passwordInput.className = "form-control";
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('placeholder', 'Введите пароль');
passwordInput.setAttribute('autocomplete', 'current-password');

div2.appendChild(passwordLabel);
div2.appendChild(passwordInput);

//checkbox
form.appendChild(div3);
div3.className = 'form-group form-check';

checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.className = "form-check-input";
checkboxInput.setAttribute('id', 'exampleCheck1');

checkboxLabel.setAttribute('for', 'exampleCheck1');
checkboxLabel.innerText = 'Запомнить меня';

div3.appendChild(checkboxInput);
div3.appendChild(checkboxLabel);

//button
form.appendChild(button);
button.setAttribute('type', 'submit');
button.className = 'btn btn-primary';
button.innerText = 'Вход';

//2
const generateError = function (text) {
  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

const removeValidation = function () {
  const errors = form.querySelectorAll('.error')
  errors.forEach(item => item.remove());
}

const fields = form.querySelectorAll('.form-control');

// проверка полей на пустоту
const checkFieldsNotEmpty = function () {
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
        'password': passwordInput.value,
        'remember': checkboxInput.checked
      });
    });
