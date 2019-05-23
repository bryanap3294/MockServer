'use strict';

const mock = require('../mock/mock.json')

exports.mock = function(req, res) {
    res.status(200)
    .json(mock);
};

exports.mockTimeOut= function(req,res){
    setTimeout(
        function(){ 
            res.status(200)
            .json(mock) 
        },6000)
};