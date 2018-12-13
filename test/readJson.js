'use strict';

const fs = require('fs');
var should = require("should");
var request = require("request");
var expect = require("chai").expect;

var parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

fs.readFile('test.json', (err, data) => {  
    if (err) throw err;
    let student = JSON.parse(data);
    student['gender'] = 'male';
    console.log(student);

    console.log('This is after the read call');  
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(student);
        
        fs.writeFile('new-edited-test.xml', xml, function(err, data){
            if (err) console.log(err);
            
            console.log("successfully written our update xml to file");
        })
});

