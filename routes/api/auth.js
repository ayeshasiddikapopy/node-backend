const express = require("express")
const router = express.Router()
const registrationController = require ("../../controller/registrationController.js")
const loginController = require("../../controller/loginController.js")
const emailVarificationOtpMatch = require ("../../controller/emailVarificationOtpMatch.js")

router.post("/registration", registrationController)
router.post("/login", loginController)
router.post("/otpmatch", emailVarificationOtpMatch)

module.exports = router