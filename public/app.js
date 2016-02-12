import moment from 'moment';
import chrome from 'ui/chrome';
import uiModules from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import 'plugins/test/less/main.less';

chrome
  .setNavBackground('#222222')
  .setTabs([]);

uiRoutes.enable();
uiRoutes
.when('/', {
  template: require('plugins/test/templates/index.html'),
  resolve: {
    currentTime($http) {
      return $http.get('../test/api/example').then(function (resp) {
        return resp.data.time;
      });
    }
  }
});

uiModules
.get('app/test', [])
.controller('testHelloWorld', function ($scope, $route, $interval) {
  $scope.title = 'Test';
  $scope.description = 'An awesome Kibana plugin';

  var currentTime = moment($route.current.locals.currentTime);
  $scope.currentTime = currentTime.format('HH:mm:ss');
  var unsubscribe = $interval(function () {
    $scope.currentTime = currentTime.add(1, 'second').format('HH:mm:ss');
  }, 1000);
  $scope.$watch('$destroy', unsubscribe);
});
