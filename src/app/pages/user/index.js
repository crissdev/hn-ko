import ko from 'knockout';
import hnapi from '../../services/hnapi';
import sanitizeHtml from 'sanitize-html';


export default class UserPage {
  constructor(routeParams) {
    this.userId = routeParams.userId;
    this.created = undefined;
    this.karma = undefined;
    this.about = undefined;
    this.busy = ko.observable(true);

    hnapi.userInfo(routeParams.userId)
      .then((data) => {
        this.created = data.created;
        this.karma = data.karma;
        this.about = sanitizeHtml(data.about, {
          allowedTags: ['p', 'b', 'i', 'strong', 'em', 'a'],
          allowedAttributes: {
            a: ['href', 'title', 'rel']
          }
        });
        this.busy(false);
      });
  }
}
