import ko from 'knockout';
import hnapi from '../../services/hnapi';


export default class NewestPage {
  constructor() {
    this.items = ko.observableArray();
    this.busy = ko.observable(true);

    hnapi.newest()
      .then((items) => {
        this.busy(false);
        items.forEach((item, index) => item.index = index + 1);
        this.items.push(...items);
      });
  }
}
