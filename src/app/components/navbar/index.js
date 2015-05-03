import hasher from 'hasher';


export default class Navbar {
  constructor(params) {
    if (params) {
      this.activePageTitle = params.activePageTitle;
    }
  }

  navHome() {
    var current = hasher.getHash();
    if (current === '') {
      hasher.changed.dispatch(current, current);
    }
    else {
      hasher.setHash('');
    }
  }
}
