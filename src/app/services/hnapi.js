import Firebase from 'firebase';

const endpoint = 'https://hacker-news.firebaseio.com/v0/';
var connection = new Firebase(endpoint);


export default class HNAPI {
  static newest() {
    return new Promise((resolve) => {
      connection.child('topstories').limitToFirst(20).once('value', (items) => {
        HNAPI._details(items.val()).then(resolve);
      });
    });
  }

  static userInfo(userId) {
    return new Promise((resolve) => {
      connection.child(`user/${userId}`).once('value', (value) => { resolve(value.val()); });
    });
  }

  static userSubmissions(userId) {
    return new Promise((resolve) => {
      connection.child(`user/${userId}/submitted`).limitToFirst(20).once('value', (value) => {
        HNAPI.submissions(value.val())
          .then((items) => items.filter((item) => !item.deleted))
          .then(resolve);
      });
    });
  }

  static userStories(userId) {
    return HNAPI.userSubmissions(userId).then((items) => items.filter((item) => item.type === 'story'));
  }

  static submissions(items) {
    return HNAPI._details(items)
  }

  static _details(items) {
    return new Promise((resolve) => {
      var promises = items.map((itemId) => {
        return new Promise((resolveItem) => {
          connection.child(`item/${itemId}`).once('value', (value) => {
            resolveItem(value.val());
          });
        });
      });
      Promise.all(promises).then(resolve);
    });
  }
}
