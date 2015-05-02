import ko from 'knockout';


export default {
  loadComponent(componentName, componentConfig, callback) {
    // Custom component definition format
    if (typeof componentConfig.component === 'string') {
      var promise = Promise.all([
        System.import(componentConfig.component + '/index'),
        System.import(componentConfig.component + '/index.html!text')
      ]);
      promise.then(
        function(resources) {
          var config = {
            template: resources[1]
              ? ko.utils.parseHtmlFragment(resources[1])
              : [document.createComment('')]
          };
          if (typeof resources[0].default.createViewModel === 'function') {
            config.createViewModel = resources[0].default.createViewModel;
          }
          else {
            config.createViewModel = function(params, componentInfo) {
              return new resources[0].default(params, componentInfo);
            }
          }
          callback(config);
        },
        function(error) {
          console.log(`Failed to load component ${componentName}`, error);
          callback(null);
        });
    }
    else {
      callback(null);
    }
  }
};
