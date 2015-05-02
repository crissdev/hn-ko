import ko from 'knockout';


export default class NHItem {
  constructor(params) {
    ko.utils.extend(this, params.data);
    this.itemType = params.itemType;
  }
}
