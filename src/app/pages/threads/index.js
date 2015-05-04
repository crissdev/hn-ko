import ko from 'knockout';
import hnapi from '../../services/hnapi';
import sanitizeHtml from 'sanitize-html';


export default class ThreadsPage {
  constructor(routeParams) {
    this.subtitle = ko.observable();
    this.busy = ko.observable(true);
    this.items = ko.observableArray();

    if (routeParams.userId) {
      this.subtitle(`${routeParams.userId}'s comments`);
      hnapi.userComments(routeParams.userId)
        .then((items) => {
          this.busy(false);
          items.forEach((item) => {
            item.text = sanitizeHtml(item.text, {
              allowedTags: ['p', 'b', 'i', 'strong', 'em', 'a'],
              allowedAttributes: {
                a: ['href', 'title', 'rel']
              }
            });
          });
          this.items.push(...items);
        });
    }
    else {
      hnapi._root(routeParams.threadId)
        .then((story) => {
          this.subtitle(story.title);
          document.title = `${story.title} - Hacker News Knockout`;
        })
        .then(() => hnapi.submissions([routeParams.threadId]))
        .then((comments) => {
          this.items.push(...comments.filter((item) => !item.deleted));

          // Load just some more comments if available
          var kids = comments.reduce((previous, item) => previous.concat(item.kids || []), []);
          if (kids.length > 0) {
            hnapi._details(kids)
              .then((comments) => {
                this.items.push(...comments.filter((item) => !item.deleted));
              })
          }
        })
        .then(() => {
          this.busy(false);
        });
    }
  }
}
