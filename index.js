"use strict"
require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3222
const cors = require("cors")
const picOfTheDayRouter = require("./routes/randomPicRoutes")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(notFound)
app.use(errorHandler)

app.get("/", (req, res, next) => {
  process.env.NODE_ENV !== "production"
    ? res.json({
        message: "What's up? Welcome to the NASA Random picture of the day!"
      })
    : res.json({
        message: "What's up? Welcome to the NASA Random picture of the day!"
      })
})

app.use("/pod", picOfTheDayRouter)

function notFound(err, req, res, next) {
  res
    .status(404)
    .send({ error: "Not found!", status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
  console.error("NOPE, LOL", err)
  const stack = process.env.NODE_ENV !== "production" ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, () => {
  process.env.NODE_ENV !== "production"
    ? console.log(`I got you on http://localhost:${port}`)
    : console.log(`I got you on CHANGE THE PORT`)
})
