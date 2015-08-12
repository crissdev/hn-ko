import ko from 'knockout';
import jQuery from 'jquery';
import hasher from 'hasher';
import {currentRoute} from '../../shared/router';


export default class ViewSwitch {
  constructor() {
    this.component = ko.observable();
    this._routeChangedSubscription = currentRoute.subscribe(this._onRouteChanged, this);
    jQuery(document).ready(hasher.init.bind(hasher));
  }

  dispose() {
    this._routeChangedSubscription.dispose();
  }

  _onRouteChanged(route) {
    var routeInfo = route.$route;

    // Clear current view
    this.component(undefined);

    if (routeInfo) {
      var componentName = 'c' + (+new Date());

      if (!routeInfo.$component) {
        routeInfo.$component = { name: componentName };

        if (typeof routeInfo.component === 'string') {
          ko.components.register(componentName, { component: routeInfo.component });
        }
        else {
          ko.components.register(componentName, routeInfo.component);
        }
      }
      else {
        componentName = routeInfo.$component.name;
      }
      this.component({ name: componentName, params: route.params });
    }
  }
}
