"use strict";fetch("https://jsonplaceholder.typicode.com/users").then(function(b){return b.json()}).then(function(b){b.forEach(function(c){var d=c.id,f=c.name,g=c.address.street,h=c.phone,i=document.querySelector(".users__list"),j=document.createElement("li");j.setAttribute("id","user-id__"+d),j.setAttribute("class","user__item list-group-item"),j.setAttribute("data-address",g),j.setAttribute("data-phone",h),i.appendChild(j),j.innerHTML+=d+" "+f})});var usersList=document.querySelector(".users__list"),modal=document.querySelector(".modal"),closeBtn=modal.querySelector(".close");function insertData(b){var c=modal.querySelector("#userName"),d=modal.querySelector("#userPhone"),f=b.dataset.address,g=b.dataset.phone;c.innerText=f,d.innerText=g}function showModal(){modal.classList.add("modal--active")}function closeModal(){modal.classList.remove("modal--active")}function popUp(b){insertData(b),showModal()}usersList.addEventListener("click",function(b){popUp(b.target)}),closeBtn.addEventListener("click",function(){closeModal()});