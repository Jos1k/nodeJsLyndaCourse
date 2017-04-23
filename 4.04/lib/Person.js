var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, EventEmitter);

Person.prototype.on('speak',function(said){
    console.log(`${this.name} -> ${said}`);
});

module.exports = Person;