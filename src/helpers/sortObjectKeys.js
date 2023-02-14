"use strict";
exports.__esModule = true;
exports.sortObjectKeys = void 0;
function sortObjectKeys(obj) {
    var newObject = {};
    Object.keys(obj)
        .sort()
        .forEach(function (key) {
        newObject[key] = obj[key];
    });
    return newObject;
}
exports.sortObjectKeys = sortObjectKeys;
