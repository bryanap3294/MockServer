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

exports.jsonFile= function(req,res){
    const fs = require('fs');
    let objJson= {
        "id":1,
        "name":"bryan"
    }

    let data = JSON.stringify(objJson);
    fs.writeFileSync('data.json', data);

    res.status(200)
    .json("OK");

}