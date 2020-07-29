
export default class Api {
    constructor({ url, headers = {} }) {
      this.url = url;
      this.headers = headers;
  }

getInitialCards(){
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    })
    .then(item =>{
        if (item.ok) {
            return item.json();
          } 
        return Promise.reject(`Ошибка: ${item.status}`)
        })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

getUserInfo(){
  return fetch(`${this.url}/users/me`, {
    headers: this.headers
  })
    .then(res =>{
      if (res.ok) {
          return res.json();
        } 
        return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

changeAvatar(form){
  return fetch(`${this.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
          avatar: form
        })
  })
  .then(res => { 
    if (res.ok) { 
    return res.json(); 
    } 
  return Promise.reject(`Ошибка: ${res.status}`)
  })
}

addCard(item){
  return fetch(`${this.url}/cards`, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify(item)
  })
  .then(item =>{
    if (item.ok) {
        return item.json();
      } 
      return Promise.reject(`Ошибка: ${res.status}`)
})
.catch((err) => {
  console.log(err); // выведем ошибку в консоль
});
}

changeUserInfo(profileInfo){
  return fetch(`${this.url}/users/me`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
        name: profileInfo.profileName,
        about: profileInfo.info
    })
  })
  .then(res =>{
    if (res.ok) {
        return res.json();
      } 
      return Promise.reject(`Ошибка: ${res.status}`)
})
.catch((err) => {
  console.log(err); // выведем ошибку в консоль
});
}

deleteCard(item){
return fetch(`${this.url}/cards/${item}`, {
  method: 'DELETE',
  headers: this.headers
})
.then(res =>{
  if (res.ok) {
      return res.json();
    } 
    return Promise.reject(`Ошибка: ${res.status}`)
})
.catch((err) => {
console.log(err); // выведем ошибку в консоль
});
}

setLike(item) {
  return fetch(`${this.url}/cards/likes/${item}`, {
    method: 'PUT',
    headers: this.headers
  })
  .then(res =>{
    if (res.ok) {
        return res.json();
      } 
      return Promise.reject(`Ошибка: ${res.status}`)
})
.catch((err) => {
  console.log(err); // выведем ошибку в консоль
});
}

removeLike(item) {
return fetch(`${this.url}/cards/likes/${item}`, {
  method: 'DELETE',
  headers: this.headers
})
.then(res =>{
  if (res.ok) {
      return res.json();
    } 
    return Promise.reject(`Ошибка: ${res.status}`)
})
.catch((err) => {
console.log(err); // выведем ошибку в консоль
});
}
}

