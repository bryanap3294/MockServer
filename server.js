var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
var routes = require('./api/route/routes');

app.listen(port);

routes(app);

console.log('Mock API server started on: ' + port);
