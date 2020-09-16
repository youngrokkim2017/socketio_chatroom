const express = require("express");
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');

router.post('/login');

module.exports = router;