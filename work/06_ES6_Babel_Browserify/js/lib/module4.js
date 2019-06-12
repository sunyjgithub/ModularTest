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