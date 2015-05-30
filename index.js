'use strict'

var fs = require('fs');

var DICTIONARIES = JSON.parse(fs.readFileSync('dict.json','utf-8'));

var Person = function(surname,name,patronimic){
    this.surname = surname;
    this.name = name;
    this.patronymic = patronimic;
    this.toString = function(){
        return this.surname + ' ' + this.name + ' ' + this.patronymic;
    }
}

var random = function(length){
    return Math.floor(Math.random() * length);
};

var load = function (resource){
    return fs.readFileSync(resource).toString().split("\r\n");

};

var getMaleFullName = function(){
    var surname = load(DICTIONARIES.RU.RU_MALE_SURNAMES);
    var name = load(DICTIONARIES.RU.RU_MALE_NAMES);
    var patronymic = load(DICTIONARIES.RU.RU_MALE_PATRONYMICS);
    return new Person(surname[random(surname.length)]
                      ,name[random((name.length))]
                      ,patronymic[random(patronymic.length)]);

};
var getFemaleFullName = function () {
    var surname = load(DICTIONARIES.RU.RU_FEMALE_SURNAMES);
    var name = load(DICTIONARIES.RU.RU_FEMALE_NAMES);
    var patronymic = load(DICTIONARIES.RU.RU_FEMALE_PATRONYMICS);
    return new Person(surname[random(surname.length)]
        ,name[random((name.length))]
        ,patronymic[random(patronymic.length)]);
};

var getFullName = function(gender){
    switch(gender) {
        case 'male':{
            return getMaleFullName().toString();
        }break;
        case 'female':{
            return getFemaleFullName().toString();
        }break;
    }
};

module.exports = {
    getRandomFullName : getFullName
};