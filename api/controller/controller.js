'use strict';

const mock = require('../mock/mock.json')

exports.mock = function(req, res) {
    res.status(200)
    .json(mock);
};