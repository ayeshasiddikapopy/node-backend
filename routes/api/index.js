const express = require("express")
const router = express.Router()
const authentication = require("./auth.js")

router.use("/auth", authentication)

router.get("/", (req, res) => {
    res.send("ami route")
})
module.exports = router
