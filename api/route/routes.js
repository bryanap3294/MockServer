'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');

  app.route('/mock')
    .get(controller.mock);
  
  app.route('/mock/timeout')
    .get(controller.mockTimeOut);

  app.route('/mock/generateJson')
    .get(controller.jsonFile);
};