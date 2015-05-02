import ko from 'knockout';
import hnapi from '../../services/hnapi';


export default class NewestPage {
  constructor() {
    this.items = ko.observableArray();
    this.busy = ko.observable(true);

    hnapi.newest()
      .then((items) => {
        items.forEach((item, index) => {
          item.index = index + 1;
          item.kids = item.kids || [];
        });
        this.items.push.apply(this.items, items);
        this.busy(false)
      });
  }
}
