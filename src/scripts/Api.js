
export default class Api {
  constructor() {

  }

getInitialCards(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-13/cards',{
      headers: {
        authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f'
      }
    })
    .then(response =>{
        if (response.ok) {
            return response.json();
          } 
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

getUserInfo(){
  return fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me', {
    headers: {
      authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f'
    }
  })
    .then(res =>{
      if (res.ok) {
          return res.json();
        } 
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

changeAvatar(form){
  return fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      avatar: form
    })
  })
}

addCard(item){
  return fetch('https://mesto.nomoreparties.co/v1/cohort-13/cards', {
    method: 'POST',
    headers: {
      authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
  .then(item =>{
    if (item.ok) {
        return item.json();
      } 
})
.catch((err) => {
  console.log(err); // выведем ошибку в консоль
});
}

changeUserInfo(profileInfo){
  return fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: profileInfo.profileName,
      about: profileInfo.info
    })
  })
}

deleteCard(item){
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-13/cards/${item}`, {
    method: 'DELETE',
    headers:{
      authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f'
    }
})}

setLike(item) {
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-13/cards/likes/${item}`, {
      method: 'PUT',
      headers: {
          authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f'
      }
  })
}
removeLike(item) {
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-13/cards/likes/${item}`, {
      method: 'DELETE',
      headers: {
          authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f'
      }
  })
}
}

