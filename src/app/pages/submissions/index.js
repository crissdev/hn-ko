import ko from 'knockout';
import hnapi from '../../services/hnapi';


export default class SubmissionsPage {
  constructor(routeParams) {
    this.userId = routeParams.userId;
    this.busy = ko.observable(true);
    this.items = ko.observableArray();

    hnapi.userStories(routeParams.userId)
      .then((items) => {
        this.busy(false);
        items.forEach((item, index) => item.index = index + 1);
        this.items.push(...items);
      });
  }
}
