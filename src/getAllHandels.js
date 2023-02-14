"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GetAllHandles = void 0;
var CodeforcesClient_1 = require("./CodeforcesClient");
var fs = require('fs');
// Filestream
var logger = fs.createWriteStream('handles.xml', {
    flags: 'a' // 'a' means appending (old data will be preserved)
});
var handleFormat = function (handle) { return __awaiter(void 0, void 0, void 0, function () {
    var arr;
    return __generator(this, function (_a) {
        arr = [
            '<team>',
            "<id> ".concat(1, " </id>"),
            "<name> ".concat(handle, " </name>"),
            "<university> AinShames </university>",
            "<nationality> Egyption </nationality>",
            "<icpc-id> ".concat(1, " </icpc-id>"),
            '</team>',
        ];
        arr.forEach(function (element) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, logger.write(element)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
var exportHandles = function (handleSet) {
    // export handles in xml
    handleSet.forEach(function (handle) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFormat(handle)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
var GetAllHandles = function (key, secret, contestId) { return __awaiter(void 0, void 0, void 0, function () {
    var client, handleSet, root;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new CodeforcesClient_1.CodeforcesClient(key, secret);
                handleSet = new Set();
                return [4 /*yield*/, client.callMethod("contest.status", { contestId: contestId }).then(function (data) {
                        return data;
                    })];
            case 1:
                root = _a.sent();
                return [4 /*yield*/, root.result.forEach(function (status) {
                        status.author.members.forEach(function (object) {
                            handleSet.add(object.handle);
                        });
                    })];
            case 2:
                _a.sent();
                exportHandles(handleSet);
                return [2 /*return*/];
        }
    });
}); };
exports.GetAllHandles = GetAllHandles;
exports["default"] = CodeforcesClient_1.CodeforcesClient;
