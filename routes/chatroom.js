const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const chatroomController = require('../controllers/chatroomController');