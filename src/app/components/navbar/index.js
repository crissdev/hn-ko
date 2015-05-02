import hasher from 'hasher';


export default class Navbar {
  constructor() {
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
