import ko from 'knockout';
import hnapi from '../../services/hnapi';
import sanitizeHtml from 'sanitize-html';


export default class ThreadsPage {
  constructor(routeParams) {
    this.userId = routeParams.userId;
    this.busy = ko.observable(true);
    this.items = ko.observableArray();

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
}
