/**
 * Module dependencies.
 */
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var schedule = require("node-schedule");

/**
 * Load environment variables from .env.example file, where API keys and passwords are configured.
 */
dotenv.config();

/**
 * Services
 */
var bettingService = require("./src/services/betting");

const bettingDaemon = schedule.scheduleJob("*/" + process.env.SCHEDULE_INTERVAL + " * * * * *", bettingService);

console.log("---------- Started Betting Daemon ----------");
