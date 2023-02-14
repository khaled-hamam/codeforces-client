"use strict";
exports.__esModule = true;
exports.contest = void 0;
var status_1 = require("./status/status");
var contest = function (client) { return ({
    status: (0, status_1.status)(client)
}); };
exports.contest = contest;
