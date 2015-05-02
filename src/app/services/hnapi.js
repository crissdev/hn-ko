import Firebase from 'firebase';

const endpoint = 'https://hacker-news.firebaseio.com/v0/';
var connection = new Firebase(endpoint);


export default class HNAPI {
  static newest() {
    return new Promise((resolve) => {
      connection.child('topstories').limitToFirst(20).once('value', (items) => {
        var promises = items.val().map((item) => {
          return new Promise((resolveItem) => {
            connection.child(`item/${item}`).once('value', (value) => {
              resolveItem(value.val());
            });
          });
        });
        Promise.all(promises).then(resolve);
      });
    });
  }

  static userInfo(userId) {
    return new Promise((resolve) => {
      connection.child(`user/${userId}`).once('value', (value) => { resolve(value.val()); });
    });
  }
}
