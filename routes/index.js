const express = require("express")
const router = express.Router()
const apiRoutes = require("./api")

const api = process.env.BASE_URL

router.use(api, apiRoutes)

router.use(api, (req , res) => {
    res.send("no api found on this routes")
})

module.exports = router