const usersList  = document.querySelector('.users__list'); // получаем контейнер юзеров
const modal      = document.querySelector('.modal'); // получаем модальное окно
const closeBtn   = modal.querySelector('.close'); // получаем кнопку закрытия модального окна

// функция вставки данных в модальное окно из дата аттрибутов определенного юзера
function insertData(element) {
  const modalAddress = modal.querySelector('#userName');
  const modalPhone   = modal.querySelector('#userPhone');
  const UserAddress  = element.dataset.address;
  const UserPhone    = element.dataset.phone;

  modalAddress.innerText = UserAddress;
  modalPhone.innerText = UserPhone;
}

// функиця показа модального окна
function showModal() {
  // modal.style.display = 'block';
  modal.classList.add("modal--active");
}


// функция закрыти модального окна
function closeModal() {
  // modal.style.display = 'none';
  modal.classList.remove("modal--active");
}


// функция обработчик, выполняющая несколько функций
function popUp(element) {
  insertData(element);
  showModal();
}

// вешаем обработчик события клик на спискок, срабатывает фунция, куда и передаем элемент на который был клик
usersList.addEventListener('click', function(e) {
  popUp(e.target);
});


// вешаем обработчик события клик на кнопки закрытия модального окна
closeBtn.addEventListener('click', function() {
  closeModal();
});