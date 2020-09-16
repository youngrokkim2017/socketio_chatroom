const express = require("express");
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');

router.post('/login', catchErrors());
router.post('/register', catchErrors());

module.exports = router;