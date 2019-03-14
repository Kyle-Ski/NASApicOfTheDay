const express = require("express")
const router = express.Router()
const controller = require("../controllers/randomPicController")

router.get("/", controller.getPic)

module.exports = router
