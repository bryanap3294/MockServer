'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');

  app.route('/mock')
    .get(controller.mock);

};