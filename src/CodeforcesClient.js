"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CodeforcesClient = void 0;
var randomstring = require("randomstring");
var CryptoJS = require('crypto-js');
//const axios = require('axios');
var axios_1 = require("axios");
var sortObjectKeys_1 = require("./helpers/sortObjectKeys");
var contest_1 = require("./modules/contest");
var CodeforcesClient = /** @class */ (function () {
    function CodeforcesClient(key, secret) {
        if (key === void 0) { key = ''; }
        if (secret === void 0) { secret = ''; }
        this.key = key;
        this.secret = secret;
        this.contest = (0, contest_1.contest)(this);
        this._baseUrl = 'http://codeforces.com/api';
    }
    CodeforcesClient.prototype.callMethod = function (method, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.generateUrl(method, params);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get(url)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CodeforcesClient.prototype.generateUrl = function (method, params) {
        var randomStart = randomstring.generate(6);
        var time = Math.round(Date.now() / 1000);
        var apiSigParamsObject = (0, sortObjectKeys_1.sortObjectKeys)(__assign(__assign({}, params), { apiKey: this.key, time: time }));
        var apiSig = this.generateApiSig(randomStart, method, apiSigParamsObject);
        return "".concat(this._baseUrl, "/").concat(method, "?").concat(this.toParamsString(params), "&apiKey=").concat(this.key, "&time=").concat(time, "&apiSig=").concat(randomStart).concat(apiSig);
    };
    CodeforcesClient.prototype.generateApiSig = function (randomStart, methodName, params) {
        return CryptoJS.SHA512("".concat(randomStart, "/").concat(methodName, "?").concat(this.toParamsString(params), "#").concat(this.secret)).toString();
    };
    CodeforcesClient.prototype.toParamsString = function (params) {
        return Object.keys(params)
            .map(function (key) { return "".concat(key, "=").concat(params[key]); })
            .join('&');
    };
    return CodeforcesClient;
}());
exports.CodeforcesClient = CodeforcesClient;
