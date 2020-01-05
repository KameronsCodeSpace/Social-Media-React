// make a post request where i send the body to the db to see if it exists, it it does't make an account

const express = require('express');
const db = require('../pgPromise');

const Router = express.Router();
