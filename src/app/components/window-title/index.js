import {currentRoute} from '../../shared/router';


//-----------------------------------------------------------------------------
// Set window title based on the current viewed page
//
// Component name: cko-window-title
//
export default class WindowTitle {
  constructor() {
    this._routeChangedSubscription = currentRoute.subscribe(this._onRouteChanged, this);
  }

  _onRouteChanged(route) {
    var routeInfo = route.$route;
    var docTitle = '';

    if (routeInfo && routeInfo.meta) {

      if (typeof routeInfo.meta.docTitle === 'function') {
        docTitle = routeInfo.meta.docTitle(route);
      }
      else {
        docTitle = routeInfo.meta.docTitle;
      }
    }
    if (docTitle) {
      window.document.title = `${docTitle} - Hacker News Knockout`;
    }
    else {
      window.document.title = `Hacker News Knockout`;
    }
  }

  dispose() {
    if (this._routeChangedSubscription) {
      this._routeChangedSubscription.dispose();
      this._routeChangedSubscription = undefined;
    }
  }
}
