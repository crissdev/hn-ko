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
      connection.child(`user/${userId}/submitted`).limitToFirst(20)
        .once('value', (value) => {
          HNAPI.submissions(value.val())
            .then((items) => items.filter((item) => !item.deleted))
            .then((items) => items.splice(0, 20))
            .then(resolve);
        });
    });
  }

  static userStories(userId) {
    return HNAPI.userSubmissions(userId)
      .then((items) => items.filter((item) => item.type === 'story'));
  }

  static userComments(userId) {
    return HNAPI.userSubmissions(userId)
      .then((items) => items.filter((item) => item.type === 'comment'))
      .then((items) => {
        return new Promise((resolve) => {
          var promises = items.map((item) => {
            return HNAPI._root(item.parent).then((story) => {
              item.storyTitle = story.title;
              item.storyId = story.id;
              return item;
            })
          });
          return Promise.all(promises).then(resolve);
        });
      });
  }

  static submissions(items) {
    return HNAPI._details(items)
  }

  static _root(itemId) {
    return HNAPI._details([itemId]).then((details) => {
      if (details[0].parent) {
        return HNAPI._root(details[0].parent);
      }
      return details[0];
    });
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
