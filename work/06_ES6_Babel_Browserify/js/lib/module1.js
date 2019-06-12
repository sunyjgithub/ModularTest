"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;

//名字导出 或者叫分别暴露
var msg = exports.msg = "this is module1";

function foo() {
    console.log("foo() module1");
}