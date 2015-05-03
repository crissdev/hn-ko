import ko from 'knockout';
import 'knockout.punches';
import 'knockout-switch-case';
import _ from 'underscore.string';
import moment from 'moment';
import routes from './routes';
import {registerRoutes} from './shared/router';


// Knockout component loader required for custom components (using SystemJS)
import componentLoader from './shared/component-loader';
ko.components.loaders.unshift(componentLoader);


// Enable KO extensions
ko.punches.enableAll();


// Custom KO filters
ko.filters.plural   = (count)  => count > 1 ? 's' : '';
ko.filters.itemLink = (itemId) => '#/item?id=' + encodeURIComponent(itemId);
ko.filters.userLink = (userId) => '#/user?id=' + encodeURIComponent(userId);
ko.filters.threadsLink = (userId) => '#/threads?id=' + encodeURIComponent(userId);
ko.filters.submissionsLink = (userId) => '#/submitted?id=' + encodeURIComponent(userId);
ko.filters.timeAgo = (unixTimestamp) => moment.unix(unixTimestamp).fromNow();
ko.filters.padLeft = (value, count, ch = ' ') => _.pad(value, count, ch, 'left');


// Register routes
registerRoutes(routes);


// Register components
import {register as registerComponents} from './components/index';
registerComponents();


export function run() {
  // Bootstrap the application
  ko.applyBindings({});
}
