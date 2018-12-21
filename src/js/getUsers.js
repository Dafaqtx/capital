fetch('https://jsonplaceholder.typicode.com/users') // обращаемся по ссылке
.then(function(response) { // получаем данные
  return response.json();
 })
.then(function(users) { // обрабатыаем данные
  users.forEach(function(el) { // проходимся по всем юзерам и выполняем для каждого элемента функцию
    let userId      = el.id; // записываем id юзера в переменную
    let userName    = el.name; // записываем имя юзера в переменную
    let userAddress = el.address.street; // записываем адрес в переменную
    let userPhone   = el.phone; // записываем телефон в переменную
    let userList    = document.querySelector('.users__list'); // находим див по классу
    let li          = document.createElement('li'); // создаем элемент списка

    li.setAttribute('id', `user-id__${userId}`); // добавляем ему аттрибут id равный id пришедшего юзера
    li.setAttribute('class','user__item list-group-item'); // добавляем классы для бутстрапа
    li.setAttribute('data-address', userAddress ); // добавляем классы для бутстрапа
    li.setAttribute('data-phone', userPhone ); // добавляем классы для бутстрапа

    userList.appendChild(li); // добавляем элемент списка в сам список

    li.innerHTML += `${userId} ${userName}`; // выводим текст айдишника и имя в этом элементе списка
  });

}) 