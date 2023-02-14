"use strict";
exports.__esModule = true;
var dotenv = require('dotenv');
var CodeforcesClient_1 = require("./CodeforcesClient");
var getAllHandels_1 = require("./getAllHandels");
dotenv.config({ path: '../.env' });
var key = process.env.KEY;
var secret = process.env.SECRET;
var contestId = process.env.CONTEST_ID;
// Run Your functions Here
(0, getAllHandels_1.GetAllHandles)(key, secret, contestId);
exports["default"] = CodeforcesClient_1.CodeforcesClient;
