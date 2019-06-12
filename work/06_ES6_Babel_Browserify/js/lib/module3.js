"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

//暴露的时候也可以起别名

var myName = "laowang";
var myAge = 90;
var myfn = function myfn() {
    return "我是" + myName + "！今年" + myAge + "岁了";
};
exports.name = myName;
exports.age = myAge;
exports.fn = myfn;