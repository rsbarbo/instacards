var router = require('express').Router();
var cookieParser = require('cookie-parser');
var instagramApi = require('instagram-node').instagram();
var fs = require('fs');
var Bluebird = require('bluebird');
var config = require('./config');
var Lob = require('lob')(config.lob_api_key);

Bluebird.promisifyAll(instagramApi);

/* redirect user to instagram for authentication */
