"use strict";
exports.__esModule = true;
var dotenv = require('dotenv');
var CodeforcesClient_1 = require("./CodeforcesClient");
var getAllProblems_1 = require("./getAllProblems");
dotenv.config({ path: '../.env' });
var key = process.env.KEY;
var secret = process.env.SECRET;
var contestId = process.env.CONTEST_ID;
// Run Your functions Here
//GetAllHandles(key,secret,contestId);
(0, getAllProblems_1.GetAllProblems)(key, secret, contestId).then(function (data) {
    console.log(data);
});
exports["default"] = CodeforcesClient_1.CodeforcesClient;
