(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module4');

var module4 = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(module4); //方式1：通过解构赋值的方式将模块1引入

//import {msg,foo} from './module1'
//console.log(msg);
//foo();

//导入的时候可以直接重新命名
//import {msg as msg1,foo as foo1} from './module1'
//console.log(msg1);
//foo1();

//方式2 通过直接导入整个模块
//import * as moudle1 from './module1';

//console.log(moudle1);
//console.log(moudle1.msg);
//console.log(moudle1.foo())


//对于默认导出 可以通过任意名称接收
//import xxx from './module2'
//xxx();

//一个是默认暴露 另一个是名称暴露 不可以通过解构赋值的方式进行导入 会报错
//import {xxx, bar2} from './module2'
//xxx();
//bar2();

//可以通过这种方式进行引入
//import xxx, {bar2} from './module2'
//xxx();
//bar2();

// import {fn,age,name} from "./module3";
// console.log(fn());//我是laowang！今年90岁了
// console.log(age);//90
// console.log(name);//laowang


// import module4 from './module4'
// console.log(module4);   //输出undifined

module4.fun3();
},{"./module4":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _module = require("./module3");

Object.keys(_module).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _module[key];
        }
    });
});
exports.fun3 = fun3;
function fun3() {
    console.log("fun3 modulee3");
} //作为中转  将模块3进行暴露
},{"./module3":2}]},{},[1]);
