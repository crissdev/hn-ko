import jQuery from 'jquery';
import ko from 'knockout';
import hasher from 'hasher';
import crossroads from 'crossroads';


// An Object with the following properties:
//
// [string] pattern: The pattern used to register the route
// [string] location: The current hash in the location bar
// [object] params: The current route parameters
// [object] $route: All data for the route specified through route registration
//
var _currentRoute = ko.observable({});


//--------------------------------------------------------------------
// Hasher
function _onHashChanged(newHash) { crossroads.parse(_ensureTrailingSlash(newHash)); }
hasher.changed.add(_onHashChanged, undefined, 100);
hasher.initialized.add(_onHashChanged, undefined, 100);


//--------------------------------------------------------------------
// Crossroads
function _onRouteChanged(location, data) {
  var routeInfo = data.route.$routeInfo;
  var routeParams = _extractRouteParams(data);

  if (routeInfo) {
    _currentRoute({
      pattern: data.route._pattern,
      location: location,
      params: routeParams,
      $route: routeInfo
    });
  }
}
function _onRouteBypassed(location) {
  console.log(`Location '${location}' is not mapped`);
  _currentRoute({ location: location });
  hasher.replaceHash('404/');
}
function _extractRouteParams(data) {
  var routeParams = {};

  // Extract route parameters from possible places
  data.route._paramsIds.forEach(function(paramId, index) {
    var paramInfo = data.params[index];
    if (paramInfo) {
      if (paramId.indexOf('?') === 0 && jQuery.isPlainObject(paramInfo)) {
        Object.keys(paramInfo).forEach(function(paramId) {
          routeParams[paramId] = paramInfo[paramId];
        });
      }
      else {
        routeParams[paramId] = data.params[index];
      }
    }
  });
  return routeParams;
}
crossroads.greedyEnabled = false;
crossroads.ignoreState = true;
crossroads.routed.add(_onRouteChanged, undefined, 100);
crossroads.bypassed.add(_onRouteBypassed, undefined, 100);


//--------------------------------------------------------------------
// Routes registration
export function registerRoutes(routes) {
  Object.keys(routes).forEach(function(location) {
    var routeInfo = routes[location];
    var newRoute = crossroads.addRoute(location, null, ~~routeInfo.priority);

    newRoute.rules = routeInfo.rules;
    newRoute.$routeInfo = routeInfo;
  });
}

//--------------------------------------------------------------------
// We want all routes to end with a slash
function _ensureTrailingSlash(location) {
  location = location || '/';

  var index = location.indexOf('?'),
    newLocation = location;

  if (index > 0 && newLocation[index - 1] !== '/') {
    newLocation = newLocation.slice(0, index) + '/' + newLocation.slice(index);
  }
  else if (index < 0 && newLocation[newLocation.length - 1] !== '/') {
    newLocation += '/';
  }
  if (location !== newLocation) {
    var previouslyActive = hasher.changed.active;
    hasher.changed.active = false;
    hasher.replaceHash(newLocation);
    hasher.changed.active = previouslyActive;
  }

  return newLocation;
}



//--------------------------------------------------------------------
// Export read-only observables
export var currentRoute = ko.computed(() => _currentRoute());
